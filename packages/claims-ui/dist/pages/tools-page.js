var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { Icons } from '../lib/icons.js';
import { iconSlot } from '../lib/icon-slot.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
let ClaimsToolsPage = class ClaimsToolsPage extends LightDomElement {
    render() {
        return html `
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <claims-card title="Child support lien — CSLN (D-13)">
            ${iconSlot(Icons.building, '#185FA5')}
            <claims-field-row label="State trigger">TX (issue state)</claims-field-row>
            <claims-field-row label="CSLN result"
              ><claims-badge variant="success">No lien found</claims-badge></claims-field-row
            >
            <claims-field-row label="Checked on">04/20/2026</claims-field-row>
            <claims-info-box variant="info" className="mt-1.5">
              CA: 24-hour rule applies. MA: separate process outside CSLN.
            </claims-info-box>
            <claims-button className="w-full mt-2 text-[11px]">
              ${Icons.refreshCw()}
              Recheck CSLN
            </claims-button>
          </claims-card>

          <claims-card title="IRS lien / federal levy (D-14)">
            ${iconSlot(Icons.receipt, '#854F0B')}
            <claims-field-row label="IRS lien flag"
              ><claims-badge variant="success">No lien</claims-badge></claims-field-row
            >
            <claims-field-row label="Federal tax levy"
              ><claims-badge variant="success">None</claims-badge></claims-field-row
            >
            <claims-field-row label="Checked on">04/20/2026</claims-field-row>
            <claims-button className="w-full mt-2 text-[11px]">Run IRS check</claims-button>
          </claims-card>

          <claims-card title="Identity verification — Accurint (D-05)">
            ${iconSlot(Icons.userSearch, '#534AB7')}
            <claims-field-row label="Search criteria">SSN + DOB + DOD</claims-field-row>
            <claims-field-row label="Result"
              ><claims-badge variant="success">Identity confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="Name variants found">John A. Smith, John Alan Smith</claims-field-row>
            <claims-field-row label="Resolution applied">Policy name accepted</claims-field-row>
            <claims-button className="w-full mt-2 text-[11px]">View Accurint report</claims-button>
          </claims-card>

          <claims-card title="Benefit calculation (D-24)">
            ${iconSlot(Icons.calculator, '#1D9E75')}
            <claims-field-row label="Face value">$500,000.00</claims-field-row>
            <claims-field-row label="Funeral assignment deduction">− $8,500.00</claims-field-row>
            <claims-field-row label="DCI (HORD → settlement)">+ $1,250.00</claims-field-row>
            <claims-field-row label="IRS / CSLN deductions">$0.00</claims-field-row>
            <claims-field-row label="Net payable to beneficiary">
              <span class="text-[#1D9E75] text-[14px]">$492,750.00</span>
            </claims-field-row>
            <claims-field-row label="ADB benefit (separate check)"
              ><claims-badge variant="warning">Pending manner confirm</claims-badge></claims-field-row
            >
            <claims-field-row label="DCI rate applied">Higher of company rate or state rate</claims-field-row>
          </claims-card>

          <claims-card title="SSDI death verification (D-29)">
            ${iconSlot(Icons.globe, '#185FA5')}
            <claims-field-row label="SSDI result"
              ><claims-badge variant="success">Death confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="SSN match"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="DOD in SSDI">02/28/2026</claims-field-row>
            <claims-field-row label="Obituary / funeral home check"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
          </claims-card>

          <claims-card title="State requirements check (D-23)">
            ${iconSlot(Icons.mapPin, '#D85A30')}
            <claims-field-row label="Issue state">TX</claims-field-row>
            <claims-field-row label="IL 45-day letter"
              ><claims-badge variant="neutral">N/A — not IL</claims-badge></claims-field-row
            >
            <claims-field-row label="CA Fair Claim"
              ><claims-badge variant="neutral">N/A — not CA</claims-badge></claims-field-row
            >
            <claims-field-row label="DOI notice states trigger"
              ><claims-badge variant="success">Not triggered</claims-badge></claims-field-row
            >
            <claims-field-row label="NY 5-day acknowledgment"
              ><claims-badge variant="neutral">N/A — not NY</claims-badge></claims-field-row
            >
            <claims-field-row label="TX standard rules apply"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
          </claims-card>

          <claims-card title="ADB investigation (D-21)">
            ${iconSlot(Icons.settings, '#534AB7')}
            <claims-field-row label="ADB rider present"
              ><claims-badge variant="success">Yes</claims-badge></claims-field-row
            >
            <claims-field-row label="Certificate manner">Accidental — confirmed</claims-field-row>
            <claims-field-row label="ADB rider conditions met"
              ><claims-badge variant="success">Yes — covered accident</claims-badge></claims-field-row
            >
            <claims-field-row label="ADB exclusions"
              ><claims-badge variant="success">None apply</claims-badge></claims-field-row
            >
            <claims-field-row label="Contractual death benefit">Check 1 — pay first</claims-field-row>
            <claims-field-row label="ADB benefit">Check 2 — separate payment</claims-field-row>
            <claims-info-box variant="info" className="mt-1.5">
              Two separate payment checks required. Contractual death benefit issued first; ADB issued
              separately.
            </claims-info-box>
          </claims-card>

          <claims-card title="Quote recalculation — TI only (T-22)">
            ${iconSlot(Icons.refreshCw, '#1D9E75')}
            <claims-field-row label="Claim type"
              ><claims-badge variant="neutral">Death claim — N/A</claims-badge></claims-field-row
            >
            <claims-info-box variant="info" className="mt-1.5">
              For TI claims only: if original quote is over 30 days old at claim form receipt, trigger
              recalculation. If reduced, obtain new signed Claimant Statement before payment.
            </claims-info-box>
          </claims-card>
        </div>
      </div>
    `;
    }
};
ClaimsToolsPage = __decorate([
    customElement('claims-tools-page')
], ClaimsToolsPage);
export { ClaimsToolsPage };
