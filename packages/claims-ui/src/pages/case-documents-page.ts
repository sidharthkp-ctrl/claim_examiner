import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-icon.js'
import '../components/claims-integration-card.js'
import '../components/claims-feed-item.js'
import '../components/claims-scope-banner.js'

@customElement('claims-case-documents-page')
export class ClaimsCaseDocumentsPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'

  render() {
    const product = claimProductFromAttr(this.claimProduct)
    return html`
      <div class="claims-page">
        <claims-scope-banner
          scope="case"
          title="Case documents"
          .description=${product === 'ti'
            ? 'Shared TI case documents (Physician Statement, authorization, medical records).'
            : 'Shared death case documents (death certificate, authorization, etc.).'}
          .entityId=${this.caseId}
        ></claims-scope-banner>

        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0">
          <span class="text-[15px] font-semibold text-[#0C447C]">Case documents</span>
          <claims-button className="text-[11px]">
            <claims-icon slot="icon" name=${MaterialIcons.upload} size="sm"></claims-icon>
            Upload case document
          </claims-button>
        </div>

        <claims-card
          title=${product === 'ti' ? "AI extraction — Physician's Statement" : 'AI extraction — death certificate'}
          .ai=${true}
          className="mb-4"
          icon=${MaterialIcons.bot}
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <claims-mini-field label="Insured name">
              John Alan Smith
              <claims-badge variant="success" className="text-[10px]">Match</claims-badge>
            </claims-mini-field>
            <claims-mini-field label="Date of death">
              02/28/2026
              <claims-badge variant="success" className="text-[10px]">Match</claims-badge>
            </claims-mini-field>
            <claims-mini-field label="Manner of death">
              <span class="text-[#A32D2D]"
                >Accidental <claims-badge variant="danger" className="text-[10px]">Mismatch</claims-badge></span
              >
            </claims-mini-field>
            <claims-mini-field label="Cause of death">Blunt force trauma</claims-mini-field>
            <claims-mini-field label="State of death">Texas (TX)</claims-mini-field>
            <claims-mini-field label="Certificate issuer">Travis County, TX</claims-mini-field>
          </div>
        </claims-card>

        <claims-card title="Case document repository" icon=${MaterialIcons.files}>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-left">
              <thead>
                <tr class="border-b border-border bg-secondary">
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Document</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Scope</th>
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
                      ${Icons.fileText('w-4 h-4 text-[#185FA5]')}
                      Death certificate
                    </span>
                  </td>
                  <td class="p-2"><claims-badge variant="info">Case</claims-badge></td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2"><claims-badge variant="success">94%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2"><claims-button size="sm">View</claims-button></td>
                </tr>
                <tr>
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileText('w-4 h-4 text-[#1D9E75]')}
                      Authorization to release
                    </span>
                  </td>
                  <td class="p-2"><claims-badge variant="info">Case</claims-badge></td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2"><claims-badge variant="success">91%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2"><claims-button size="sm">View</claims-button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </claims-card>

        <claims-card title="Upload case document (D-02)" icon=${MaterialIcons.upload}>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Document type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Death certificate</option>
                <option>Authorization to release</option>
                <option>Medical records (case)</option>
                <option>Legal document</option>
                <option>Other — case</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Received via</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Email</option>
                <option>Fax</option>
                <option>Physical mail</option>
                <option>In-person</option>
              </select>
            </div>
          </div>
          <claims-button variant="primary" className="text-[11px]">Upload to case</claims-button>
        </claims-card>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mt-2">
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Case integrations
            </div>
            <claims-integration-card
              iconBg="#E6F1FB"
              iconColor="#185FA5"
              title="SSDI Death Index"
              description="Social Security death verification"
              status="Connected"
              statusVariant="success"
            >
              <span slot="icon">${Icons.globe('w-4 h-4')}</span>
            </claims-integration-card>
            <claims-integration-card
              iconBg="#E6F1FB"
              iconColor="#185FA5"
              title="Accurint / LexisNexis"
              description="Identity, name history, address lookup"
              status="Connected"
              statusVariant="success"
            >
              <span slot="icon">${Icons.userSearch('w-4 h-4')}</span>
            </claims-integration-card>
          </div>
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Case integration log
            </div>
            <claims-card className="p-3">
              <claims-feed-item
                initials="SS"
                avatarBg="#EAF3DE"
                avatarColor="#3B6D11"
                title="SSDI lookup"
                timestamp="04/20/2026 10:42 AM"
                description="Death confirmed. SSN match. DOD 02/28/2026."
              ></claims-feed-item>
              <claims-feed-item
                initials="AC"
                avatarBg="#EAF3DE"
                avatarColor="#3B6D11"
                title="Accurint search"
                timestamp="04/20/2026 10:44 AM"
                description="Identity confirmed. Name variant: John Alan Smith."
                .bordered=${false}
              ></claims-feed-item>
            </claims-card>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-case-documents-page': ClaimsCaseDocumentsPage
  }
}
