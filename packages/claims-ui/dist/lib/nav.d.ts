export type NavScope = 'case' | 'claim';
export declare const PAGE_LABELS: Record<string, string>;
/** Sidebar section headers — Case block then Claim block. */
export declare const NAV_SECTIONS: readonly ["Case", "Claim", "Policy Details", "Documents", "Referral", "Decision", "Communications"];
export declare const NAV_ITEMS: readonly [{
    readonly id: "case-context";
    readonly label: "Overview";
    readonly section: "Case";
    readonly scope: NavScope;
}, {
    readonly id: "event-details";
    readonly label: "Event Details";
    readonly section: "Case";
    readonly scope: NavScope;
}, {
    readonly id: "claimant-details";
    readonly label: "Claimant Details";
    readonly section: "Case";
    readonly scope: NavScope;
}, {
    readonly id: "case-documents";
    readonly label: "Case Documents";
    readonly section: "Documents";
    readonly scope: NavScope;
}, {
    readonly id: "claim-overview";
    readonly label: "Overview";
    readonly section: "Claim";
    readonly scope: NavScope;
}, {
    readonly id: "policy-info";
    readonly label: "Policy Details";
    readonly section: "Policy Details";
    readonly scope: NavScope;
}, {
    readonly id: "claim-documents";
    readonly label: "Claim Documents";
    readonly section: "Documents";
    readonly scope: NavScope;
}, {
    readonly id: "referral";
    readonly label: "Referral";
    readonly section: "Referral";
    readonly scope: NavScope;
}, {
    readonly id: "worksheet";
    readonly label: "Worksheet";
    readonly section: "Decision";
    readonly scope: NavScope;
}, {
    readonly id: "comms";
    readonly label: "Communication Trail";
    readonly section: "Communications";
    readonly scope: NavScope;
}];
export declare function isClaimScopedPage(pageId: string): boolean;
//# sourceMappingURL=nav.d.ts.map