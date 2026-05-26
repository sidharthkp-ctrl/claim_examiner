import { LitElement } from 'lit';
export type ButtonVariant = 'default' | 'primary' | 'success' | 'danger';
export declare class ClaimsButton extends LitElement {
    static styles: import("lit").CSSResult;
    variant: ButtonVariant;
    className: string;
    push: boolean;
    fullwidth: boolean;
    size: 'sm' | 'md';
    render(): import("lit").TemplateResult<1>;
}
export declare class ClaimsActionBar extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-button': ClaimsButton;
        'claims-action-bar': ClaimsActionBar;
    }
}
//# sourceMappingURL=claims-button.d.ts.map