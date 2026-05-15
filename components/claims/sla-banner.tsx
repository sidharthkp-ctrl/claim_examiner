import { Clock, AlertTriangle } from "lucide-react"
import { Badge } from "./badge"

export function SLABanner() {
  return (
    <div className="bg-[#EAF3DE] border-b border-[#97C459] px-4 py-1.5 flex items-center gap-4 text-[11px] flex-wrap">
      <span className="text-[#27500A] font-medium flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        SLA: 8 days remaining
      </span>
      <span className="text-[#3B6D11]">
        Claim type: <strong>Death</strong>
      </span>
      <span className="text-[#3B6D11]">Submitted: 04/20/2026</span>
      <span className="text-[#3B6D11]">
        NY 5-day ack: <strong>Sent</strong>
      </span>
      <span className="text-[#3B6D11]">Fair Claim state: TX — standard</span>
      <div className="ml-auto">
        <Badge variant="warning" className="text-[10px]">
          <AlertTriangle className="w-3 h-3" />
          3 items pending
        </Badge>
      </div>
    </div>
  )
}
