import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { LightDomElement } from './lib/light-dom.js'
import {
  defaultCaseForProduct,
  DEFAULT_DEATH_CASE,
  findClaimInCase,
  type ClaimsCaseContext,
} from './lib/case-data.js'
import {
  claimProductFromAttr,
  CLAIM_PRODUCT_LABELS,
  type ClaimProduct,
} from './lib/claim-product.js'
import { PAGE_LABELS, isClaimScopedPage, navItemsForProduct } from './lib/nav.js'
import './layout/claims-sidebar.js'
import './layout/claims-topbar.js'
import './layout/claims-sla-banner.js'
import './layout/claims-case-header.js'
import './layout/claims-claim-header.js'
import './pages/case-context-page.js'
import './pages/claimant-details-page.js'
import './pages/event-details-page.js'
import './pages/case-documents-page.js'
import './pages/claim-overview-page.js'
import './pages/policy-info-page.js'
import './pages/claim-documents-page.js'
import './pages/medical-page.js'
import './pages/referral-page.js'
import './pages/worksheet-page.js'
import './pages/communications-page.js'
import type {
  ClaimChangedDetail,
  PolicyChangedDetail,
} from './components/claims-context-selector.js'
import './components/claims-context-selector.js'

/**
 * Examiner workbench for one open case. Host app selects product (death | ti) and case before navigation.
 */
@customElement('claims-workbench')
export class ClaimsWorkbench extends LightDomElement {
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'
  @property({ type: String, attribute: 'claim-group' }) claimGroup: string = 'workbench'

  @state() private activePage = 'case-context'
  @state() private caseContext: ClaimsCaseContext = defaultCaseForProduct('death')
  @state() private selectedClaimId = DEFAULT_DEATH_CASE.claims[0].id
  @state() private selectedPolicyId = DEFAULT_DEATH_CASE.claims[0].policies[0].id
  @state() private hudExpanded = true

  private get _product(): ClaimProduct {
    return claimProductFromAttr(this.claimProduct)
  }

  private get _activeClaim() {
    return findClaimInCase(this.caseContext, this.selectedClaimId)
  }

  private get _activePolicy() {
    return this._activeClaim?.policies.find((p) => p.id === this.selectedPolicyId)
  }

