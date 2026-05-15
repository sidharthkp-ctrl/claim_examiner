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
let ClaimsDocumentsPage = class ClaimsDocumentsPage extends LightDomElement {
    render() {
        return html `
      <div class="claims-page">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 min-w-0">
          <span class="text-[15px] font-semibold text-[#0C447C]">Claim documents</span>
          <claims-button className="text-[11px]">
            ${Icons.upload()}
            Upload document
          </claims-button>
        </div>

        <claims-card title="AI extraction — death certificate" .ai=${true} className="mb-4">
          ${iconSlot(Icons.bot, '#534AB7')}
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

        <claims-card title="Uploaded documents">
          ${iconSlot(Icons.files, '#185FA5')}
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-left">
              <thead>
                <tr class="border-b border-border bg-secondary">
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Document</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Source</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Uploaded</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Channel</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">AI conf.</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Extraction</th>
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
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">94%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button size="sm">View</claims-button>
                  </td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileText('w-4 h-4 text-[#1D9E75]')}
                      Claim form
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">98%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button size="sm">View</claims-button>
                  </td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileText('w-4 h-4 text-[#1D9E75]')}
                      Authorization to release
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">91%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button size="sm">View</claims-button>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${Icons.fileWarning('w-4 h-4 text-[#E24B4A]')}
                      Funeral assignment form
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2"><claims-badge variant="neutral">—</claims-badge></td>
                  <td class="p-2"><claims-badge variant="neutral">—</claims-badge></td>
                  <td class="p-2"><claims-badge variant="danger">Missing</claims-badge></td>
                  <td class="p-2">
                    <claims-button variant="danger" size="sm">Request</claims-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </claims-card>

        <claims-card title="Out-of-channel document upload (D-02)">
          ${iconSlot(Icons.upload, '#854F0B')}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Document type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Death certificate</option>
                <option>Claim form</option>
                <option>Funeral assignment form</option>
                <option>Medical records</option>
                <option>Legal document</option>
                <option>Other</option>
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
            <div>
              <label class="text-[11px] text-muted-foreground">Receipt date</label>
              <input type="date" class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Source / sender</label>
              <input
                type="text"
                class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
                placeholder="e.g. Oakwood Funeral Services"
              />
            </div>
          </div>
          <claims-button variant="primary" className="text-[11px]">Upload &amp; stamp document</claims-button>
        </claims-card>
      </div>
    `;
    }
};
ClaimsDocumentsPage = __decorate([
    customElement('claims-documents-page')
], ClaimsDocumentsPage);
export { ClaimsDocumentsPage };
