import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { MaterialIcons } from '../lib/material-icons.js'
import { NAV_ITEMS, NAV_SECTIONS } from '../lib/nav.js'
import '../components/claims-icon.js'

@customElement('claims-sidebar')
export class ClaimsSidebar extends LightDomElement {
  @property({ type: String }) activePage = 'case-context'

  @state() private expandedSections: Record<string, boolean> = Object.fromEntries(
    NAV_SECTIONS.map((s) => [s, true])
  )

  private get groupedItems() {
    const acc: Record<string, (typeof NAV_ITEMS)[number][]> = {}
    for (const item of NAV_ITEMS) {
      if (!acc[item.section]) acc[item.section] = []
      acc[item.section].push(item)
    }
    return acc
  }

  private handleNav(id: string) {
    this.dispatchEvent(
      new CustomEvent('page-change', {
        detail: { page: id },
        bubbles: true,
        composed: true,
      })
    )
  }

  private toggleSection(section: string) {
    this.expandedSections = {
      ...this.expandedSections,
      [section]: !this.expandedSections[section],
    }
  }

  private chevron(expanded: boolean) {
    return html`
      <svg
        class=${cn('w-3 h-3 shrink-0 text-[#a0aec0] transition-transform', expanded && 'rotate-180')}
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }

  render() {
    const grouped = this.groupedItems
    return html`
      <aside
        class="w-[200px] min-w-[200px] max-w-[200px] shrink-0 bg-[#f8f9fb] border-r border-[#e2e8f0] flex flex-col h-full min-h-0 overflow-hidden"
        style="font-family: 'Times New Roman', Times, serif;"
      >
        <div
          class="shrink-0 px-4 py-4 border-b border-[#e2e8f0] flex items-center gap-2.5 bg-gradient-to-r from-[#E6F1FB] to-[#f8f9fb]"
        >
          <span
            class="text-[#185FA5] flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm border border-[#e2e8f0]"
          >
            <claims-icon name=${MaterialIcons.shieldCheck} size="sm"></claims-icon>
          </span>
          <div>
            <div class="font-semibold text-[13px] text-[#0C447C] leading-tight" style="font-family: inherit;">
              Neutrinos
            </div>
            <div class="text-[10px] text-[#718096]" style="font-family: inherit;">Claims Workbench</div>
          </div>
        </div>

        <nav class="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-3">
          ${NAV_SECTIONS.map((section) => {
            const items = grouped[section] ?? []
            if (!items.length) return null
            const expanded = this.expandedSections[section] ?? true
            return html`
              <div class="mb-2">
                <button
                  type="button"
                  @click=${() => this.toggleSection(section)}
                  class="w-full flex items-center justify-between gap-1 px-[15px] py-1.5 text-left uppercase font-bold text-[#4a5568] text-[0.85rem] tracking-wide hover:text-[#2d3748] transition-colors"
                  style="font-family: inherit;"
                >
                  <span class="leading-tight">${section}</span>
                  ${this.chevron(expanded)}
                </button>
                ${expanded
                  ? items.map(
                      (item) => html`
                        <button
                          type="button"
                          @click=${() => this.handleNav(item.id)}
                          class=${cn(
                            'w-full block text-left text-[13px] py-2.5 pl-[30px] pr-3 transition-all border-l-4',
                            this.activePage === item.id
                              ? 'border-l-[#1a365d] bg-[#ebf4ff] text-[#1a365d] font-bold rounded-r-[20px]'
                              : 'border-l-transparent text-[#4a5568] font-normal hover:bg-[#edf2f7] hover:text-[#2d3748]'
                          )}
                          style="font-family: inherit;"
                        >
                          ${item.label}
                          ${item.scope === 'case'
                            ? html`<span class="text-[9px] font-normal text-[#a0aec0] ml-1">(case)</span>`
                            : html`<span class="text-[9px] font-normal text-[#a0aec0] ml-1">(claim)</span>`}
                        </button>
                      `
                    )
                  : null}
              </div>
            `
          })}
        </nav>
      </aside>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-sidebar': ClaimsSidebar
  }
}
