import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'

@customElement('claims-case-header')
export class ClaimsCaseHeader extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String }) insuredName = ''
  @property({ type: String }) dateOfDeath = ''
  @property({ type: Number }) claimCount = 0

  render() {
    const fields = [
      { label: 'Case ID', value: this.caseId || '—' },
      { label: 'Insured', value: this.insuredName || '—' },
      { label: 'Date of death', value: this.dateOfDeath || '—' },
      { label: 'Claims in case', value: String(this.claimCount), color: '#185FA5' },
      { label: 'Case status', value: 'Open — multi-claim', color: '#BA7517' },
      { label: 'Assigned examiner', value: 'Sarah M.' },
      { label: 'SLA (case)', value: '8 days', color: '#3B6D11' },
    ]

    return html`
      <div
        class="bg-[#f4f7fb] border-b border-border px-4 md:px-5 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-5 gap-y-2"
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
    'claims-case-header': ClaimsCaseHeader
  }
}
