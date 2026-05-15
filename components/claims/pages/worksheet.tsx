"use client"

import { useState } from "react"
import { Sparkles, RefreshCw, Check } from "lucide-react"
import { Card, FieldRow, AIBox } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"
import { cn } from "@/lib/utils"

export function WorksheetPage() {
  const [activeTab, setActiveTab] = useState<"system" | "examiner">("system")

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Tab Bar */}
      <div className="bg-card border-b border-border px-4 flex gap-0">
        <button
          onClick={() => setActiveTab("system")}
          className={cn(
            "px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent",
            activeTab === "system"
              ? "text-[#185FA5] border-b-[#185FA5] font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          System Assessment
        </button>
        <button
          onClick={() => setActiveTab("examiner")}
          className={cn(
            "px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent",
            activeTab === "examiner"
              ? "text-[#185FA5] border-b-[#185FA5] font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Examiner Review
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === "system" ? <SystemAssessmentTab /> : <ExaminerReviewTab />}
      </div>
    </div>
  )
}

function SystemAssessmentTab() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        <Card title="Rule engine results — 28 rules evaluated" className="col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-[10px] font-medium text-muted-foreground p-2 text-left">Rule</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2 text-left">Outcome</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Contestability</td>
                <td className="p-2"><Badge variant="warning">Flag</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Within 2-yr period</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Manner validation</td>
                <td className="p-2"><Badge variant="danger">Refer</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">{"Declared ≠ certificate"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Foreign death</td>
                <td className="p-2"><Badge variant="success">Approve</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Death in US</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Minor beneficiary</td>
                <td className="p-2"><Badge variant="success">Approve</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Bene age 42</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Name discrepancy</td>
                <td className="p-2"><Badge variant="success">Resolved</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Matched via SSN+DOB</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">Fast track</td>
                <td className="p-2"><Badge variant="neutral">N/A</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Disabled at MVP</td>
              </tr>
              <tr>
                <td className="p-2 text-[12px]">Overall assessment</td>
                <td className="p-2"><Badge variant="danger">Refer</Badge></td>
                <td className="p-2 text-[11px] text-muted-foreground">Manner requires review</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      <AIBox title={
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          AI assessment summary
          <Button className="ml-auto text-[11px] py-0.5 px-2">
            <RefreshCw className="w-3.5 h-3.5" />
            Refresh
          </Button>
        </span>
      }>
        Claim for John A. Smith submitted 04/20/2026 by beneficiary Jane Smith (spouse). Policy TL12345 (20-yr term, $500K face) is in-force on DOD 02/28/2026 within contestable period. Documents: Death Certificate ✓ Claim Form ✓ Authorization ✓ Funeral Assignment ✗. Manner of death flagged — claimant declared Natural, certificate shows Accidental. ADB rider present — accidental manner requires additional handling and two separate payment checks. Recommend examiner review for manner validation and funeral assignment follow-up before proceeding to decision.
      </AIBox>
    </>
  )
}

