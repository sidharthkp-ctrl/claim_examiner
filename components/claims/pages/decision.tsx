"use client"

import { useState } from "react"
import { Gavel, FileText } from "lucide-react"
import { Card, FieldRow } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"
import { cn } from "@/lib/utils"

const decisionOptions = [
  {
    id: "approve-pay",
    title: "Approve — Pay (D-24)",
    description: "All checks pass. DCI from HORD to settlement. Route to Payment Process. Within TPA authority for amounts up to $100K aggregate — this claim requires Pru referral first.",
  },
  {
    id: "approve-suicide",
    title: "Approve — Pay suicide provision (D-25)",
    description: "Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value). State-specific language applies.",
  },
  {
    id: "deny-tpa",
    title: "Deny — within TPA authority (D-26)",
    description: "Very limited scenarios. Prepare denial letter with appeal language for CA IL NE NH NJ RI TN WA WV. Most death denials require Pru referral first.",
  },
  {
    id: "deny-ti-life",
    title: "Deny — TI life expectancy (T-26)",
    description: "TI only. Life expectancy does not meet threshold (>6 months, or >12 months CA). TPA denial authority — does not require Pru approval.",
  },
  {
    id: "deny-ti-other",
    title: "Deny — other reasons, Pru required (T-27)",
    description: "TI non-life-expectancy denials — $0 TPA authority. Refer to Pru for approval before sending denial letter.",
  },
  {
    id: "refer-pru",
    title: "Refer to Prudential for decision (D-27)",
    description: "Over TPA authority, complex cases, most denials, rescission recommendations. Assemble referral package with recommendation and supporting documents.",
  },
  {
    id: "rescission",
    title: "Recommend rescission (D-28)",
    description: "Material misrepresentation found. Complete Contestable Claim Summary Form. Send to Pru for approval. Upon approval draft rescission letter, send to Pru for review, then send final to policy owner.",
  },
]

export function DecisionPage() {
  const [selectedDecision, setSelectedDecision] = useState("approve-pay")

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-[1fr_220px] gap-2.5">
        <div>
          <Card title="Examiner recommendation" icon={Gavel} iconColor="#185FA5">
            {decisionOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedDecision(option.id)}
                className={cn(
                  "border rounded-md p-3 mb-2 cursor-pointer transition-colors",
                  selectedDecision === option.id
                    ? "border-[#185FA5] border-2 bg-[#E6F1FB]"
                    : "border-border"
                )}
              >
                <div className="flex items-start gap-2">
                  <input
                    type="radio"
                    name="decision"
                    checked={selectedDecision === option.id}
                    onChange={() => setSelectedDecision(option.id)}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="text-[12px] font-medium">{option.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{option.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card title="Decision summary & notes" icon={FileText} iconColor="#534AB7">
            <FieldRow label="Net payable amount">
              <span className="text-[#1D9E75]">$492,750.00</span>
            </FieldRow>
            <FieldRow label="Payment to">Jane Smith + Oakwood Funeral</FieldRow>
            <FieldRow label="ADB check (separate)">
              <Badge variant="warning">Pending manner confirm</Badge>
            </FieldRow>
            <FieldRow label="Contestable review status">
              <Badge variant="warning">Pending Pru direction</Badge>
            </FieldRow>
            <div className="mt-2">
              <textarea
                className="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                defaultValue="Manner discrepancy resolved — certificate shows Accidental confirmed. ADB rider conditions met, no exclusion applies. Contestable investigation initiated per BOG 6.1 — hypertension materiality inconclusive, referring to Pru. Recommend Approve-Pay pending Pru contestable clearance. Two separate checks required."
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Button>Save draft</Button>
              <Button variant="primary">Submit decision</Button>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className="bg-secondary border border-border rounded-md p-3">
            <div className="text-[11px] font-medium text-muted-foreground mb-1.5">Decision checklist</div>
            <ChecklistItem label="All review items resolved" status="3 pending" statusVariant="warning" />
            <ChecklistItem label="State requirements verified" status="Done" statusVariant="success" />
            <ChecklistItem label="Benefit calculation confirmed" status="Done" statusVariant="success" />
            <ChecklistItem label="Contestable referral sent" status="Pending Pru" statusVariant="warning" />
            <ChecklistItem label="Funeral assignment validated" status="Pending" statusVariant="warning" />
            <ChecklistItem label="NRA / foreign payee cleared" status="Done" statusVariant="success" />
            <ChecklistItem label="Simultaneous death checked" status="Done" statusVariant="success" />
            <ChecklistItem label="Misstatement of age cleared" status="Done — no discrepancy" statusVariant="success" />

            <div className="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">TPA authority limits</div>
            <div className="flex justify-between py-0.5">
              <span className="text-[11px] text-muted-foreground">Death approve-pay</span>
              <span className="text-[12px] font-medium">$100K aggregate</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[11px] text-muted-foreground">TI approve-pay</span>
              <span className="text-[12px] font-medium">$50K / $101K aggregate</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[11px] text-muted-foreground">This claim</span>
              <span className="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru required</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[11px] text-muted-foreground">TI other deny</span>
              <span className="text-[12px] font-medium">$0 — always Pru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ChecklistItemProps {
  label: string
  status: string
  statusVariant: "success" | "warning"
}

function ChecklistItem({ label, status, statusVariant }: ChecklistItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-[11px]">{label}</span>
      <Badge variant={statusVariant} className="text-[10px]">{status}</Badge>
    </div>
  )
}
