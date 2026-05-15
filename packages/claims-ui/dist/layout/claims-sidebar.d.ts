import { LightDomElement } from '../lib/light-dom.js';
export declare class ClaimsSidebar extends LightDomElement {
    activePage: string;
    private get groupedItems();
    private handleNav;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-sidebar': ClaimsSidebar;
    }
}
//# sourceMappingURL=claims-sidebar.d.ts.map