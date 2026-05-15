import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import '../components/claims-card.js'
import '../components/claims-integration-card.js'
import '../components/claims-feed-item.js'

@customElement('claims-integrations-page')
export class ClaimsIntegrationsPage extends LightDomElement {
  render() {
    return html`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Active integrations
            </div>

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

            <claims-integration-card
              iconBg="#E6F1FB"
              iconColor="#185FA5"
              title="CSLN — Child support liens"
              description="State-specific lien lookup (CA CO MA NV RI TX WA)"
              status="Connected"
              statusVariant="success"
            >
              <span slot="icon">${Icons.building('w-4 h-4')}</span>
            </claims-integration-card>

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
              title="IRS lien / federal levy"
              description="Tax lien and levy lookup"
              status="Connected"
              statusVariant="success"
            >
              <span slot="icon">${Icons.receipt('w-4 h-4')}</span>
            </claims-integration-card>

            <claims-integration-card
              iconBg="#FAEEDA"
              iconColor="#854F0B"
              title="Prudential referral portal"
              description="Approval and referral routing to Pru"
              status="Auth required"
              statusVariant="warning"
            >
              <span slot="icon">${Icons.send('w-4 h-4')}</span>
            </claims-integration-card>

            <claims-integration-card
              iconBg="#EEEDFE"
              iconColor="#534AB7"
              title="MRX — Medical record check"
              description="Contestable period medical discrepancy check"
              status="Last run 04/20"
              statusVariant="purple"
            >
              <span slot="icon">${Icons.microscope('w-4 h-4')}</span>
            </claims-integration-card>

            <claims-integration-card
              iconBg="#E1F5EE"
              iconColor="#0F6E56"
              title="Foreign investigation vendor"
              description="D-11 — estimate ≤$1K no Pru approval; >$1K requires Pru"
              status="Not triggered"
              statusVariant="neutral"
            >
              <span slot="icon">${Icons.globe2('w-4 h-4')}</span>
            </claims-integration-card>
          </div>

          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Last activity log
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
              ></claims-feed-item>

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
                description="Contestable period review initiated. Records requested from Austin Regional Clinic."
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
    'claims-integrations-page': ClaimsIntegrationsPage
  }
}
