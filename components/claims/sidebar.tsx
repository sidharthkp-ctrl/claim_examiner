"use client"

import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
  section: string
}

const navItems: NavItem[] = [
  { id: "case-context", label: "Case Context", section: "Case" },
  { id: "event-details", label: "Event Details", section: "Case" },
  { id: "policy-info", label: "Policy Info", section: "Policy" },
  { id: "documents", label: "Documents", section: "Documents" },
  { id: "integrations", label: "External Integrations", section: "Integrations" },
  { id: "medical", label: "Medical Review", section: "Medical" },
  { id: "referral", label: "Referral", section: "Referral" },
  { id: "worksheet", label: "Worksheet", section: "Worksheet" },
  { id: "tools", label: "Tools", section: "Tools" },
  { id: "comms", label: "External Communications", section: "Communications" },
  { id: "decision", label: "Decision", section: "Decision" },
]

interface ClaimsSidebarProps {
  activePage: string
  onPageChange: (page: string) => void
}

export function ClaimsSidebar({ activePage, onPageChange }: ClaimsSidebarProps) {
  const groupedItems = navItems.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = []
    }
    acc[item.section].push(item)
    return acc
  }, {} as Record<string, NavItem[]>)

  return (
    <aside className="w-[196px] min-w-[196px] bg-card border-r border-border flex flex-col overflow-y-auto">
      <div className="px-3.5 py-3 border-b border-border flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#185FA5]" />
        <span className="font-medium text-[13px] text-foreground">Neutrinos Claims</span>
      </div>
      
      {Object.entries(groupedItems).map(([section, items]) => (
        <div key={section} className="py-1.5 border-b border-border">
          <div className="px-3.5 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
            {section}
          </div>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full text-left px-3.5 py-1.5 text-[12px] border-l-2 border-transparent cursor-pointer transition-colors",
                "text-muted-foreground hover:bg-secondary hover:text-foreground",
                activePage === item.id && "text-[#0C447C] border-l-[#185FA5] bg-[#E6F1FB]"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  )
}
