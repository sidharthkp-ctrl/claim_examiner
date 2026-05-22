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

  @state() private activePage = 'case-context'
  @state() private caseContext: ClaimsCaseContext = defaultCaseForProduct('death')
  @state() private selectedClaimId = DEFAULT_DEATH_CASE.claims[0].id
  @state() private selectedPolicyId = DEFAULT_DEATH_CASE.claims[0].policies[0].id

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
        ></claims-case-context-page>`
      case 'event-details':
        return html`<claims-event-details-page
          .caseId=${caseItem.id}
          claim-product=${product}
        ></claims-event-details-page>`
      case 'claimant-details':
        return html`<claims-claimant-details-page
          .caseId=${caseItem.id}
          claim-product=${product}
        ></claims-claimant-details-page>`
      case 'case-documents':
        return html`<claims-case-documents-page
          .caseId=${caseItem.id}
          claim-product=${product}
        ></claims-case-documents-page>`
      case 'claim-overview':
        return html`<claims-claim-overview-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .claimType=${claim?.type ?? ''}
          .policyId=${policy?.id ?? ''}
          claim-product=${product}
        ></claims-claim-overview-page>`
      case 'policy-info':
        return html`<claims-policy-info-page claim-product=${product}></claims-policy-info-page>`
      case 'claim-documents':
        return html`<claims-claim-documents-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .policyId=${policy?.id ?? ''}
          claim-product=${product}
        ></claims-claim-documents-page>`
      case 'medical':
        return html`<claims-medical-page claim-product=${product}></claims-medical-page>`
      case 'referral':
        return html`<claims-referral-page claim-product=${product}></claims-referral-page>`
      case 'worksheet':
        return html`<claims-worksheet-page claim-product=${product}></claims-worksheet-page>`
      case 'comms':
        return html`<claims-communications-page
          .claimId=${claim?.id ?? ''}
          claim-product=${product}
        ></claims-communications-page>`
      default:
        return html`<claims-case-context-page
          .caseId=${caseItem.id}
          .insuredName=${caseItem.insuredName}
          .eventDate=${caseItem.eventDate}
          .eventDateLabel=${caseItem.eventDateLabel}
          .claimsInCase=${caseItem.claims}
          claim-product=${product}
        ></claims-case-context-page>`
    }
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
