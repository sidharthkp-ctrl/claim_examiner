import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

interface CardProps {
  title?: string
  icon?: LucideIcon
  iconColor?: string
  children: ReactNode
  className?: string
}

export function Card({ title, icon: Icon, iconColor, children, className }: CardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-md p-3 mb-2.5", className)}>
      {title && (
        <div className="text-[13px] font-medium text-foreground mb-2 flex items-center gap-1.5">
          {Icon && <Icon className="w-4 h-4" style={{ color: iconColor }} />}
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

interface FieldRowProps {
  label: string
  children: ReactNode
  className?: string
}

export function FieldRow({ label, children, className }: FieldRowProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-start py-1 border-b border-border last:border-b-0",
        className
      )}
    >
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span className="text-[12px] font-medium text-foreground text-right max-w-[60%]">
        {children}
      </span>
    </div>
  )
}

interface StatCardProps {
  label: string
  value: string | number
  color?: string
}

export function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="bg-secondary rounded-md p-2.5">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div
        className="text-[20px] font-medium mt-0.5"
        style={{ color: color || "inherit" }}
      >
        {value}
      </div>
    </div>
  )
}

interface InfoBoxProps {
  variant?: "info" | "warning" | "danger"
  children: ReactNode
  className?: string
}

const infoBoxStyles = {
  info: "bg-[#E6F1FB] text-[#0C447C]",
  warning: "bg-[#FAEEDA] text-[#633806]",
  danger: "bg-[#FCEBEB] text-[#791F1F]",
}

export function InfoBox({ variant = "info", children, className }: InfoBoxProps) {
  return (
    <div className={cn("rounded-md p-2.5 text-[11px]", infoBoxStyles[variant], className)}>
      {children}
    </div>
  )
}

interface AIBoxProps {
  title: ReactNode
  children: ReactNode
}

export function AIBox({ title, children }: AIBoxProps) {
  return (
    <div className="bg-[#FAEEDA] border border-[#FAC775] rounded-md p-3 mb-2.5">
      <div className="text-[12px] font-medium text-[#854F0B] mb-1.5 flex items-center gap-1.5">
        {title}
      </div>
      <div className="text-[11px] text-[#633806] leading-relaxed">{children}</div>
    </div>
  )
}

interface MiniFieldProps {
  label: string
  value: ReactNode
}

export function MiniField({ label, value }: MiniFieldProps) {
  return (
    <div className="bg-secondary rounded-md p-2">
      <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
      <div className="text-[12px] font-medium text-foreground mt-0.5">{value}</div>
    </div>
  )
}
