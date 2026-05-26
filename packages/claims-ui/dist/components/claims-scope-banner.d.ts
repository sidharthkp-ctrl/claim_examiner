import { LightDomElement } from '../lib/light-dom.js';
export declare class ClaimsScopeBanner extends LightDomElement {
    scope: 'case' | 'claim';
    title: string;
    description: string;
    entityId: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-scope-banner': ClaimsScopeBanner;
    }
}
//# sourceMappingURL=claims-scope-banner.d.ts.map