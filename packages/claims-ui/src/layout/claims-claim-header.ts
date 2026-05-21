import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'

@customElement('claims-claim-header')
export class ClaimsClaimHeader extends LightDomElement {
  @property({ type: String }) claimId = ''
  @property({ type: String }) claimType = ''
  @property({ type: String }) claimStatus = ''
  @property({ type: String }) policyId = ''
  @property({ type: String }) policyLabel = ''

  render() {
    const fields = [
      { label: 'Claim ID', value: this.claimId || '—' },
      { label: 'Claim type', value: this.claimType || '—' },
      { label: 'Policy', value: this.policyId ? `${this.policyId}` : '—' },
      { label: 'Coverage', value: this.policyLabel || '—' },
      { label: 'Status', value: this.claimStatus || '—', color: '#BA7517' },
      { label: 'Source', value: 'BAU — Portal' },
      { label: 'Verification', value: 'Verified', color: '#3B6D11' },
    ]

    return html`
      <div
        class="bg-card border-b border-border px-4 md:px-5 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-5 gap-y-2 shadow-sm"
      >
        ${fields.map(
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
