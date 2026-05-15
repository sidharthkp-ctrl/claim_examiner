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
let ClaimsCommunicationsPage = class ClaimsCommunicationsPage extends LightDomElement {
    _communicationItem(opts) {
        const { initials, bgColor, textColor, sender, type, typeVariant, timestamp, recipient, content, isLast, } = opts;
        return html `
      <div class="flex gap-2.5 py-2.5 ${!isLast ? 'border-b border-border' : ''}">
        <div
          class="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[10px] font-medium"
          style="background-color: ${bgColor}; color: ${textColor}"
        >
          ${initials}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[12px] font-medium">${sender}</span>
            <claims-badge variant=${typeVariant} className="text-[10px]">${type}</claims-badge>
            <span class="text-[11px] text-muted-foreground ml-auto">${timestamp}</span>
          </div>
          ${recipient ? html `<div class="text-[11px] text-muted-foreground">${recipient}</div>` : ''}
          <div class="text-[12px] text-foreground mt-1 leading-relaxed">${content}</div>
        </div>
      </div>
    `;
    }
    render() {
        return html `
      <div class="claims-page">
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-[13px] font-medium text-foreground">External communications</span>
          <claims-button variant="primary" className="text-[11px]">
            ${Icons.plus()}
            Log communication
          </claims-button>
        </div>

        <claims-card>
          ${this._communicationItem({
            initials: 'EX',
            bgColor: '#E6F1FB',
            textColor: '#185FA5',
            sender: 'Sarah M. (Examiner)',
            type: 'Outbound email',
            typeVariant: 'info',
            timestamp: '04/20/2026 11:30 AM',
            recipient: 'To: jane.smith@email.com',
            content: 'Sent initial acknowledgment letter and missing document request for Funeral Assignment Form. Advised 10-business-day response window. TX standard letter template used.',
        })}

          ${this._communicationItem({
            initials: 'JS',
            bgColor: '#EEEDFE',
            textColor: '#534AB7',
            sender: 'Jane Smith (Claimant)',
            type: 'Inbound phone',
            typeVariant: 'neutral',
            timestamp: '04/20/2026 02:15 PM — 8 min',
            content: 'Claimant called re: timeline and assignment form. Confirmed form en route from Oakwood. Stated death was result of a fall — consistent with Accidental on certificate. No additional documents provided this call.',
        })}

          ${this._communicationItem({
            initials: 'EX',
            bgColor: '#E6F1FB',
            textColor: '#185FA5',
            sender: 'Sarah M. (Examiner)',
            type: 'Outbound email',
            typeVariant: 'info',
            timestamp: '04/19/2026 09:00 AM',
            recipient: 'To: Austin Regional Clinic — medical records request',
            content: 'Medical records request for John A. Smith. Requesting all records 03/15/2022 — 03/15/2024 per contestable review BOG 6.1. Authorization form enclosed.',
            isLast: true,
        })}
        </claims-card>

        <claims-card title="Log new communication">
          ${iconSlot(Icons.mail, '#185FA5')}
          <div class="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Communication type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Outbound phone</option>
                <option>Inbound phone</option>
                <option>Outbound email</option>
                <option>Inbound email</option>
                <option>Fax</option>
                <option>Physical mail</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Contact name / party</label>
              <input
                type="text"
                class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
                placeholder="Name..."
              />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Date and time</label>
              <input type="date" class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Letter template</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>None / free text</option>
                <option>Acknowledgment — standard</option>
                <option>Missing document request</option>
                <option>IL 45-day letter</option>
                <option>CA Fair Claim notice</option>
                <option>Denial — with appeal language</option>
                <option>DOI notice (CA IL NE NH NJ RI TN WA WV)</option>
                <option>Incorrect claimant — state-specific</option>
              </select>
            </div>
          </div>
          <div>
            <label class="text-[11px] text-muted-foreground">Notes</label>
            <textarea
              class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
              placeholder="Communication notes — include all relevant details and outcomes..."
            ></textarea>
          </div>
          <div class="mt-2 flex gap-2">
            <claims-button variant="primary" className="text-[11px]">Save log entry</claims-button>
          </div>
        </claims-card>
      </div>
    `;
    }
};
ClaimsCommunicationsPage = __decorate([
    customElement('claims-communications-page')
], ClaimsCommunicationsPage);
export { ClaimsCommunicationsPage };
