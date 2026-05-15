import { UserSearch, Building, Globe, Receipt, Send, Microscope, Globe2 } from "lucide-react"
import { Card } from "../card"
import { Badge } from "../badge"

export function IntegrationsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Left Column - Active Integrations */}
        <div>
          <div className="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
            Active integrations
          </div>
          
          <IntegrationCard
            icon={<UserSearch className="w-4 h-4" />}
            iconBg="#E6F1FB"
            iconColor="#185FA5"
            title="Accurint / LexisNexis"
            description="Identity, name history, address lookup"
            status="Connected"
            statusVariant="success"
          />
          
          <IntegrationCard
            icon={<Building className="w-4 h-4" />}
            iconBg="#E6F1FB"
            iconColor="#185FA5"
            title="CSLN — Child support liens"
            description="State-specific lien lookup (CA CO MA NV RI TX WA)"
            status="Connected"
            statusVariant="success"
          />
          
          <IntegrationCard
            icon={<Globe className="w-4 h-4" />}
            iconBg="#E6F1FB"
            iconColor="#185FA5"
            title="SSDI Death Index"
            description="Social Security death verification"
            status="Connected"
            statusVariant="success"
          />
          
          <IntegrationCard
            icon={<Receipt className="w-4 h-4" />}
            iconBg="#E6F1FB"
            iconColor="#185FA5"
            title="IRS lien / federal levy"
            description="Tax lien and levy lookup"
            status="Connected"
            statusVariant="success"
          />
          
          <IntegrationCard
            icon={<Send className="w-4 h-4" />}
            iconBg="#FAEEDA"
            iconColor="#854F0B"
            title="Prudential referral portal"
            description="Approval and referral routing to Pru"
            status="Auth required"
            statusVariant="warning"
          />
          
          <IntegrationCard
            icon={<Microscope className="w-4 h-4" />}
            iconBg="#EEEDFE"
            iconColor="#534AB7"
            title="MRX — Medical record check"
            description="Contestable period medical discrepancy check"
            status="Last run 04/20"
            statusVariant="purple"
          />
          
          <IntegrationCard
            icon={<Globe2 className="w-4 h-4" />}
            iconBg="#E1F5EE"
            iconColor="#0F6E56"
            title="Foreign investigation vendor"
            description="D-11 — estimate ≤$1K no Pru approval; >$1K requires Pru"
            status="Not triggered"
            statusVariant="neutral"
          />
        </div>

        {/* Right Column - Activity Log */}
        <div>
          <div className="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
            Last activity log
          </div>
          
          <Card className="p-3">
            <ActivityLogItem
              initials="SS"
              bgColor="#EAF3DE"
              textColor="#3B6D11"
              title="SSDI lookup"
              time="04/20/2026 10:42 AM"
              description="Death confirmed. SSN match. DOD 02/28/2026."
            />
            
            <ActivityLogItem
              initials="AC"
              bgColor="#EAF3DE"
              textColor="#3B6D11"
              title="Accurint search"
              time="04/20/2026 10:44 AM"
              description="Identity confirmed. Name variant: John Alan Smith."
            />
            
            <ActivityLogItem
              initials="CS"
              bgColor="#EAF3DE"
              textColor="#3B6D11"
              title="CSLN check — TX"
              time="04/20/2026 10:45 AM"
              description="No child support liens. TX confirmed."
            />
            
            <ActivityLogItem
              initials="MX"
              bgColor="#EEEDFE"
              textColor="#534AB7"
              title="MRX medical check"
              time="04/20/2026 10:48 AM"
              description="Contestable period review initiated. Records requested from Austin Regional Clinic."
              isLast
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

interface IntegrationCardProps {
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  title: string
  description: string
  status: string
  statusVariant: "success" | "warning" | "neutral" | "purple"
}

function IntegrationCard({ icon, iconBg, iconColor, title, description, status, statusVariant }: IntegrationCardProps) {
  return (
    <div className="border border-border rounded-md p-3 flex items-center gap-2.5 mb-2">
      <div
        className="w-8 h-8 min-w-[30px] rounded-md flex items-center justify-center"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[12px] font-medium">{title}</div>
        <div className="text-[11px] text-muted-foreground">{description}</div>
      </div>
      <Badge variant={statusVariant} className="text-[10px]">{status}</Badge>
    </div>
  )
}

interface ActivityLogItemProps {
  initials: string
  bgColor: string
  textColor: string
  title: string
  time: string
  description: string
  isLast?: boolean
}

function ActivityLogItem({ initials, bgColor, textColor, title, time, description, isLast }: ActivityLogItemProps) {
  return (
    <div className={`flex gap-2.5 py-2.5 ${!isLast ? "border-b border-border" : ""}`}>
      <div
        className="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[9px] font-medium"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {initials}
      </div>
      <div>
        <div className="text-[12px] font-medium">{title}</div>
        <div className="text-[11px] text-muted-foreground">{time}</div>
        <div className="text-[11px] text-foreground mt-0.5">{description}</div>
      </div>
    </div>
  )
}
