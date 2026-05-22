import type { ClaimProduct } from './claim-product.js';
export type NavScope = 'case' | 'claim';
export declare const PAGE_LABELS: Record<string, string>;
export interface NavItem {
    id: string;
    label: string;
    section: string;
    scope: NavScope;
}
/** Sidebar section headers — Case block then Claim block. */
export declare const NAV_SECTIONS: readonly ["Case", "Claim", "Policy Details", "Documents", "Referral", "Decision", "Communications"];
export declare function navItemsForProduct(product: ClaimProduct): NavItem[];
/** @deprecated Use navItemsForProduct */
export declare const NAV_ITEMS: NavItem[];
export declare function isClaimScopedPage(pageId: string): boolean;
//# sourceMappingURL=nav.d.ts.map