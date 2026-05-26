import type { ClaimProduct } from './claim-product.js';
import { type ClaimsBeneficiary } from './beneficiary-data.js';
export type { ClaimsBeneficiary, BeneficiaryTaxCertification } from './beneficiary-data.js';
export { beneficiaryFullName } from './beneficiary-data.js';
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
    /** Death: date of death. TI: date of diagnosis (submission portal Event Details). */
    eventDate: string;
    eventDateLabel: string;
    claims: ClaimsSelectorItem[];
    beneficiaries: ClaimsBeneficiary[];
}
/** Demo death case — aligns with death claim submission portal (S1–S15). */
export declare const DEFAULT_DEATH_CASE: ClaimsCaseContext;
/** Demo TI case — aligns with TI submission portal (C1–C14). */
export declare const DEFAULT_TI_CASE: ClaimsCaseContext;
export declare function defaultCaseForProduct(product: ClaimProduct): ClaimsCaseContext;
/** @deprecated Use defaultCaseForProduct */
export declare const DEFAULT_CASE: ClaimsCaseContext;
export declare function findClaimInCase(caseContext: ClaimsCaseContext | undefined, claimId: string): ClaimsSelectorItem | undefined;
/** @deprecated Use ClaimsCaseContext */
export type ClaimsCaseItem = ClaimsCaseContext;
//# sourceMappingURL=case-data.d.ts.map