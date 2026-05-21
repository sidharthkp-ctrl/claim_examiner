import { LitElement } from 'lit';
export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'purple';
export declare class ClaimsBadge extends LitElement {
    static styles: import("lit").CSSResult;
    variant: BadgeVariant;
    className: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-badge': ClaimsBadge;
    }
}
//# sourceMappingURL=claims-badge.d.ts.map