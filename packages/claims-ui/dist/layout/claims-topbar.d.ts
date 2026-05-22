import { LightDomElement } from '../lib/light-dom.js';
export declare class ClaimsTopbar extends LightDomElement {
    breadcrumbLabel: string;
    portalLabel: string;
    showHomeLink: boolean;
    private _goHome;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-topbar': ClaimsTopbar;
    }
}
//# sourceMappingURL=claims-topbar.d.ts.map