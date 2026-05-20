import { LitElement } from 'lit';
export interface ClaimsPolicy {
    id: string;
    label: string;
}
export interface ClaimsSelectorItem {
    id: string;
    personName: string;
    policies: ClaimsPolicy[];
}
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
    claims: ClaimsSelectorItem[];
    selectedClaimId: string;
    selectedPolicyId: string;
    private _activePolicies;
    willUpdate(changed: Map<string, unknown>): void;
    private _emitClaimChanged;
    private _emitPolicyChanged;
    private _onClaimChange;
    private _onPolicyChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-context-selector': ClaimsContextSelector;
    }
}
//# sourceMappingURL=claims-context-selector.d.ts.map