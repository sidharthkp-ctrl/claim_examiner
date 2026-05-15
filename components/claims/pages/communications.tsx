import { Mail, Plus } from "lucide-react"
import { Card } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"

export function CommunicationsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[13px] font-medium text-foreground">External communications</span>
        <Button variant="primary" className="text-[11px]">
          <Plus className="w-3.5 h-3.5" />
          Log communication
        </Button>
      </div>

      <Card>
        <CommunicationItem
          initials="EX"
          bgColor="#E6F1FB"
          textColor="#185FA5"
          sender="Sarah M. (Examiner)"
          type="Outbound email"
          typeVariant="info"
          timestamp="04/20/2026 11:30 AM"
          recipient="To: jane.smith@email.com"
          content="Sent initial acknowledgment letter and missing document request for Funeral Assignment Form. Advised 10-business-day response window. TX standard letter template used."
        />

        <CommunicationItem
          initials="JS"
          bgColor="#EEEDFE"
          textColor="#534AB7"
          sender="Jane Smith (Claimant)"
          type="Inbound phone"
          typeVariant="neutral"
          timestamp="04/20/2026 02:15 PM — 8 min"
          content="Claimant called re: timeline and assignment form. Confirmed form en route from Oakwood. Stated death was result of a fall — consistent with Accidental on certificate. No additional documents provided this call."
        />

        <CommunicationItem
          initials="EX"
          bgColor="#E6F1FB"
          textColor="#185FA5"
          sender="Sarah M. (Examiner)"
          type="Outbound email"
          typeVariant="info"
          timestamp="04/19/2026 09:00 AM"
          recipient="To: Austin Regional Clinic — medical records request"
          content="Medical records request for John A. Smith. Requesting all records 03/15/2022 — 03/15/2024 per contestable review BOG 6.1. Authorization form enclosed."
          isLast
        />
      </Card>

      <Card title="Log new communication" icon={Mail} iconColor="#185FA5">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="text-[11px] text-muted-foreground">Communication type</label>
            <select className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
              <option>Outbound phone</option>
              <option>Inbound phone</option>
              <option>Outbound email</option>
              <option>Inbound email</option>
              <option>Fax</option>
              <option>Physical mail</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Contact name / party</label>
            <input
              type="text"
              className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
              placeholder="Name..."
            />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Date and time</label>
            <input type="date" className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Letter template</label>
            <select className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
              <option>None / free text</option>
              <option>Acknowledgment — standard</option>
              <option>Missing document request</option>
              <option>IL 45-day letter</option>
              <option>CA Fair Claim notice</option>
              <option>Denial — with appeal language</option>
              <option>DOI notice (CA IL NE NH NJ RI TN WA WV)</option>
              <option>Incorrect claimant — state-specific</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-[11px] text-muted-foreground">Notes</label>
          <textarea
            className="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
            placeholder="Communication notes — include all relevant details and outcomes..."
          />
        </div>
        <div className="mt-2 flex gap-2">
          <Button variant="primary" className="text-[11px]">Save log entry</Button>
        </div>
      </Card>
    </div>
  )
}

interface CommunicationItemProps {
  initials: string
  bgColor: string
  textColor: string
  sender: string
  type: string
  typeVariant: "info" | "neutral"
  timestamp: string
  recipient?: string
  content: string
  isLast?: boolean
}

function CommunicationItem({
  initials,
  bgColor,
  textColor,
  sender,
  type,
  typeVariant,
  timestamp,
  recipient,
  content,
  isLast,
}: CommunicationItemProps) {
  return (
    <div className={`flex gap-2.5 py-2.5 ${!isLast ? "border-b border-border" : ""}`}>
      <div
        className="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[10px] font-medium"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[12px] font-medium">{sender}</span>
          <Badge variant={typeVariant} className="text-[10px]">{type}</Badge>
          <span className="text-[11px] text-muted-foreground ml-auto">{timestamp}</span>
        </div>
        {recipient && <div className="text-[11px] text-muted-foreground">{recipient}</div>}
        <div className="text-[12px] text-foreground mt-1 leading-relaxed">{content}</div>
      </div>
    </div>
  )
}
