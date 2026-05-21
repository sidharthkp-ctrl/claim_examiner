import { LightDomElement } from '../lib/light-dom.js';
export declare class ClaimsCaseHeader extends LightDomElement {
    caseId: string;
    insuredName: string;
    dateOfDeath: string;
    claimCount: number;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-case-header': ClaimsCaseHeader;
    }
}
//# sourceMappingURL=claims-case-header.d.ts.map