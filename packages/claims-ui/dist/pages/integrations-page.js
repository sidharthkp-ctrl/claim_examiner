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
import '../components/claims-badge.js';
import '../components/claims-card.js';
let ClaimsIntegrationsPage = class ClaimsIntegrationsPage extends LightDomElement {
    _integrationCard(opts) {
        const { icon, iconBg, iconColor, title, description, status, statusVariant } = opts;
        return html `
      <div class="border border-border rounded-md p-3 flex items-center gap-2.5 mb-2">
        <div
          class="w-8 h-8 min-w-[30px] rounded-md flex items-center justify-center"
          style="background-color: ${iconBg}; color: ${iconColor}"
        >
          ${icon}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[12px] font-medium">${title}</div>
          <div class="text-[11px] text-muted-foreground">${description}</div>
        </div>
        <claims-badge variant=${statusVariant} className="text-[10px]">${status}</claims-badge>
      </div>
    `;
    }
    _activityLogItem(opts) {
        const { initials, bgColor, textColor, title, time, description, isLast } = opts;
        return html `
      <div class="flex gap-2.5 py-2.5 ${!isLast ? 'border-b border-border' : ''}">
        <div
          class="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[9px] font-medium"
          style="background-color: ${bgColor}; color: ${textColor}"
        >
          ${initials}
        </div>
        <div>
          <div class="text-[12px] font-medium">${title}</div>
          <div class="text-[11px] text-muted-foreground">${time}</div>
          <div class="text-[11px] text-foreground mt-0.5">${description}</div>
        </div>
      </div>
    `;
    }
    render() {
        return html `
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Active integrations
            </div>

            ${this._integrationCard({
            icon: Icons.userSearch('w-4 h-4'),
            iconBg: '#E6F1FB',
            iconColor: '#185FA5',
            title: 'Accurint / LexisNexis',
            description: 'Identity, name history, address lookup',
            status: 'Connected',
            statusVariant: 'success',
        })}

            ${this._integrationCard({
            icon: Icons.building('w-4 h-4'),
            iconBg: '#E6F1FB',
            iconColor: '#185FA5',
            title: 'CSLN — Child support liens',
            description: 'State-specific lien lookup (CA CO MA NV RI TX WA)',
            status: 'Connected',
            statusVariant: 'success',
        })}

            ${this._integrationCard({
            icon: Icons.globe('w-4 h-4'),
            iconBg: '#E6F1FB',
            iconColor: '#185FA5',
            title: 'SSDI Death Index',
            description: 'Social Security death verification',
            status: 'Connected',
            statusVariant: 'success',
        })}

            ${this._integrationCard({
            icon: Icons.receipt('w-4 h-4'),
            iconBg: '#E6F1FB',
            iconColor: '#185FA5',
            title: 'IRS lien / federal levy',
            description: 'Tax lien and levy lookup',
            status: 'Connected',
            statusVariant: 'success',
        })}

            ${this._integrationCard({
            icon: Icons.send('w-4 h-4'),
            iconBg: '#FAEEDA',
            iconColor: '#854F0B',
            title: 'Prudential referral portal',
            description: 'Approval and referral routing to Pru',
            status: 'Auth required',
            statusVariant: 'warning',
        })}

            ${this._integrationCard({
            icon: Icons.microscope('w-4 h-4'),
            iconBg: '#EEEDFE',
            iconColor: '#534AB7',
            title: 'MRX — Medical record check',
            description: 'Contestable period medical discrepancy check',
            status: 'Last run 04/20',
            statusVariant: 'purple',
        })}

            ${this._integrationCard({
            icon: Icons.globe2('w-4 h-4'),
            iconBg: '#E1F5EE',
            iconColor: '#0F6E56',
            title: 'Foreign investigation vendor',
            description: 'D-11 — estimate ≤$1K no Pru approval; >$1K requires Pru',
            status: 'Not triggered',
            statusVariant: 'neutral',
        })}
          </div>

          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Last activity log
            </div>

            <claims-card className="p-3">
              ${this._activityLogItem({
            initials: 'SS',
            bgColor: '#EAF3DE',
            textColor: '#3B6D11',
            title: 'SSDI lookup',
            time: '04/20/2026 10:42 AM',
            description: 'Death confirmed. SSN match. DOD 02/28/2026.',
        })}

              ${this._activityLogItem({
            initials: 'AC',
            bgColor: '#EAF3DE',
            textColor: '#3B6D11',
            title: 'Accurint search',
            time: '04/20/2026 10:44 AM',
            description: 'Identity confirmed. Name variant: John Alan Smith.',
        })}

              ${this._activityLogItem({
            initials: 'CS',
            bgColor: '#EAF3DE',
            textColor: '#3B6D11',
            title: 'CSLN check — TX',
            time: '04/20/2026 10:45 AM',
            description: 'No child support liens. TX confirmed.',
        })}

              ${this._activityLogItem({
            initials: 'MX',
            bgColor: '#EEEDFE',
            textColor: '#534AB7',
            title: 'MRX medical check',
            time: '04/20/2026 10:48 AM',
            description: 'Contestable period review initiated. Records requested from Austin Regional Clinic.',
            isLast: true,
        })}
            </claims-card>
          </div>
        </div>
      </div>
    `;
    }
};
ClaimsIntegrationsPage = __decorate([
    customElement('claims-integrations-page')
], ClaimsIntegrationsPage);
export { ClaimsIntegrationsPage };
