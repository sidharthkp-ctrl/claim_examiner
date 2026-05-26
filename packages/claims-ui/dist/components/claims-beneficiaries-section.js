var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { beneficiaryFullName, } from '../lib/beneficiary-data.js';
import { MaterialIcons } from '../lib/material-icons.js';
import './claims-badge.js';
import './claims-card.js';
let ClaimsBeneficiariesSection = class ClaimsBeneficiariesSection extends LightDomElement {
    constructor() {
        super(...arguments);
        this.beneficiaries = [];
        this.mode = 'full';
        this.showTax = true;
        this.title = 'Beneficiaries';
        this.description = '';
    }
    _renderTaxBlock(b) {
        const tax = b.tax;
        return html `
      <div class="mt-3 pt-3 border-t border-dashed border-border">
        <div class="text-[12px] font-semibold text-[#0C447C] mb-2">Tax certification (S13)</div>
        <p class="text-[11px] text-muted-foreground mb-2.5 border border-dashed border-border rounded-md px-2.5 py-2">
          Tax information required for benefit payment processing.
        </p>
        <div class="claims-fields-grid--2">
          <claims-field-row label="Taxpayer status">${tax.taxpayerStatusLabel}</claims-field-row>
          <claims-field-row label=${tax.tinLabel}>${tax.tinMasked}</claims-field-row>
          <claims-field-row label="Federal tax classification"
            >${tax.federalTaxClassification}</claims-field-row
          >
          <claims-field-row label="Federal withholding election"
            >${tax.withholdingElection ? 'Yes — elected' : 'No'}</claims-field-row
          >
          <claims-field-row label="Certification attestation"
            ><claims-badge variant=${tax.certified ? 'success' : 'warning'}
              >${tax.certified ? 'Certified' : 'Pending'}</claims-badge
            ></claims-field-row
          >
          ${b.nra
            ? html `<claims-field-row label="NRA / W-8BEN (D-15)"
                ><claims-badge variant="warning">Review required</claims-badge></claims-field-row
              >`
            : nothing}
        </div>
        <claims-info-box variant="info" className="mt-2 text-[11px]">
          Under penalties of perjury: taxpayer ID correct; backup withholding status attested; citizenship
          certified on submission form.
        </claims-info-box>
      </div>
    `;
    }
    _renderBeneficiaryCard(b) {
        const name = beneficiaryFullName(b);
        return html `
      <div class="border border-border rounded-lg p-3 mb-3 last:mb-0 bg-white">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-[13px] font-semibold text-[#0C447C]">${name}</span>
          <claims-badge variant="info">${b.designation}</claims-badge>
          <claims-badge variant="neutral">${b.sharePercent}%</claims-badge>
          ${b.isFilingParty
            ? html `<claims-badge variant="purple">Filing party</claims-badge>`
            : nothing}
          ${b.isMinor
            ? html `<claims-badge variant="warning">Minor (D-10)</claims-badge>`
            : nothing}
          ${b.nameMatchStatus
            ? html `<claims-badge variant=${b.nameMatchStatus}
                >Name ${b.nameMatchStatus === 'success' ? 'verified' : 'review'}</claims-badge
              >`
            : nothing}
        </div>

        <div class="claims-fields-grid--2">
          <claims-field-row label="Date of birth">${b.dateOfBirth}</claims-field-row>
          <claims-field-row label="Relationship to insured">${b.relationship}</claims-field-row>
          <claims-field-row label="Email">${b.email}</claims-field-row>
          <claims-field-row label="Phone">${b.phone}</claims-field-row>
          <claims-field-row label="Address"
            >${b.addressLine1}${b.addressLine2 ? `, ${b.addressLine2}` : ''}, ${b.city}, ${b.state}
            ${b.zip}</claims-field-row
          >
          <claims-field-row label="SSN verification (D-05)"
            ><claims-badge variant=${b.ssnVerified ? 'success' : 'warning'}
              >${b.ssnVerified ? 'Verified' : 'Pending'}</claims-badge
            ></claims-field-row
          >
        </div>

        ${this.showTax ? this._renderTaxBlock(b) : nothing}
      </div>
    `;
    }
    _renderTable() {
        return html `
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left">
          <thead>
            <tr class="border-b border-border bg-secondary">
              <th class="text-[10px] font-medium text-muted-foreground p-2">Name</th>
              <th class="text-[10px] font-medium text-muted-foreground p-2">Designation</th>
              <th class="text-[10px] font-medium text-muted-foreground p-2">Share</th>
              <th class="text-[10px] font-medium text-muted-foreground p-2">Relationship</th>
              <th class="text-[10px] font-medium text-muted-foreground p-2">Tax status</th>
              <th class="text-[10px] font-medium text-muted-foreground p-2">Certified</th>
            </tr>
          </thead>
          <tbody>
            ${this.beneficiaries.map((b) => html `
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px] font-medium">
                    ${beneficiaryFullName(b)}
                    ${b.isFilingParty ? html `<span class="text-[10px] text-[#534AB7]"> · Filing</span>` : nothing}
                  </td>
                  <td class="p-2 text-[12px]">${b.designation}</td>
                  <td class="p-2 text-[12px]">${b.sharePercent}%</td>
                  <td class="p-2 text-[12px]">${b.relationship}</td>
                  <td class="p-2 text-[12px]">${b.tax.taxpayerStatus === 'w9' ? 'W-9' : 'W-8BEN'}</td>
                  <td class="p-2">
                    <claims-badge variant=${b.tax.certified ? 'success' : 'warning'}
                      >${b.tax.certified ? 'Yes' : 'Pending'}</claims-badge
                    >
                  </td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `;
    }
    _renderCompact() {
        return html `
      <div class="space-y-2">
        ${this.beneficiaries.map((b) => html `
            <div class="flex flex-wrap items-center justify-between gap-2 text-[12px] py-1.5 border-b border-border last:border-0">
              <span class="font-medium">${beneficiaryFullName(b)}</span>
              <span class="text-muted-foreground"
                >${b.designation} · ${b.sharePercent}% · ${b.tax.certified ? 'Tax ✓' : 'Tax pending'}</span
              >
            </div>
          `)}
      </div>
    `;
    }
    render() {
        if (!this.beneficiaries.length) {
            return html `
        <claims-card title=${this.title} icon=${MaterialIcons.users}>
          <p class="text-[12px] text-muted-foreground">No beneficiaries on file for this case.</p>
        </claims-card>
      `;
        }
        const body = this.mode === 'table'
            ? this._renderTable()
            : this.mode === 'compact'
                ? this._renderCompact()
                : html `${this.beneficiaries.map((b) => this._renderBeneficiaryCard(b))}`;
        return html `
      <claims-card title=${this.title} icon=${MaterialIcons.users}>
        ${this.description
            ? html `<p class="text-[11px] text-muted-foreground mb-3">${this.description}</p>`
            : nothing}
        <claims-field-row label="Beneficiaries on file"
          ><claims-badge variant="info">${this.beneficiaries.length}</claims-badge></claims-field-row
        >
        ${body}
      </claims-card>
    `;
    }
};
__decorate([
    property({ type: Array })
], ClaimsBeneficiariesSection.prototype, "beneficiaries", void 0);
__decorate([
    property({ type: String })
], ClaimsBeneficiariesSection.prototype, "mode", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsBeneficiariesSection.prototype, "showTax", void 0);
__decorate([
    property({ type: String })
], ClaimsBeneficiariesSection.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsBeneficiariesSection.prototype, "description", void 0);
ClaimsBeneficiariesSection = __decorate([
    customElement('claims-beneficiaries-section')
], ClaimsBeneficiariesSection);
export { ClaimsBeneficiariesSection };
