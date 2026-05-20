var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-timeline-item.js';
let ClaimsCaseContextPage = class ClaimsCaseContextPage extends LightDomElement {
    _handleContinue() {
        this.dispatchEvent(new CustomEvent('page-change', {
            detail: { page: 'event-details' },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-4">
          <claims-stat-card label="Claim age" value="0 days"></claims-stat-card>
          <claims-stat-card label="Review progress" value="57%" color="#185FA5"></claims-stat-card>
          <claims-stat-card label="Flags active" value="4" color="#A32D2D"></claims-stat-card>
        </div>

        <claims-card title="AI confidence summary" .ai=${true} className="mb-4" icon=${MaterialIcons.bot}>
          <div class="claims-fields-grid">
            <claims-field-row label="Death certificate"
              ><claims-badge variant="success">94%</claims-badge></claims-field-row
            >
            <claims-field-row label="Claim form"
              ><claims-badge variant="success">98%</claims-badge></claims-field-row
            >
            <claims-field-row label="Authorization"
              ><claims-badge variant="success">91%</claims-badge></claims-field-row
            >
            <claims-field-row label="Funeral assignment"
              ><claims-badge variant="danger">Missing</claims-badge></claims-field-row
            >
            <claims-field-row label="Rule check failures"
              ><claims-badge variant="warning">2 — manner, funeral</claims-badge></claims-field-row
            >
          </div>
        </claims-card>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 min-w-0">
          <div>
            <claims-card title="Claim summary" icon=${MaterialIcons.info}>
              <div class="claims-fields-grid--2">
              <claims-field-row label="Claim ID">CLM-20260420-00123</claims-field-row>
              <claims-field-row label="Claim type">Death Claim</claims-field-row>
              <claims-field-row label="Claim source"
                ><claims-badge variant="info">BAU</claims-badge></claims-field-row
              >
              <claims-field-row label="Entry point">Portal Submission</claims-field-row>
              <claims-field-row label="Assigned examiner">Sarah M.</claims-field-row>
              <claims-field-row label="Status"
                ><claims-badge variant="warning">In Review</claims-badge></claims-field-row
              >
              <claims-field-row label="Verification"
                ><claims-badge variant="success">Verified</claims-badge></claims-field-row
              >
              </div>
            </claims-card>

            <claims-card title="Insured / claimant" icon=${MaterialIcons.user}>
              <div class="claims-fields-grid--2">
              <claims-field-row label="Insured">John A. Smith</claims-field-row>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Claimant">Jane Smith (Spouse)</claims-field-row>
              <claims-field-row label="Beneficiary type">Primary — 100%</claims-field-row>
              <claims-field-row label="Minor beneficiary"
                ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
              >
              <claims-field-row label="Incorrect claimant"
                ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
              >
              </div>
            </claims-card>

            <claims-card title="Activity timeline" icon=${MaterialIcons.activity}>
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
              <claims-timeline-item
                color="#d1d5db"
                title="Decision pending"
                pending
              ></claims-timeline-item>
            </claims-card>
          </div>

          <div>
            <claims-card title="Active flags" icon=${MaterialIcons.flag}>
              <div class="claims-fields-grid--2">
              <claims-field-row label="Contestable period"
                ><claims-badge variant="warning">Active — 23 months</claims-badge></claims-field-row
              >
              <claims-field-row label="Manner discrepancy"
                ><claims-badge variant="danger">Refer</claims-badge></claims-field-row
              >
              <claims-field-row label="ADB rider"
                ><claims-badge variant="info">Review required</claims-badge></claims-field-row
              >
              <claims-field-row label="Funeral assignment"
                ><claims-badge variant="warning">Pending docs</claims-badge></claims-field-row
              >
              <claims-field-row label="Foreign death"
                ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
              >
              <claims-field-row label="Minor beneficiary"
                ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
              >
              <claims-field-row label="Divorce revocation"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="NRA / foreign payee"
                ><claims-badge variant="success">No — US citizen</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death"
                ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="Disclaimer"
                ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="Disappearance"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              </div>
            </claims-card>

            <claims-card title="Communication log summary" icon=${MaterialIcons.messageCircle}>
              <claims-field-row label="Last contact">04/20/2026 — Phone (claimant)</claims-field-row>
              <claims-field-row label="Total interactions">3</claims-field-row>
              <claims-field-row label="Outstanding outreach"
                ><claims-badge variant="warning">1 — funeral form</claims-badge></claims-field-row
              >
            </claims-card>
          </div>
        </div>
        </div>

        <claims-action-bar>
          <claims-button>Save draft</claims-button>
          <claims-button variant="primary" .push=${true} @click=${this._handleContinue}>
            Continue to Event Details
          </claims-button>
        </claims-action-bar>
      </div>
    `;
    }
};
ClaimsCaseContextPage = __decorate([
    customElement('claims-case-context-page')
], ClaimsCaseContextPage);
export { ClaimsCaseContextPage };
