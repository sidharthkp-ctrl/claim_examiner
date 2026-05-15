import { Send, FileText, Clock } from "lucide-react"
import { Card, FieldRow, InfoBox } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"

export function ReferralPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <Card title="Prudential referral status" icon={Send} iconColor="#185FA5">
            <FieldRow label="Referral required">
              <Badge variant="warning">Yes — over TPA limit</Badge>
            </FieldRow>
            <FieldRow label="TPA death limit">$100,000</FieldRow>
            <FieldRow label="Claim amount">
              <span className="text-[#A32D2D]">$492,750.00</span>
            </FieldRow>
            <FieldRow label="Referral status">
              <Badge variant="info">Not yet submitted</Badge>
            </FieldRow>
            <FieldRow label="Contestable referral">
              <Badge variant="warning">Required — 23 months</Badge>
            </FieldRow>
            
            <InfoBox variant="info" className="mt-2">
              Claims exceeding TPA authority limits must be referred to Prudential for approval before payment can be issued.
            </InfoBox>
          </Card>

          <Card title="Referral package checklist" icon={FileText} iconColor="#534AB7">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" defaultChecked className="rounded" />
                Claim summary completed
              </label>
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" defaultChecked className="rounded" />
                All documents uploaded
              </label>
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" className="rounded" />
                Contestable investigation complete
              </label>
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" defaultChecked className="rounded" />
                Manner discrepancy resolved
              </label>
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" className="rounded" />
                Funeral assignment validated
              </label>
              <label className="flex items-center gap-2 text-[12px]">
                <input type="checkbox" defaultChecked className="rounded" />
                Benefit calculation confirmed
              </label>
            </div>
            
            <div className="mt-3 flex gap-2">
              <Button variant="primary" className="text-[11px]">Submit referral to Prudential</Button>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Referral history" icon={Clock} iconColor="#854F0B">
            <div className="text-[12px] text-muted-foreground text-center py-4">
              No previous referrals for this claim.
            </div>
          </Card>

          <Card title="Examiner recommendation" icon={FileText} iconColor="#1D9E75">
            <div className="mb-2">
              <label className="text-[11px] text-muted-foreground">Recommendation</label>
              <select className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Approve — Pay full benefit</option>
                <option>Approve — Pay with adjustments</option>
                <option>Deny — Material misrepresentation</option>
                <option>Deny — Policy exclusion</option>
                <option>Recommend rescission</option>
              </select>
            </div>
            
            <div className="mb-2">
              <label className="text-[11px] text-muted-foreground">Recommendation notes</label>
              <textarea
                className="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                placeholder="Provide detailed rationale for recommendation..."
                defaultValue="Recommend approval pending contestable investigation completion. Manner discrepancy resolved — certificate shows Accidental, ADB rider conditions met. Awaiting medical records to complete contestable review per BOG 6.1."
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
