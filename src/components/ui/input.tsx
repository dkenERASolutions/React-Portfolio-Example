import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-700/60 bg-slate-800/50 px-4 py-2 text-sm text-white placeholder:text-slate-500 transition-colors",
        "focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
