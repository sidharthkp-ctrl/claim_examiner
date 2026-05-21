var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { Icons } from '../lib/icons.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-icon.js';
import '../components/claims-integration-card.js';
import '../components/claims-feed-item.js';
import '../components/claims-scope-banner.js';
let ClaimsClaimDocumentsPage = class ClaimsClaimDocumentsPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
        this.claimId = '';
        this.policyId = '';
    }
    render() {
        return html `
      <div class="claims-page">
        <claims-scope-banner
          scope="claim"
          title="Claim documents"
          description="Documents specific to this claim filing and policy."
          .entityId=${this.claimId}
        ></claims-scope-banner>

        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0">
          <span class="text-[15px] font-semibold text-[#0C447C]">Claim documents · ${this.policyId}</span>
          <claims-button className="text-[11px]">
            <claims-icon slot="icon" name=${MaterialIcons.upload} size="sm"></claims-icon>
            Upload claim document
          </claims-button>
        </div>

        <claims-card title="Claim document repository" icon=${MaterialIcons.files}>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-left">
              <thead>
                <tr class="border-b border-border bg-secondary">
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Document</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Scope</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Claim</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Uploaded</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">AI conf.</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Status</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileText('w-4 h-4 text-[#1D9E75]')}
                      Claim form
                    </span>
                  </td>
                  <td class="p-2"><claims-badge variant="purple">Claim</claims-badge></td>
                  <td class="p-2 text-[12px]">${this.claimId}</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2"><claims-badge variant="success">98%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2"><claims-button size="sm">View</claims-button></td>
                </tr>
                <tr>
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileWarning('w-4 h-4 text-[#E24B4A]')}
                      Funeral assignment form
                    </span>
                  </td>
                  <td class="p-2"><claims-badge variant="purple">Claim</claims-badge></td>
                  <td class="p-2 text-[12px]">${this.claimId}</td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2"><claims-badge variant="neutral">—</claims-badge></td>
                  <td class="p-2"><claims-badge variant="danger">Missing</claims-badge></td>
                  <td class="p-2"><claims-button variant="danger" size="sm">Request</claims-button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <claims-info-box variant="info" className="mt-2">
            Case-level death certificate and authorization are on
            <strong> Case Documents</strong> (${this.caseId}).
          </claims-info-box>
        </claims-card>

        <claims-card title="Upload claim document (D-02)" icon=${MaterialIcons.upload}>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Document type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Claim form</option>
                <option>Funeral assignment form</option>
                <option>Beneficiary statement</option>
                <option>Policy-specific legal</option>
                <option>Other — claim</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Received via</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Email</option>
                <option>Fax</option>
                <option>Portal</option>
              </select>
            </div>
          </div>
          <claims-button variant="primary" className="text-[11px]">Upload to claim ${this.claimId}</claims-button>
        </claims-card>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-2">
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Claim integrations
            </div>
            <claims-integration-card
              iconBg="#E6F1FB"
              iconColor="#185FA5"
              title="CSLN — Child support liens"
              description="State-specific lien lookup"
              status="Connected"
              statusVariant="success"
            >
              <span slot="icon">${Icons.building('w-4 h-4')}</span>
            </claims-integration-card>
            <claims-integration-card
              iconBg="#EEEDFE"
              iconColor="#534AB7"
              title="MRX — Medical record check"
              description="Contestable period medical discrepancy"
              status="Last run 04/20"
              statusVariant="purple"
            >
              <span slot="icon">${Icons.microscope('w-4 h-4')}</span>
            </claims-integration-card>
          </div>
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Claim integration log
            </div>
            <claims-card className="p-3">
              <claims-feed-item
                initials="CS"
                avatarBg="#EAF3DE"
                avatarColor="#3B6D11"
                title="CSLN check — TX"
                timestamp="04/20/2026 10:45 AM"
                description="No child support liens. TX confirmed."
              ></claims-feed-item>
              <claims-feed-item
                initials="MX"
                avatarBg="#EEEDFE"
                avatarColor="#534AB7"
                title="MRX medical check"
                timestamp="04/20/2026 10:48 AM"
                description="Records requested from Austin Regional Clinic."
                .bordered=${false}
              ></claims-feed-item>
            </claims-card>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsClaimDocumentsPage.prototype, "caseId", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimDocumentsPage.prototype, "claimId", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimDocumentsPage.prototype, "policyId", void 0);
ClaimsClaimDocumentsPage = __decorate([
    customElement('claims-claim-documents-page')
], ClaimsClaimDocumentsPage);
export { ClaimsClaimDocumentsPage };
