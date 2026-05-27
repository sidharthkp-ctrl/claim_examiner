import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { NAV_SECTIONS, type NavItem } from '../lib/nav.js'
import { navItemsForProduct } from '../lib/nav.js'
import { MaterialIcons, NAV_MATERIAL_ICONS } from '../lib/material-icons.js'
import '../components/claims-icon.js'

@customElement('claims-sidebar')
export class ClaimsSidebar extends LightDomElement {
  @property({ type: String }) activePage = 'case-context'
  @property({ type: Array }) navItems: NavItem[] = navItemsForProduct('death')
  @property({ type: String }) portalTitle = 'Death Claim Examiner'
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'

  private get groupedItems() {
    const items = this.navItems.length ? this.navItems : navItemsForProduct(this.claimProduct)
    const acc: Record<string, NavItem[]> = {}
    for (const item of items) {
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

  private goHome() {
    window.location.href = '/'
  }

  private navIcon(itemId: string) {
    const iconName = NAV_MATERIAL_ICONS[itemId] ?? NAV_MATERIAL_ICONS['case-context']
    return html`<span
      class="material-symbols-outlined"
      style="font-size:1.125rem;line-height:1;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24;"
    >${iconName}</span>`
  }

  render() {
    const grouped = this.groupedItems
    const product = claimProductFromAttr(this.claimProduct)
    const accent = product === 'ti' ? '#534AB7' : '#185FA5'

    return html`
      <aside
        class="w-[220px] min-w-[220px] max-w-[220px] shrink-0 bg-white border-r border-[#e2e8f0] flex flex-col h-full min-h-0 overflow-hidden"
        style="font-family: inherit;"
      >
        <div
          class="shrink-0 px-4 py-4 border-b border-[#e2e8f0] flex items-center gap-2.5"
        >
          <span
            class="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e6f1fb] border border-[#d8e2ec]"
            style="color: ${accent}"
          >
            <claims-icon name=${MaterialIcons.shieldCheck} size="sm"></claims-icon>
          </span>
          <div class="min-w-0">
            <div class="font-semibold text-[13px] leading-tight" style="color: ${accent};">
              Neutrinos
            </div>
            <div class="text-[10px] text-[#718096] truncate" title=${this.portalTitle}>
              ${this.portalTitle}
            </div>
          </div>
        </div>

        <button
          type="button"
          @click=${this.goHome}
          class="mx-3 mt-2 mb-1 text-[11px] text-left text-[#185FA5] hover:underline"
        >
          ← All portals
        </button>

        <nav class="flex-1 min-h-0 overflow-y-auto overflow-x-hidden py-1.5 px-2">
          ${NAV_SECTIONS.map((section) => {
            const items = grouped[section] ?? []
            if (!items.length) return null
            return items.map(
              (item) => html`
                <button
                  type="button"
                  @click=${() => this.handleNav(item.id)}
                  class=${cn(
                    'w-full flex items-center gap-2.5 text-left text-[13px] px-3 py-2 rounded-lg transition-all mb-0.5',
                    this.activePage === item.id
                      ? 'bg-[#ebf4ff] text-[#185FA5] font-semibold'
                      : 'text-[#4a5568] font-normal hover:bg-[#f4f7fb] hover:text-[#2d3748]'
                  )}
                >
                  <span style=${
                    this.activePage === item.id ? 'color:#185FA5;' : 'color:#718096;'
                  }>${this.navIcon(item.id)}</span>
                  <span class="truncate">${item.label}</span>
                </button>
              `
            )
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
