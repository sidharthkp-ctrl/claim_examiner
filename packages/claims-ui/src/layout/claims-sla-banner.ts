import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import '../components/claims-badge.js'

@customElement('claims-sla-banner')
export class ClaimsSlaBanner extends LightDomElement {
  render() {
    return html`
      <div
        class="bg-gradient-to-r from-[#EAF3DE] to-[#f4faf0] border-b border-[#97C459]/60 px-5 py-2 flex items-center gap-4 text-[11px] flex-wrap"
      >
        <span class="text-[#27500A] font-medium flex items-center gap-1">
          ${Icons.clock()}
          SLA: 8 days remaining
        </span>
        <span class="text-[#3B6D11]">Claim type: <strong>Death</strong></span>
        <span class="text-[#3B6D11]">Submitted: 04/20/2026</span>
        <span class="text-[#3B6D11]">NY 5-day ack: <strong>Sent</strong></span>
        <span class="text-[#3B6D11]">Fair Claim state: TX — standard</span>
        <div class="ml-auto">
          <claims-badge variant="warning" className="text-[10px]">
            ${Icons.alertTriangle()}
            3 items pending
          </claims-badge>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-sla-banner': ClaimsSlaBanner
  }
}
