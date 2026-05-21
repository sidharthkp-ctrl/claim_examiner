import { LitElement } from 'lit';
export declare class ClaimsCard extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    icon: string;
    className: string;
    ai: boolean;
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsFieldRow extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    className: string;
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsStatCard extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    color: string;
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsInfoBox extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'info' | 'warning' | 'danger';
    className: string;
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsAiBox extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsMiniField extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-card': ClaimsCard;
        'claims-field-row': ClaimsFieldRow;
        'claims-stat-card': ClaimsStatCard;
        'claims-info-box': ClaimsInfoBox;
        'claims-ai-box': ClaimsAiBox;
        'claims-mini-field': ClaimsMiniField;
    }
}
//# sourceMappingURL=claims-card.d.ts.map