function ExaminerReviewTab() {
  return (
    <div className="grid grid-cols-[1fr_220px] gap-2.5">
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[13px] font-medium">Examiner review items</span>
          <Badge variant="info" className="text-[10px]">4 of 7 resolved — 57%</Badge>
        </div>
        <p className="text-[11px] text-muted-foreground mb-2.5">
          Each item requires an action before the case can proceed to Decision.
        </p>

        {/* Pending Item - Manner */}
        <ReviewItem
          status="warning"
          statusLabel="Pending"
          title="Manner of death validation (D-08)"
          subtitle="Claimant declared Natural — certificate states Accidental"
        >
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div>
              <div className="text-[10px] text-muted-foreground mb-0.5">DECLARED BY CLAIMANT</div>
              <div className="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">Natural</div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground mb-0.5">ON DEATH CERTIFICATE</div>
              <div className="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">Accidental</div>
            </div>
          </div>
          <div className="flex gap-1.5 items-start">
            <select className="flex-1 border border-border rounded-md p-1.5 text-[11px]">
              <option>Select resolution...</option>
              <option>Accept certificate — Accidental</option>
              <option>Request additional documentation</option>
              <option>Refer to supervisor</option>
            </select>
            <textarea className="flex-[2] min-h-[36px] border border-border rounded-md p-1.5 text-[11px]" placeholder="Resolution notes..." />
            <Button variant="primary" className="text-[11px]">Resolve</Button>
          </div>
        </ReviewItem>

        {/* Pending Item - Funeral */}
        <ReviewItem
          status="warning"
          statusLabel="Pending"
          title="Funeral home assignment (D-12)"
          subtitle="Validate form, verify TIN, approve payment split"
        >
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div>
              <div className="text-[11px] text-muted-foreground">Assignee</div>
              <div className="text-[12px] font-medium">Oakwood Funeral Services</div>
            </div>
            <div>
              <div className="text-[11px] text-muted-foreground">Assignment amount</div>
              <div className="text-[12px] font-medium">$8,500.00</div>
            </div>
          </div>
          <div className="bg-[#EAF3DE] rounded-md px-2.5 py-1.5 text-[12px] text-[#27500A] font-medium mb-2">
            Payment split: FH $8,500.00 · Bene $491,500.00
          </div>
          <div className="flex gap-2.5 items-center">
            <label className="text-[11px] flex items-center gap-1">
              <input type="checkbox" /> Verify TIN
            </label>
            <label className="text-[11px] flex items-center gap-1">
              <input type="checkbox" /> Confirm signatures
            </label>
            <Button variant="success" className="ml-auto text-[11px]">Approve split</Button>
          </div>
        </ReviewItem>

        {/* Blocked Item */}
        <ReviewItem
          status="danger"
          statusLabel="Blocked"
          title="Document completeness"
          subtitle="Missing: Funeral Assignment Form"
          subtitleColor="#A32D2D"
          rightAction={<Button variant="danger" className="text-[11px]">Escalate</Button>}
          collapsed
        />

        {/* Resolved Items */}
        <ReviewItem
          status="success"
          statusLabel={<><Check className="w-3 h-3" /> Resolved</>}
          title="Name discrepancy resolution (D-05)"
          titleMuted
          rightAction={<span className="text-[11px] text-[#185FA5] cursor-pointer">View details</span>}
          collapsed
        />

        <ReviewItem
          status="success"
          statusLabel={<><Check className="w-3 h-3" /> Resolved</>}
          title="ADB rider accidental verification (D-21)"
          titleMuted
          rightAction={<span className="text-[11px] text-[#185FA5] cursor-pointer">View details</span>}
          collapsed
        />

        {/* NRA Check */}
        <ReviewItem
          status="danger"
          statusLabel="Pending"
          title="NRA / foreign payee check (D-15)"
          subtitle="Beneficiary citizenship — W-8BEN required if NRA"
        >
          <FieldRow label="Beneficiary citizenship"><Badge variant="success">US Citizen confirmed</Badge></FieldRow>
          <FieldRow label="W-8BEN required"><Badge variant="success">No</Badge></FieldRow>
          <FieldRow label="Withholding applicable"><Badge variant="success">None</Badge></FieldRow>
          <Button variant="success" className="mt-2 text-[11px]">Mark resolved</Button>
        </ReviewItem>

        {/* Simultaneous death */}
        <ReviewItem
          status="purple"
          statusLabel="Info"
          title="Simultaneous death check (D-17)"
          subtitle="Confirm insured and beneficiary did not die in same event"
        >
          <FieldRow label="Beneficiary alive"><Badge variant="success">Yes — confirmed</Badge></FieldRow>
          <FieldRow label="Simultaneous death triggered"><Badge variant="success">No</Badge></FieldRow>
        </ReviewItem>
      </div>

      {/* Right Sidebar */}
      <div>
        <div className="bg-secondary border border-border rounded-md p-3">
          <div className="text-[11px] font-medium text-muted-foreground mb-1.5">Related BOG sections</div>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.3 — Name discrepancies</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.2 — Misstatement of age</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Cause of death requirements</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 6.1 — Contestable investigation</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.5 — Foreign payee NRA</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.10 — Simultaneous death</a>

          <div className="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Open clarifications</div>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#34 Un-suspend communication</a>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#27 TI follow-up deviation</a>

          <div className="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Case notes (3)</div>
          <div className="text-[11px] text-muted-foreground leading-relaxed">
            04/20 — Claimant called re: funeral assignment timing. Stated death was from a fall.
          </div>
          <a className="block text-[11px] text-[#185FA5] cursor-pointer mt-1">+ Add note</a>

          <div className="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Authority limits</div>
          <div className="flex justify-between py-0.5">
            <span className="text-[11px] text-muted-foreground">Death TPA limit</span>
            <span className="text-[12px] font-medium">$100K</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span className="text-[11px] text-muted-foreground">This claim</span>
            <span className="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru needed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ReviewItemProps {
  status: "success" | "warning" | "danger" | "purple"
  statusLabel: React.ReactNode
  title: string
  titleMuted?: boolean
  subtitle?: string
  subtitleColor?: string
  children?: React.ReactNode
  rightAction?: React.ReactNode
  collapsed?: boolean
}

const statusBorderColors = {
  success: "#97C459",
  warning: "#EF9F27",
  danger: "#E24B4A",
  purple: "#AFA9EC",
}

function ReviewItem({ status, statusLabel, title, titleMuted, subtitle, subtitleColor, children, rightAction, collapsed }: ReviewItemProps) {
  return (
    <div className="border border-border rounded-md mb-2 overflow-hidden">
      <div
        className="px-3 py-2 bg-card flex items-start gap-2"
        style={{ borderLeft: `3px solid ${statusBorderColors[status]}` }}
      >
        <Badge variant={status} className="text-[10px]">{statusLabel}</Badge>
        <div className="flex-1 min-w-0">
          <div className={cn("text-[12px] font-medium", titleMuted && "text-muted-foreground")}>{title}</div>
          {subtitle && (
            <div className="text-[11px] text-muted-foreground" style={{ color: subtitleColor }}>
              {subtitle}
            </div>
          )}
        </div>
        {rightAction}
      </div>
      {!collapsed && children && (
        <div className="px-3 py-2.5 bg-secondary border-t border-border">
          {children}
        </div>
      )}
    </div>
  )
}
