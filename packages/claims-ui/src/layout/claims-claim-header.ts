import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'

const FIELDS = [
  { label: 'Claim ID', value: 'CLM-20260420-00123' },
  { label: 'Claim type', value: 'Death Claim' },
  { label: 'Source', value: 'BAU — Portal' },
  { label: 'Status', value: 'In Review', color: '#BA7517' },
  { label: 'Verification', value: 'Verified', color: '#3B6D11' },
  { label: 'SLA remaining', value: '8 days', color: '#3B6D11' },
  { label: 'Affected person', value: 'John A. Smith' },
]

@customElement('claims-claim-header')
export class ClaimsClaimHeader extends LightDomElement {
  render() {
    return html`
      <div
        class="bg-card border-b border-border px-4 md:px-5 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-5 gap-y-2 shadow-sm"
      >
        ${FIELDS.map(
          (field) => html`
            <div class="flex flex-col gap-0.5 min-w-0">
              <span class="text-[10px] font-medium text-muted-foreground uppercase tracking-wide"
                >${field.label}</span
              >
              <span
                class="text-[13px] font-semibold"
                style=${field.color ? `color: ${field.color}` : 'color: var(--primary-dark)'}
              >
                ${field.value}
              </span>
            </div>
          `
        )}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-claim-header': ClaimsClaimHeader
  }
}
