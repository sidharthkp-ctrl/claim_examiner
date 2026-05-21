import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-timeline-item.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsClaimOverviewPage extends LightDomElement {
    caseId: string;
    claimId: string;
    claimType: string;
    policyId: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claim-overview-page': ClaimsClaimOverviewPage;
    }
}
//# sourceMappingURL=claim-overview-page.d.ts.map