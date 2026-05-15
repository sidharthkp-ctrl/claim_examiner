import { Files, Bot, Upload, FileText, FileWarning } from "lucide-react"
import { Card, MiniField } from "../card"
import { Badge } from "../badge"
import { Button } from "../button"

export function DocumentsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[13px] font-medium text-foreground">Claim documents</span>
        <Button className="text-[11px]">
          <Upload className="w-3.5 h-3.5" />
          Upload document
        </Button>
      </div>

      <Card title="Uploaded documents" icon={Files} iconColor="#185FA5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-[10px] font-medium text-muted-foreground p-2">Document</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Source</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Uploaded</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Channel</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">AI conf.</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Extraction</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Status</th>
                <th className="text-[10px] font-medium text-muted-foreground p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">
                  <span className="font-medium flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#185FA5]" />
                    Death certificate
                  </span>
                </td>
                <td className="p-2 text-[12px]">Portal</td>
                <td className="p-2 text-[12px]">04/20/2026</td>
                <td className="p-2 text-[12px]">Online</td>
                <td className="p-2"><Badge variant="success">94%</Badge></td>
                <td className="p-2"><Badge variant="success">Reviewed</Badge></td>
                <td className="p-2"><Badge variant="success">Verified</Badge></td>
                <td className="p-2"><Button className="text-[10px] py-0.5 px-1.5">View</Button></td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">
                  <span className="font-medium flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#1D9E75]" />
                    Claim form
                  </span>
                </td>
                <td className="p-2 text-[12px]">Portal</td>
                <td className="p-2 text-[12px]">04/20/2026</td>
                <td className="p-2 text-[12px]">Online</td>
                <td className="p-2"><Badge variant="success">98%</Badge></td>
                <td className="p-2"><Badge variant="success">Reviewed</Badge></td>
                <td className="p-2"><Badge variant="success">Verified</Badge></td>
                <td className="p-2"><Button className="text-[10px] py-0.5 px-1.5">View</Button></td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-[12px]">
                  <span className="font-medium flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#1D9E75]" />
                    Authorization to release
                  </span>
                </td>
                <td className="p-2 text-[12px]">Portal</td>
                <td className="p-2 text-[12px]">04/20/2026</td>
                <td className="p-2 text-[12px]">Online</td>
                <td className="p-2"><Badge variant="success">91%</Badge></td>
                <td className="p-2"><Badge variant="success">Reviewed</Badge></td>
                <td className="p-2"><Badge variant="success">Verified</Badge></td>
                <td className="p-2"><Button className="text-[10px] py-0.5 px-1.5">View</Button></td>
              </tr>
              <tr>
                <td className="p-2 text-[12px]">
                  <span className="font-medium flex items-center gap-1">
                    <FileWarning className="w-4 h-4 text-[#E24B4A]" />
                    Funeral assignment form
                  </span>
                </td>
                <td className="p-2 text-[12px]">—</td>
                <td className="p-2 text-[12px]">—</td>
                <td className="p-2 text-[12px]">—</td>
                <td className="p-2"><Badge variant="neutral">—</Badge></td>
                <td className="p-2"><Badge variant="neutral">—</Badge></td>
                <td className="p-2"><Badge variant="danger">Missing</Badge></td>
                <td className="p-2"><Button variant="danger" className="text-[10px] py-0.5 px-1.5">Request</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="AI extraction — death certificate" icon={Bot} iconColor="#534AB7">
        <div className="grid grid-cols-3 gap-2">
          <MiniField
            label="Insured name"
            value={<>John Alan Smith <Badge variant="success" className="text-[10px]">Match</Badge></>}
          />
          <MiniField
            label="Date of death"
            value={<>02/28/2026 <Badge variant="success" className="text-[10px]">Match</Badge></>}
          />
          <MiniField
            label="Manner of death"
            value={<span className="text-[#A32D2D]">Accidental <Badge variant="danger" className="text-[10px]">Mismatch</Badge></span>}
          />
          <MiniField label="Cause of death" value="Blunt force trauma" />
          <MiniField label="State of death" value="Texas (TX)" />
          <MiniField label="Certificate issuer" value="Travis County, TX" />
        </div>
      </Card>

      <Card title="Out-of-channel document upload (D-02)" icon={Upload} iconColor="#854F0B">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="text-[11px] text-muted-foreground">Document type</label>
            <select className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
              <option>Death certificate</option>
              <option>Claim form</option>
              <option>Funeral assignment form</option>
              <option>Medical records</option>
              <option>Legal document</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Received via</label>
            <select className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
              <option>Email</option>
              <option>Fax</option>
              <option>Physical mail</option>
              <option>In-person</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Receipt date</label>
            <input type="date" className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground">Source / sender</label>
            <input
              type="text"
              className="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
              placeholder="e.g. Oakwood Funeral Services"
            />
          </div>
        </div>
        <Button variant="primary" className="text-[11px]">Upload &amp; stamp document</Button>
      </Card>
    </div>
  )
}
