import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ButtonProps {
  variant?: "default" | "primary" | "success" | "danger"
  children: ReactNode
  className?: string
  onClick?: () => void
}

const buttonStyles = {
  default: "bg-transparent text-muted-foreground border-border hover:bg-secondary",
  primary: "bg-[#185FA5] text-white border-[#185FA5] hover:bg-[#0C447C]",
  success: "bg-[#3B6D11] text-white border-[#3B6D11] hover:bg-[#27500A]",
  danger: "bg-transparent text-[#A32D2D] border-[#F09595] hover:bg-[#FCEBEB]",
}

export function Button({ variant = "default", children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium border cursor-pointer transition-colors",
        buttonStyles[variant],
        className
      )}
    >
      {children}
    </button>
  )
}

export function ActionBar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-card border-t border-border px-4 py-2 flex gap-2 items-center">
      {children}
    </div>
  )
}
