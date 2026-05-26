import { LightDomElement } from '../lib/light-dom.js';
export declare class ClaimsClaimHeader extends LightDomElement {
    claimId: string;
    claimType: string;
    claimStatus: string;
    policyId: string;
    policyLabel: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claim-header': ClaimsClaimHeader;
    }
}
//# sourceMappingURL=claims-claim-header.d.ts.map