import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  // PrismaPg throws synchronously when connectionString is undefined/empty,
  // which crashes the entire auth API route. Guard against it here.
  if (!process.env.DATABASE_URL) {
    // Return a bare client — queries will fail at runtime but the module
    // won't blow up on import, keeping API routes alive.
    return new PrismaClient();
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PrismaPg } = require("@prisma/adapter-pg");
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
