import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral" | "purple"

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-[#EAF3DE] text-[#3B6D11]",
  warning: "bg-[#FAEEDA] text-[#854F0B]",
  danger: "bg-[#FCEBEB] text-[#A32D2D]",
  info: "bg-[#E6F1FB] text-[#185FA5]",
  neutral: "bg-secondary text-muted-foreground",
  purple: "bg-[#EEEDFE] text-[#534AB7]",
}

export function Badge({ variant = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
