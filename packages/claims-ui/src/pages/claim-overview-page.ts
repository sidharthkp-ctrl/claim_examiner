import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-timeline-item.js'
import '../components/claims-scope-banner.js'

@customElement('claims-claim-overview-page')
export class ClaimsClaimOverviewPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String }) claimId = ''
  @property({ type: String }) claimType = ''
  @property({ type: String }) policyId = ''
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'

  render() {
    const product = claimProductFromAttr(this.claimProduct)

    return html`
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="claim"
            title="Claim-level view"
            description="Specific to the selected claim and policy filing."
            .entityId=${this.claimId}
          ></claims-scope-banner>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <claims-stat-card label="Claim age" value="0 days"></claims-stat-card>
            <claims-stat-card label="Review progress" value="57%" color="#185FA5"></claims-stat-card>
            <claims-stat-card label="Flags active" value="4" color="#A32D2D"></claims-stat-card>
          </div>

          <claims-card title="Claim AI summary" .ai=${true} className="mb-4" icon=${MaterialIcons.bot}>
            <div class="claims-fields-grid">
              <claims-field-row label="Claim form"
                ><claims-badge variant="success">98%</claims-badge></claims-field-row
              >
              ${product === 'ti'
                ? html`
                    <claims-field-row label="Physician Statement"
                      ><claims-badge variant="success">92%</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Medical expert (T-07)"
                      ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
                    >
                  `
                : html`
                    <claims-field-row label="Funeral assignment"
                      ><claims-badge variant="danger">Missing</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Rule check failures"
                      ><claims-badge variant="warning">2 — manner, funeral</claims-badge></claims-field-row
                    >
                  `}
            </div>
          </claims-card>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 min-w-0">
            <div>
              <claims-card title="Claim summary" icon=${MaterialIcons.info}>
                <div class="claims-fields-grid--2">
                  <claims-field-row label="Case ID">${this.caseId}</claims-field-row>
                  <claims-field-row label="Claim ID">${this.claimId}</claims-field-row>
                  <claims-field-row label="Claim type">${this.claimType}</claims-field-row>
                  <claims-field-row label="Policy">${this.policyId}</claims-field-row>
                  <claims-field-row label="Entry point">Portal Submission</claims-field-row>
                  <claims-field-row label="Status"
                    ><claims-badge variant="warning">In Review</claims-badge></claims-field-row
                  >
                </div>
              </claims-card>

              <claims-card title="Claim activity timeline" icon=${MaterialIcons.activity}>
                <claims-timeline-item
                  color="#639922"
                  title="Claim received and verified"
                  time="04/20/2026 09:00 AM"
                ></claims-timeline-item>
                <claims-timeline-item
                  color="#639922"
                  title="System assessment — 28/28 rules run"
                  time="04/20/2026 10:42 AM"
                ></claims-timeline-item>
                <claims-timeline-item
                  color="#185FA5"
                  title="Examiner review in progress"
                  time="04/20/2026 11:00 AM — ongoing"
                  active
                ></claims-timeline-item>
                <claims-timeline-item color="#d1d5db" title="Decision pending" pending></claims-timeline-item>
              </claims-card>
            </div>

            <div>
              <claims-card title="Claim flags" icon=${MaterialIcons.flag}>
                <div class="claims-fields-grid--2">
                  <claims-field-row label="Contestable period"
                    ><claims-badge variant="warning">Active</claims-badge></claims-field-row
                  >
                  ${product === 'ti'
                    ? html`
                        <claims-field-row label="Mandatory medical review"
                          ><claims-badge variant="warning">T-07 required</claims-badge></claims-field-row
                        >
                        <claims-field-row label="Quote validity"
                          ><claims-badge variant="success">Valid</claims-badge></claims-field-row
                        >
                        <claims-field-row label="Life expectancy"
                          ><claims-badge variant="warning">Pending expert</claims-badge></claims-field-row
                        >
                        <claims-field-row label="POA / representative"
                          ><claims-badge variant="success">Policy owner</claims-badge></claims-field-row
                        >
                      `
                    : html`
                        <claims-field-row label="ADB rider"
                          ><claims-badge variant="info">Review required</claims-badge></claims-field-row
                        >
                        <claims-field-row label="Funeral assignment"
                          ><claims-badge variant="warning">Pending docs</claims-badge></claims-field-row
                        >
                        <claims-field-row label="Manner of death"
                          ><claims-badge variant="danger">Mismatch</claims-badge></claims-field-row
                        >
                        <claims-field-row label="Minor beneficiary"
                          ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
                        >
                      `}
                </div>
              </claims-card>
            </div>
          </div>
        </div>

        <claims-action-bar>
          <claims-button>Save draft</claims-button>
          <claims-button variant="primary" .push=${true}>Continue to Worksheet</claims-button>
        </claims-action-bar>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-claim-overview-page': ClaimsClaimOverviewPage
  }
}