  connectedCallback() {
    super.connectedCallback()
    this._initCase()
    this.addEventListener('page-change', this._onPageChange as EventListener)
    this.addEventListener('open-claim', this._onOpenClaim as EventListener)
    this.addEventListener('portal-home', this._onPortalHome as EventListener)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('page-change', this._onPageChange as EventListener)
    this.removeEventListener('open-claim', this._onOpenClaim as EventListener)
    this.removeEventListener('portal-home', this._onPortalHome as EventListener)
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('claimProduct')) {
      this._initCase()
    }
  }

  private _initCase() {
    const ctx = defaultCaseForProduct(this._product)
    this.caseContext = ctx
    this.selectedClaimId = ctx.claims[0]?.id ?? ''
    this.selectedPolicyId = ctx.claims[0]?.policies[0]?.id ?? ''
    this.activePage = 'case-context'
  }

  private _onPageChange = (e: Event) => {
    const detail = (e as CustomEvent<{ page: string }>).detail
    if (detail?.page) this.activePage = detail.page
  }

  private _onOpenClaim = (e: Event) => {
    const detail = (e as CustomEvent<{ claimId: string; page?: string }>).detail
    if (!detail?.claimId) return
    this.selectedClaimId = detail.claimId
    const claim = findClaimInCase(this.caseContext, detail.claimId)
    this.selectedPolicyId = claim?.policies[0]?.id ?? this.selectedPolicyId
    this.activePage = detail.page ?? 'claim-overview'
  }

  private _onPortalHome = () => {
    window.location.href = '/'
  }

  private _handleClaimChanged(e: CustomEvent<ClaimChangedDetail>) {
    this.selectedClaimId = e.detail.claimId
    this.selectedPolicyId = e.detail.claim.policies[0]?.id ?? ''
  }

  private _handlePolicyChanged(e: CustomEvent<PolicyChangedDetail>) {
    this.selectedPolicyId = e.detail.policyId
  }

  private _renderPage() {
    const caseItem = this.caseContext
    const claim = this._activeClaim
    const policy = this._activePolicy
    const product = this._product

    switch (this.activePage) {
      case 'case-context':
        return html`<claims-case-context-page
          .caseId=${caseItem.id}
          .insuredName=${caseItem.insuredName}
          .eventDate=${caseItem.eventDate}
          .eventDateLabel=${caseItem.eventDateLabel}
          .claimsInCase=${caseItem.claims}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-case-context-page>`
      case 'event-details':
        return html`<claims-event-details-page
          .caseId=${caseItem.id}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-event-details-page>`
      case 'claimant-details':
        return html`<claims-claimant-details-page
          .caseId=${caseItem.id}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-claimant-details-page>`
      case 'case-documents':
        return html`<claims-case-documents-page
          .caseId=${caseItem.id}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-case-documents-page>`
      case 'claim-overview':
        return html`<claims-claim-overview-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .claimType=${claim?.type ?? ''}
          .policyId=${policy?.id ?? ''}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-claim-overview-page>`
      case 'policy-info':
        return html`<claims-policy-info-page
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-policy-info-page>`
      case 'claim-documents':
        return html`<claims-claim-documents-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .policyId=${policy?.id ?? ''}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-claim-documents-page>`
      case 'medical':
        return html`<claims-medical-page
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-medical-page>`
      case 'referral':
        return html`<claims-referral-page
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-referral-page>`
      case 'worksheet':
        return html`<claims-worksheet-page
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-worksheet-page>`
      case 'comms':
        return html`<claims-communications-page
          .claimId=${claim?.id ?? ''}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-communications-page>`
      default:
        return html`<claims-case-context-page
          .caseId=${caseItem.id}
          .insuredName=${caseItem.insuredName}
          .eventDate=${caseItem.eventDate}
          .eventDateLabel=${caseItem.eventDateLabel}
          .claimsInCase=${caseItem.claims}
          claim-product=${product}
          claim-group=${this.claimGroup}
        ></claims-case-context-page>`
    }
  }

  private _renderGroupHud() {
    let groupTitle = 'Group 2: Claim Examiner Workbench'
    let groupNum = 2
    let bgClass = 'bg-gradient-to-r from-indigo-800 to-indigo-900 border-indigo-700'
    let textClass = 'text-indigo-100'
    let dotClass = 'bg-emerald-400 shadow-emerald-400/50'
    let isPrimary = true
    let items: { label: string; activeOn: string[] }[] = []

    if (this.claimGroup === 'intake') {
      groupTitle = 'Group 1: Claim Intake & Validation'
      groupNum = 1
      bgClass = 'bg-gradient-to-r from-teal-800 to-teal-900 border-teal-700'
      textClass = 'text-teal-100'
      dotClass = 'bg-teal-400 shadow-teal-400/50'
      isPrimary = false
      items = [
        { label: 'Document Completeness Check', activeOn: ['case-documents', 'claim-documents'] },
        { label: 'Beneficiary Validation', activeOn: ['claimant-details'] },
        { label: 'Policy & Rider Verification', activeOn: ['policy-info'] },
        { label: 'Eligibility Review', activeOn: ['policy-info'] },
        { label: 'Contestability Review', activeOn: ['worksheet'] },
        { label: 'Fast Track Check', activeOn: ['case-context'] },
        { label: 'Tax Check & Exceptions', activeOn: ['worksheet'] },
        { label: 'Benefit Calculation', activeOn: ['worksheet'] },
        { label: 'Requirement Review', activeOn: ['case-documents', 'claim-documents'] },
        { label: 'Document Follow-up', activeOn: ['comms'] },
      ]
    } else if (this.claimGroup === 'referral') {
      groupTitle = 'Group 3: Pre-Referral Review'
      groupNum = 3
      bgClass = 'bg-gradient-to-r from-purple-800 to-pink-900 border-purple-700'
      textClass = 'text-pink-100'
      dotClass = 'bg-amber-400 shadow-amber-400/50'
      isPrimary = false
      items = [
        { label: 'Case Context Review', activeOn: ['case-context'] },
        { label: 'Referral Package Preparation', activeOn: ['referral'] },
        { label: 'Update Recommendation & Submit', activeOn: ['referral', 'worksheet'] },
        { label: 'Referral Outcome Processing', activeOn: ['referral'] },
      ]
    } else {
      items = [
        { label: 'Case Workbench & Context', activeOn: ['case-context'] },
        { label: this._product === 'ti' ? 'TI Medical Expert Review' : 'Death Exam & Verification', activeOn: ['event-details', 'medical'] },
        { label: 'Medical & Evidence Review', activeOn: ['medical'] },
        { label: 'Examination Activities', activeOn: ['case-context', 'claim-overview'] },
        { label: 'Claimant Comms & Outreach', activeOn: ['comms'] },
        { label: 'Obtain Additional Info', activeOn: ['comms'] },
        { label: 'Fraud / SIU Assessment', activeOn: ['worksheet'] },
        { label: 'Reserve & Financial Adjustments', activeOn: ['worksheet'] },
        { label: 'Settlement & Payment Verification', activeOn: ['worksheet'] },
        { label: 'Case Notes & Audit Activities', activeOn: ['worksheet'] },
        { label: 'Decision (Approve / Deny)', activeOn: ['worksheet'] },
      ]
    }

    return html`
      <div class="border-b border-border ${bgClass} px-4 py-2.5 shadow-md text-white transition-all duration-300 shrink-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotClass}"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 ${dotClass}"></span>
            </span>
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-bold tracking-tight">${groupTitle}</h4>
              ${isPrimary
                ? html`<span class="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Primary</span>`
                : null}
            </div>
            <span class="text-[11px] ${textClass} border-l border-white/20 pl-3 hidden sm:inline">
              Workflow active &bull; Context pages customized dynamically
            </span>
          </div>
          
          <button 
            @click=${() => { this.hudExpanded = !this.hudExpanded }}
            class="text-xs cursor-pointer hover:text-white flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md"
          >
            <span>${this.hudExpanded ? 'Hide Checklist' : 'Show Task Checklist'}</span>
            <span class="text-[10px]">${this.hudExpanded ? '▲' : '▼'}</span>
          </button>
        </div>

        ${this.hudExpanded 
          ? html`
            <div class="mt-2.5 pt-2.5 border-t border-white/10 flex flex-wrap gap-2.5 items-center">
              <span class="text-[10px] font-bold uppercase tracking-wider text-white/50 block shrink-0">Stage Checklist:</span>
              <div class="flex flex-wrap gap-2">
                ${items.map((item, idx) => {
                  const isActive = item.activeOn.includes(this.activePage)
                  return html`
                    <div 
                      class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-300 select-none
                        ${isActive 
                          ? 'bg-white text-slate-900 font-semibold ring-2 ring-white/30 animate-pulse' 
                          : 'bg-white/10 text-white/80 hover:bg-white/15'
                        }"
                    >
                      <span class="text-[10px] ${isActive ? 'text-indigo-600' : 'text-white/45'} font-bold">
                        ${isActive ? '●' : '✓'}
                      </span>
                      <span>${item.label}</span>
                    </div>
                  `
                })}
              </div>
            </div>
          ` 
          : null}
      </div>
    `
  }

  render() {
    const label = PAGE_LABELS[this.activePage] ?? this.activePage
    const caseItem = this.caseContext
    const claim = this._activeClaim
    const policy = this._activePolicy
    const showClaimHeader = isClaimScopedPage(this.activePage)
    const product = this._product
    const portalLabel = CLAIM_PRODUCT_LABELS[product]

    return html`
      <div class="flex h-full max-h-full min-h-0 bg-[#eef3f8] text-[13px] font-sans antialiased overflow-hidden">
        <claims-sidebar
          .activePage=${this.activePage}
          .navItems=${navItemsForProduct(product)}
          .portalTitle=${portalLabel}
          claim-product=${product}
        ></claims-sidebar>
        <main class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
          <div class="shrink-0 min-w-0">
            <claims-topbar
              .breadcrumbLabel=${label}
              .portalLabel=${portalLabel}
              .showHomeLink=${true}
            ></claims-topbar>
            <claims-context-selector
              .caseId=${caseItem.id}
              .caseInsuredName=${caseItem.insuredName}
              .claims=${caseItem.claims}
              .selectedClaimId=${this.selectedClaimId}
              .selectedPolicyId=${this.selectedPolicyId}
            ></claims-context-selector>
            <claims-sla-banner claim-product=${product}></claims-sla-banner>
            ${this._renderGroupHud()}
            <claims-case-header
              .caseId=${caseItem.id}
              .insuredName=${caseItem.insuredName}
              .eventDate=${caseItem.eventDate}
              .eventDateLabel=${caseItem.eventDateLabel}
              .claimCount=${caseItem.claims.length}
              claim-product=${product}
            ></claims-case-header>
            ${showClaimHeader
              ? html`<claims-claim-header
                  .claimId=${claim?.id ?? ''}
                  .claimType=${claim?.type ?? ''}
                  .claimStatus=${claim?.status ?? ''}
                  .policyId=${policy?.id ?? ''}
                  .policyLabel=${policy?.label ?? ''}
                ></claims-claim-header>`
              : null}
          </div>
          <div class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">${this._renderPage()}</div>
        </main>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-workbench': ClaimsWorkbench
  }
}
