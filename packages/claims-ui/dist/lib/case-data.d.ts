/** A policy attached to a claim filing. */
export interface ClaimsPolicy {
    id: string;
    label: string;
}
/** A single claim within the open case. */
export interface ClaimsSelectorItem {
    id: string;
    type: string;
    status: string;
    personName: string;
    policies: ClaimsPolicy[];
}
/**
 * The case is the group of claims for one insured/event.
 * The workbench opens with one case already selected (no in-app case picker).
 */
export interface ClaimsCaseContext {
    id: string;
    insuredName: string;
    dateOfDeath: string;
    claims: ClaimsSelectorItem[];
}
/** Demo case opened by the host app (e.g. route / case queue). */
export declare const DEFAULT_CASE: ClaimsCaseContext;
export declare function findClaimInCase(caseContext: ClaimsCaseContext | undefined, claimId: string): ClaimsSelectorItem | undefined;
/** @deprecated Use ClaimsCaseContext */
export type ClaimsCaseItem = ClaimsCaseContext;
//# sourceMappingURL=case-data.d.ts.map