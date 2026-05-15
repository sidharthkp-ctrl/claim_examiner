import { Building, Receipt, UserSearch, Calculator, Globe, MapPin, Settings, RefreshCw } from "lucide-react"
import { Card, FieldRow, InfoBox } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"

export function ToolsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        <Card title="Child support lien — CSLN (D-13)" icon={Building} iconColor="#185FA5">
          <FieldRow label="State trigger">TX (issue state)</FieldRow>
          <FieldRow label="CSLN result"><Badge variant="success">No lien found</Badge></FieldRow>
          <FieldRow label="Checked on">04/20/2026</FieldRow>
          <InfoBox variant="info" className="mt-1.5">
            CA: 24-hour rule applies. MA: separate process outside CSLN.
          </InfoBox>
          <Button className="w-full mt-2 text-[11px]">
            <RefreshCw className="w-3.5 h-3.5" />
            Recheck CSLN
          </Button>
        </Card>

        <Card title="IRS lien / federal levy (D-14)" icon={Receipt} iconColor="#854F0B">
          <FieldRow label="IRS lien flag"><Badge variant="success">No lien</Badge></FieldRow>
          <FieldRow label="Federal tax levy"><Badge variant="success">None</Badge></FieldRow>
          <FieldRow label="Checked on">04/20/2026</FieldRow>
          <Button className="w-full mt-2 text-[11px]">Run IRS check</Button>
        </Card>

        <Card title="Identity verification — Accurint (D-05)" icon={UserSearch} iconColor="#534AB7">
          <FieldRow label="Search criteria">SSN + DOB + DOD</FieldRow>
          <FieldRow label="Result"><Badge variant="success">Identity confirmed</Badge></FieldRow>
          <FieldRow label="Name variants found">John A. Smith, John Alan Smith</FieldRow>
          <FieldRow label="Resolution applied">Policy name accepted</FieldRow>
          <Button className="w-full mt-2 text-[11px]">View Accurint report</Button>
        </Card>

        <Card title="Benefit calculation (D-24)" icon={Calculator} iconColor="#1D9E75">
          <FieldRow label="Face value">$500,000.00</FieldRow>
          <FieldRow label="Funeral assignment deduction">− $8,500.00</FieldRow>
          <FieldRow label="DCI (HORD → settlement)">+ $1,250.00</FieldRow>
          <FieldRow label="IRS / CSLN deductions">$0.00</FieldRow>
          <FieldRow label="Net payable to beneficiary">
            <span className="text-[#1D9E75] text-[14px]">$492,750.00</span>
          </FieldRow>
          <FieldRow label="ADB benefit (separate check)"><Badge variant="warning">Pending manner confirm</Badge></FieldRow>
          <FieldRow label="DCI rate applied">Higher of company rate or state rate</FieldRow>
        </Card>

        <Card title="SSDI death verification (D-29)" icon={Globe} iconColor="#185FA5">
          <FieldRow label="SSDI result"><Badge variant="success">Death confirmed</Badge></FieldRow>
          <FieldRow label="SSN match"><Badge variant="success">Confirmed</Badge></FieldRow>
          <FieldRow label="DOD in SSDI">02/28/2026</FieldRow>
          <FieldRow label="Obituary / funeral home check"><Badge variant="success">Confirmed</Badge></FieldRow>
        </Card>

        <Card title="State requirements check (D-23)" icon={MapPin} iconColor="#D85A30">
          <FieldRow label="Issue state">TX</FieldRow>
          <FieldRow label="IL 45-day letter"><Badge variant="neutral">N/A — not IL</Badge></FieldRow>
          <FieldRow label="CA Fair Claim"><Badge variant="neutral">N/A — not CA</Badge></FieldRow>
          <FieldRow label="DOI notice states trigger"><Badge variant="success">Not triggered</Badge></FieldRow>
          <FieldRow label="NY 5-day acknowledgment"><Badge variant="neutral">N/A — not NY</Badge></FieldRow>
          <FieldRow label="TX standard rules apply"><Badge variant="success">Confirmed</Badge></FieldRow>
        </Card>

        <Card title="ADB investigation (D-21)" icon={Settings} iconColor="#534AB7">
          <FieldRow label="ADB rider present"><Badge variant="success">Yes</Badge></FieldRow>
          <FieldRow label="Certificate manner">Accidental — confirmed</FieldRow>
          <FieldRow label="ADB rider conditions met"><Badge variant="success">Yes — covered accident</Badge></FieldRow>
          <FieldRow label="ADB exclusions"><Badge variant="success">None apply</Badge></FieldRow>
          <FieldRow label="Contractual death benefit">Check 1 — pay first</FieldRow>
          <FieldRow label="ADB benefit">Check 2 — separate payment</FieldRow>
          <InfoBox variant="info" className="mt-1.5">
            Two separate payment checks required. Contractual death benefit issued first; ADB issued separately.
          </InfoBox>
        </Card>

        <Card title="Quote recalculation — TI only (T-22)" icon={RefreshCw} iconColor="#1D9E75">
          <FieldRow label="Claim type"><Badge variant="neutral">Death claim — N/A</Badge></FieldRow>
          <InfoBox variant="info" className="mt-1.5">
            For TI claims only: if original quote is over 30 days old at claim form receipt, trigger recalculation. If reduced, obtain new signed Claimant Statement before payment.
          </InfoBox>
        </Card>
      </div>
    </div>
  )
}
