import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { Icons } from '../lib/icons.js'
import { NAV_ITEMS } from '../lib/nav.js'
import { NAV_ICONS } from '../lib/nav-icons.js'

@customElement('claims-sidebar')
export class ClaimsSidebar extends LightDomElement {
  @property({ type: String }) activePage = 'case-context'

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

  render() {
    const grouped = this.groupedItems
    return html`
      <aside
        class="w-[220px] min-w-[200px] max-w-[220px] shrink-0 bg-card border-r border-border flex flex-col h-full min-h-0 overflow-hidden shadow-sm"
      >
        <div
          class="shrink-0 px-4 py-4 border-b border-border flex items-center gap-2.5 bg-gradient-to-r from-[#E6F1FB] to-white"
        >
          <span class="text-[#185FA5] flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm border border-border">
            ${Icons.shieldCheck('w-4 h-4')}
          </span>
          <div>
            <div class="font-semibold text-[13px] text-[#0C447C] leading-tight">Neutrinos</div>
            <div class="text-[10px] text-muted-foreground">Claims Workbench</div>
          </div>
        </div>

        <nav class="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-2">
          ${Object.entries(grouped).map(
            ([section, items]) => html`
              <div class="mb-1">
                <div
                  class="px-4 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  ${section}
                </div>
                ${items.map((item) => {
                  const icon = NAV_ICONS[item.id] ?? Icons.info
                  const active = this.activePage === item.id
                  return html`
                    <button
                      type="button"
                      @click=${() => this.handleNav(item.id)}
                      class=${cn(
                        'w-full flex items-center gap-2.5 px-4 py-2 text-left text-[12px] transition-all border-l-[3px]',
                        active
                          ? 'border-l-[#185FA5] bg-[#E6F1FB] text-[#0C447C] font-semibold'
                          : 'border-l-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'
                      )}
                    >
                      <span
                        class=${cn(
                          'flex items-center justify-center w-7 h-7 rounded-md shrink-0',
                          active ? 'bg-white text-[#185FA5] shadow-sm' : 'text-[#6b7c8f]'
                        )}
                      >
                        ${icon('w-4 h-4')}
                      </span>
                      <span class="truncate">${item.label}</span>
                    </button>
                  `
                })}
              </div>
            `
          )}
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
