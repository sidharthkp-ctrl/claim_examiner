"use client"

import { LogOut } from "lucide-react"

interface TopbarProps {
  breadcrumbLabel: string
}

export function Topbar({ breadcrumbLabel }: TopbarProps) {
  return (
    <div className="bg-card border-b border-border px-4 py-2 flex items-center gap-2">
      <nav className="text-[12px] text-muted-foreground">
        <a href="#" className="text-[#185FA5] hover:underline">Home</a>
        <span> / </span>
        <span>{breadcrumbLabel}</span>
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-[11px] text-muted-foreground">Examiner: Sarah M.</span>
        <button className="flex items-center gap-1 px-2.5 py-1 text-[11px] border border-border rounded-md text-muted-foreground hover:bg-secondary">
          <LogOut className="w-3 h-3" />
          Release
        </button>
      </div>
    </div>
  )
}
