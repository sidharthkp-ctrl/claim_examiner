import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'

@customElement('claims-scope-banner')
export class ClaimsScopeBanner extends LightDomElement {
  @property({ type: String }) scope: 'case' | 'claim' = 'case'
  @property({ type: String }) title = ''
  @property({ type: String }) description = ''
  @property({ type: String }) entityId = ''

  render() {
    const isCase = this.scope === 'case'
    return html`
      <div
        class=${cn(
          'rounded-md border px-3 py-2 mb-4 flex flex-wrap items-center justify-between gap-2',
          isCase ? 'bg-[#f4f7fb] border-[#d8e2ec]' : 'bg-[#ebf4ff] border-[#b8d4ef]'
        )}
      >
        <div>
          <div class="text-[12px] font-semibold text-[#0C447C]">${this.title}</div>
          <div class="text-[11px] text-muted-foreground">${this.description}</div>
        </div>
        <span
          class=${cn(
            'text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded',
            isCase ? 'bg-white text-[#4a5568]' : 'bg-white text-[#1a365d]'
          )}
          >${isCase ? 'Case' : 'Claim'} · ${this.entityId}</span
        >
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-scope-banner': ClaimsScopeBanner
  }
}
