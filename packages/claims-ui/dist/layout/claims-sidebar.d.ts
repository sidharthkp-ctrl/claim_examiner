import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import { type NavItem } from '../lib/nav.js';
import '../components/claims-icon.js';
export declare class ClaimsSidebar extends LightDomElement {
    activePage: string;
    navItems: NavItem[];
    portalTitle: string;
    claimProduct: ClaimProduct;
    private expandedSections;
    private get groupedItems();
    private handleNav;
    private goHome;
    private toggleSection;
    private chevron;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-sidebar': ClaimsSidebar;
    }
}
//# sourceMappingURL=claims-sidebar.d.ts.map