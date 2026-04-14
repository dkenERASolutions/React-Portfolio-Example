// Allow TypeScript to accept CSS files as side-effect imports
// (e.g. import '@/styles/tailwind.css')
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
