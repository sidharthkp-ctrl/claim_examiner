import { LitElement } from 'lit';
export declare class ClaimsDecisionOption extends LitElement {
    static styles: import("lit").CSSResult;
    optionId: string;
    name: string;
    title: string;
    description: string;
    selected: boolean;
    private _select;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-decision-option': ClaimsDecisionOption;
    }
}
//# sourceMappingURL=claims-decision-option.d.ts.map