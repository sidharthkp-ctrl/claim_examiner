import { FileText, Calendar, AlertTriangle, Gavel, Globe } from "lucide-react"
import { Card, FieldRow, InfoBox } from "../card"
import { Badge } from "../badge"

export function EventDetailsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Left Column */}
        <div>
          <Card title="Death event" icon={FileText} iconColor="#185FA5">
            <FieldRow label="Date of death">02/28/2026</FieldRow>
            <FieldRow label="Place of death">Austin, TX — Domestic</FieldRow>
            <FieldRow label="Foreign death flag"><Badge variant="success">No</Badge></FieldRow>
            <FieldRow label="Declared manner (claimant)"><Badge variant="warning">Natural</Badge></FieldRow>
            <FieldRow label="Certificate manner"><Badge variant="danger">Accidental</Badge></FieldRow>
            <FieldRow label="Cause stated on certificate">Blunt force trauma</FieldRow>
            <FieldRow label="Certifying physician">Dr. Robert Lee, MD</FieldRow>
            <FieldRow label="Certificate #">TX-2026-03921</FieldRow>
            <FieldRow label="AI extraction confidence"><Badge variant="success">94%</Badge></FieldRow>
          </Card>

          <Card title="Key dates & contestability" icon={Calendar} iconColor="#854F0B">
            <FieldRow label="Policy issue date">03/15/2024</FieldRow>
            <FieldRow label="Date of death">02/28/2026</FieldRow>
            <FieldRow label="Months since issue">23 months</FieldRow>
            <FieldRow label="Within contestable period"><Badge variant="warning">Yes — 2-yr window</Badge></FieldRow>
            <FieldRow label="HORD (date claim received)">04/20/2026</FieldRow>
            <FieldRow label="Claim submitted on">04/20/2026</FieldRow>
          </Card>
        </div>

        {/* Right Column */}
        <div>
          <Card title="Manner discrepancy (D-08)" icon={AlertTriangle} iconColor="#D85A30">
            <InfoBox variant="danger" className="mb-2">
              <div className="font-medium text-[#A32D2D]">Mismatch — examiner action required</div>
              <div className="mt-1 text-[#791F1F]">
                Claimant declared Natural; death certificate states Accidental. Must be reconciled before decision. ADB rider on policy requires separate accidental death verification.
              </div>
            </InfoBox>
            <FieldRow label="ADB rider present"><Badge variant="info">Yes — two-check process</Badge></FieldRow>
            <FieldRow label="Resolution status"><Badge variant="warning">Pending examiner action</Badge></FieldRow>
            <div className="mt-2">
              <label className="text-[11px] text-muted-foreground">Examiner resolution notes</label>
              <textarea
                className="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
                placeholder="Document how manner discrepancy was resolved..."
              />
            </div>
          </Card>

          <Card title="Special manner handling" icon={Gavel} iconColor="#534AB7">
            <FieldRow label="Homicide review (D-08)"><Badge variant="neutral">N/A — not homicide</Badge></FieldRow>
            <FieldRow label="Suicide review (D-08)"><Badge variant="neutral">N/A</Badge></FieldRow>
            <FieldRow label="Suicide exclusion period"><Badge variant="neutral">Not applicable</Badge></FieldRow>
            <FieldRow label="Undetermined — investigation"><Badge variant="neutral">N/A</Badge></FieldRow>
            <InfoBox variant="info" className="mt-2">
              If manner were suicide: verify contestable period (1-yr in some states, 2-yr in others). Payment = return of premiums paid to DOD, not face value.
            </InfoBox>
          </Card>

          <Card title="Foreign death (D-11)" icon={Globe} iconColor="#1D9E75">
            <FieldRow label="Death location">Austin, TX — USA</FieldRow>
            <FieldRow label="Foreign death triggered"><Badge variant="success">No</Badge></FieldRow>
            <InfoBox variant="info" className="mt-1.5">
              If foreign: gather domestic info first, refer to Pru. Vendor estimate ≤$1,000 can proceed without Pru approval.
            </InfoBox>
          </Card>
        </div>
      </div>
    </div>
  )
}
