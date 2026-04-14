import { prisma } from "@/libs/prismaDB";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

const hasDatabase = Boolean(process.env.DATABASE_URL);
const hasGitHub   = Boolean(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET);
const hasGoogle   = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
const hasEmail    = Boolean(process.env.EMAIL_SERVER_HOST && process.env.EMAIL_FROM);

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },

  // Only attach the Prisma adapter when a real database URL is configured.
  // Without this guard, PrismaAdapter crashes the API route on every request
  // when DATABASE_URL is empty, causing CLIENT_FETCH_ERROR on the frontend.
  ...(hasDatabase && { adapter: PrismaAdapter(prisma) }),

  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email:    { label: "Email",    type: "text",     placeholder: "john@example.com" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text",     placeholder: "John Doe" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        if (!hasDatabase) {
          throw new Error("Database not configured");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user?.password) {
          throw new Error("No user found");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),

    // Email magic-link provider requires both a mail server and a database
    ...(hasDatabase && hasEmail
      ? [
          EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST!,
              port: Number(process.env.EMAIL_SERVER_PORT),
              auth: {
                user: process.env.EMAIL_SERVER_USER!,
                pass: process.env.EMAIL_SERVER_PASSWORD!,
              },
            },
            from: process.env.EMAIL_FROM!,
          }),
        ]
      : []),

    ...(hasGitHub
      ? [
          GitHubProvider({
            clientId:     process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
          }),
        ]
      : []),

    ...(hasGoogle
      ? [
          GoogleProvider({
            clientId:     process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),
  ],
};
