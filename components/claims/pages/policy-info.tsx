import { DollarSign, Shield, Clock, Users, Building } from "lucide-react"
import { Card, FieldRow, InfoBox } from "../card"
import { Badge } from "../badge"

export function PolicyInfoPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Left Column */}
        <div>
          <Card title="Policy details" icon={DollarSign} iconColor="#185FA5">
            <FieldRow label="Policy number">TL12345</FieldRow>
            <FieldRow label="Product">20-year term life</FieldRow>
            <FieldRow label="Face value"><span className="text-[#1D9E75]">$500,000.00</span></FieldRow>
            <FieldRow label="Issue date">03/15/2024</FieldRow>
            <FieldRow label="Issue state">TX</FieldRow>
            <FieldRow label="Insured residence state">TX</FieldRow>
            <FieldRow label="Policy status"><Badge variant="success">In force</Badge></FieldRow>
            <FieldRow label="Grace period default"><Badge variant="success">No</Badge></FieldRow>
            <FieldRow label="Lapsed / reinstated"><Badge variant="success">No</Badge></FieldRow>
            <FieldRow label="Annual premium">$1,240.00</FieldRow>
            <FieldRow label="Last premium paid">02/01/2026</FieldRow>
          </Card>

          <Card title="Riders & benefits" icon={Shield} iconColor="#D85A30">
            <FieldRow label="ADB rider"><Badge variant="info">Present — under review</Badge></FieldRow>
            <FieldRow label="Terminal illness rider"><Badge variant="neutral">Not present</Badge></FieldRow>
            <FieldRow label="Waiver of premium"><Badge variant="neutral">Not present</Badge></FieldRow>
            <FieldRow label="Prior TI claim paid"><Badge variant="success">None</Badge></FieldRow>
            <FieldRow label="Prior death claim"><Badge variant="success">None</Badge></FieldRow>
          </Card>
        </div>

        {/* Right Column */}
        <div>
          <Card title="Misstatement of age (D-06)" icon={Clock} iconColor="#854F0B">
            <FieldRow label="DOB on policy">09/04/1978</FieldRow>
            <FieldRow label="DOB on death certificate">09/04/1978</FieldRow>
            <FieldRow label="Discrepancy"><Badge variant="success">None — DOBs match</Badge></FieldRow>
            <InfoBox variant="info" className="mt-2">
              <div className="font-medium text-[#0C447C] mb-1">Waiver thresholds (if insured is older)</div>
              <div className="text-[#185FA5] leading-relaxed">
                1 yr diff → waive up to $16,000 benefit&nbsp;&nbsp;2 yr → $8,000&nbsp;&nbsp;3 yr → $6,000&nbsp;&nbsp;4 yr → $4,000&nbsp;&nbsp;5 yr → $3,000
              </div>
              <div className="text-[#185FA5] mt-1">
                Beyond threshold: refer to Actuary for recalculation. Send Increased/Decreased benefit letter.
              </div>
            </InfoBox>
            <FieldRow label="Actuary referral needed"><Badge variant="neutral">No</Badge></FieldRow>
          </Card>

          <Card title="Beneficiary & special designations" icon={Users} iconColor="#534AB7">
            <FieldRow label="Primary beneficiary">Jane Smith — 100%</FieldRow>
            <FieldRow label="Contingent beneficiary">Michael Smith (son)</FieldRow>
            <FieldRow label="Irrevocable beneficiary"><Badge variant="neutral">No</Badge></FieldRow>
            <FieldRow label="Ex-spouse beneficiary"><Badge variant="neutral">No</Badge></FieldRow>
            <FieldRow label="Divorce revocation check (D-09)"><Badge variant="neutral">N/A</Badge></FieldRow>
            <FieldRow label="Minor beneficiary (D-10)"><Badge variant="success">No — age 42</Badge></FieldRow>
            <FieldRow label="FL/OK non-divorce statement"><Badge variant="neutral">N/A — TX policy</Badge></FieldRow>
            <FieldRow label="Incompetent/incapacitated bene"><Badge variant="neutral">No</Badge></FieldRow>
          </Card>

          <Card title="Funeral home assignment (D-12)" icon={Building} iconColor="#1D9E75">
            <FieldRow label="Assignee">Oakwood Funeral Services</FieldRow>
            <FieldRow label="Assignment amount">$8,500.00</FieldRow>
            <FieldRow label="W-9 / TIN verified"><Badge variant="warning">Pending</Badge></FieldRow>
            <FieldRow label="Signatures confirmed"><Badge variant="warning">Pending</Badge></FieldRow>
            <FieldRow label="Payment split">FH $8,500 · Bene $491,500</FieldRow>
          </Card>
        </div>
      </div>
    </div>
  )
}
