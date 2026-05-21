import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-icon.js';
export declare class ClaimsSidebar extends LightDomElement {
    activePage: string;
    private expandedSections;
    private get groupedItems();
    private handleNav;
    private toggleSection;
    private chevron;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-sidebar': ClaimsSidebar;
    }
}
//# sourceMappingURL=claims-sidebar.d.ts.map