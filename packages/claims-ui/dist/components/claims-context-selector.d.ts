import { LitElement } from 'lit';
import type { ClaimsPolicy, ClaimsSelectorItem } from '../lib/case-data.js';
export type { ClaimsCaseContext, ClaimsPolicy, ClaimsSelectorItem } from '../lib/case-data.js';
export interface ClaimChangedDetail {
    claimId: string;
    claim: ClaimsSelectorItem;
}
export interface PolicyChangedDetail {
    claimId: string;
    policyId: string;
    policy: ClaimsPolicy;
}
export declare class ClaimsContextSelector extends LitElement {
    static styles: import("lit").CSSResult;
    /** Fixed case for this workbench session (set by host when opening the case). */
    caseId: string;
    caseInsuredName: string;
    claims: ClaimsSelectorItem[];
    selectedClaimId: string;
    selectedPolicyId: string;
    private _activePolicies;
    willUpdate(changed: Map<string, unknown>): void;
    private _emitClaimChanged;
    private _emitPolicyChanged;
    private _onClaimChange;
    private _onPolicyChange;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-context-selector': ClaimsContextSelector;
    }
}
//# sourceMappingURL=claims-context-selector.d.ts.map