/** Tax certification per beneficiary (submission S13). */
export interface BeneficiaryTaxCertification {
    taxpayerStatus: 'w9' | 'w8ben';
    taxpayerStatusLabel: string;
    tinLabel: string;
    tinMasked: string;
    federalTaxClassification: string;
    withholdingElection: boolean;
    certified: boolean;
}
/** Beneficiary on policy / claim (submission S5–S6, S13). */
export interface ClaimsBeneficiary {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    suffix?: string;
    dateOfBirth: string;
    relationship: string;
    designation: 'Primary' | 'Contingent' | 'Irrevocable';
    sharePercent: number;
    isMinor: boolean;
    isFilingParty: boolean;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    tax: BeneficiaryTaxCertification;
    ssnVerified?: boolean;
    nameMatchStatus?: 'success' | 'warning' | 'danger';
    nra?: boolean;
}
export declare function beneficiaryFullName(b: ClaimsBeneficiary): string;
/** Death claim — multiple beneficiaries from submission portal. */
export declare const DEATH_CASE_BENEFICIARIES: ClaimsBeneficiary[];
/** TI claim — policy owner plus irrevocable beneficiary (T-14). */
export declare const TI_CASE_BENEFICIARIES: ClaimsBeneficiary[];
//# sourceMappingURL=beneficiary-data.d.ts.map