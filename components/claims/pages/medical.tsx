import { Stethoscope, FileText, AlertTriangle } from "lucide-react"
import { Card, FieldRow, InfoBox } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"

export function MedicalReviewPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <Card title="Medical records request (D-18)" icon={Stethoscope} iconColor="#185FA5">
            <FieldRow label="Contestable period">
              <Badge variant="warning">Active — 23 months</Badge>
            </FieldRow>
            <FieldRow label="Records requested">Austin Regional Clinic</FieldRow>
            <FieldRow label="Date range requested">03/15/2022 — 03/15/2024</FieldRow>
            <FieldRow label="Request sent">04/19/2026</FieldRow>
            <FieldRow label="Status">
              <Badge variant="warning">Pending response</Badge>
            </FieldRow>
            <InfoBox variant="info" className="mt-2">
              Per BOG 6.1: For contestable claims, request medical records for 2 years prior to policy issue date to check for material misrepresentation.
            </InfoBox>
          </Card>

          <Card title="Medical history summary" icon={FileText} iconColor="#534AB7">
            <FieldRow label="Pre-existing conditions">
              <Badge variant="warning">Under review</Badge>
            </FieldRow>
            <FieldRow label="Application disclosures">Hypertension disclosed</FieldRow>
            <FieldRow label="Undisclosed conditions">
              <Badge variant="warning">Pending records</Badge>
            </FieldRow>
            <FieldRow label="Materiality assessment">
              <Badge variant="warning">Pending</Badge>
            </FieldRow>
          </Card>
        </div>

        <div>
          <Card title="Contestable investigation (D-19)" icon={AlertTriangle} iconColor="#D85A30">
            <FieldRow label="Investigation status">
              <Badge variant="info">In progress</Badge>
            </FieldRow>
            <FieldRow label="Assigned investigator">Medical Review Team</FieldRow>
            <FieldRow label="Target completion">05/04/2026</FieldRow>
            
            <div className="mt-3">
              <div className="text-[11px] text-muted-foreground mb-1">Investigation notes</div>
              <textarea
                className="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                placeholder="Document investigation findings..."
                defaultValue="Hypertension disclosed on application. Awaiting medical records to verify no additional undisclosed conditions. Will assess materiality once records received."
              />
            </div>
            
            <div className="mt-2 flex gap-2">
              <Button className="text-[11px]">Save notes</Button>
              <Button variant="primary" className="text-[11px]">Request additional records</Button>
            </div>
          </Card>

          <Card title="MRX results" icon={Stethoscope} iconColor="#1D9E75">
            <FieldRow label="MRX check run">04/20/2026</FieldRow>
            <FieldRow label="Prescription history">No red flags</FieldRow>
            <FieldRow label="Hospital admissions">None found in period</FieldRow>
            <FieldRow label="Specialist visits">
              <Badge variant="warning">1 cardiology visit — reviewing</Badge>
            </FieldRow>
          </Card>
        </div>
      </div>
    </div>
  )
}
