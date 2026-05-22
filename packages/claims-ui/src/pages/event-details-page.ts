import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import '../components/claims-scope-banner.js'
import {
  renderDeathEventDetails,
  renderTiEventDetails,
} from './variants/event-details-content.js'

@customElement('claims-event-details-page')
export class ClaimsEventDetailsPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'

  render() {
    const product = claimProductFromAttr(this.claimProduct)
    const description =
      product === 'ti'
        ? 'Terminal illness event — diagnosis, quote, and life expectancy (submission Event Details).'
        : 'Death event information shared by all claims in this case (submission S7 — Details of Passing).'

    return html`
      <div class="claims-page">
        <claims-scope-banner
          scope="case"
          title="Event details"
          .description=${description}
          .entityId=${this.caseId}
        ></claims-scope-banner>
        ${product === 'ti' ? renderTiEventDetails() : renderDeathEventDetails()}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-event-details-page': ClaimsEventDetailsPage
  }
}
