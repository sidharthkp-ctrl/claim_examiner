import { Info, User, Activity, Flag, Bot, MessageCircle } from "lucide-react"
import { Card, FieldRow, StatCard } from "../card"
import { Badge } from "../badge"
import { Button, ActionBar } from "../button"

interface CaseContextPageProps {
  onNavigate: (page: string) => void
}

export function CaseContextPage({ onNavigate }: CaseContextPageProps) {
  return (
    <>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2.5 mb-2.5">
          <StatCard label="Claim age" value="0 days" />
          <StatCard label="Review progress" value="57%" color="#185FA5" />
          <StatCard label="Flags active" value="4" color="#A32D2D" />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Left Column */}
          <div>
            <Card title="Claim summary" icon={Info} iconColor="#185FA5">
              <FieldRow label="Claim ID">CLM-20260420-00123</FieldRow>
              <FieldRow label="Claim type">Death Claim</FieldRow>
              <FieldRow label="Claim source"><Badge variant="info">BAU</Badge></FieldRow>
              <FieldRow label="Entry point">Portal Submission</FieldRow>
              <FieldRow label="Assigned examiner">Sarah M.</FieldRow>
              <FieldRow label="Status"><Badge variant="warning">In Review</Badge></FieldRow>
              <FieldRow label="Verification"><Badge variant="success">Verified</Badge></FieldRow>
            </Card>

            <Card title="Insured / claimant" icon={User} iconColor="#534AB7">
              <FieldRow label="Insured">John A. Smith</FieldRow>
              <FieldRow label="Date of death">02/28/2026</FieldRow>
              <FieldRow label="Claimant">Jane Smith (Spouse)</FieldRow>
              <FieldRow label="Beneficiary type">Primary — 100%</FieldRow>
              <FieldRow label="Minor beneficiary"><Badge variant="success">No — age 42</Badge></FieldRow>
              <FieldRow label="Incorrect claimant"><Badge variant="success">No — matches record</Badge></FieldRow>
            </Card>

            <Card title="Activity timeline" icon={Activity} iconColor="#1D9E75">
              <TimelineItem
                color="#639922"
                title="Claim received and verified"
                time="04/20/2026 09:00 AM"
              />
              <TimelineItem
                color="#639922"
                title="System assessment — 28/28 rules run"
                time="04/20/2026 10:42 AM"
              />
              <TimelineItem
                color="#185FA5"
                title="Examiner review in progress"
                time="04/20/2026 11:00 AM — ongoing"
                isActive
              />
              <TimelineItem
                color="#d1d5db"
                title="Decision pending"
                isPending
              />
            </Card>
          </div>

          {/* Right Column */}
          <div>
            <Card title="Active flags" icon={Flag} iconColor="#D85A30">
              <FieldRow label="Contestable period"><Badge variant="warning">Active — 23 months</Badge></FieldRow>
              <FieldRow label="Manner discrepancy"><Badge variant="danger">Refer</Badge></FieldRow>
              <FieldRow label="ADB rider"><Badge variant="info">Review required</Badge></FieldRow>
              <FieldRow label="Funeral assignment"><Badge variant="warning">Pending docs</Badge></FieldRow>
              <FieldRow label="Foreign death"><Badge variant="success">Cleared</Badge></FieldRow>
              <FieldRow label="Minor beneficiary"><Badge variant="success">Cleared</Badge></FieldRow>
              <FieldRow label="Divorce revocation"><Badge variant="neutral">N/A</Badge></FieldRow>
              <FieldRow label="NRA / foreign payee"><Badge variant="success">No — US citizen</Badge></FieldRow>
              <FieldRow label="Simultaneous death"><Badge variant="neutral">Not triggered</Badge></FieldRow>
              <FieldRow label="Disclaimer"><Badge variant="neutral">Not triggered</Badge></FieldRow>
              <FieldRow label="Disappearance"><Badge variant="neutral">N/A</Badge></FieldRow>
            </Card>

            <Card title="AI confidence summary" icon={Bot} iconColor="#854F0B">
              <FieldRow label="Death certificate"><Badge variant="success">94%</Badge></FieldRow>
              <FieldRow label="Claim form"><Badge variant="success">98%</Badge></FieldRow>
              <FieldRow label="Authorization"><Badge variant="success">91%</Badge></FieldRow>
              <FieldRow label="Funeral assignment"><Badge variant="danger">Missing</Badge></FieldRow>
              <FieldRow label="Rule check failures"><Badge variant="warning">2 — manner, funeral</Badge></FieldRow>
            </Card>

            <Card title="Communication log summary" icon={MessageCircle} iconColor="#185FA5">
              <FieldRow label="Last contact">04/20/2026 — Phone (claimant)</FieldRow>
              <FieldRow label="Total interactions">3</FieldRow>
              <FieldRow label="Outstanding outreach"><Badge variant="warning">1 — funeral form</Badge></FieldRow>
            </Card>
          </div>
        </div>
      </div>

      <ActionBar>
        <Button>Save draft</Button>
        <Button variant="primary" className="ml-auto" onClick={() => onNavigate("event-details")}>
          Continue to Event Details
        </Button>
      </ActionBar>
    </>
  )
}

interface TimelineItemProps {
  color: string
  title: string
  time?: string
  isActive?: boolean
  isPending?: boolean
}

function TimelineItem({ color, title, time, isActive, isPending }: TimelineItemProps) {
  return (
    <div className="flex gap-2 py-1.5">
      <div
        className="w-2 h-2 min-w-[8px] rounded-full mt-1"
        style={{ backgroundColor: color }}
      />
      <div>
        <div
          className={`text-[12px] font-medium ${isActive ? "text-[#185FA5]" : isPending ? "text-muted-foreground" : "text-foreground"}`}
        >
          {title}
        </div>
        {time && <div className="text-[11px] text-muted-foreground">{time}</div>}
      </div>
    </div>
  )
}
