/** Tax certification per beneficiary (submission S13). */
export interface BeneficiaryTaxCertification {
  taxpayerStatus: 'w9' | 'w8ben'
  taxpayerStatusLabel: string
  tinLabel: string
  tinMasked: string
  federalTaxClassification: string
  withholdingElection: boolean
  certified: boolean
}

/** Beneficiary on policy / claim (submission S5–S6, S13). */
export interface ClaimsBeneficiary {
  id: string
  firstName: string
  middleName?: string
  lastName: string
  suffix?: string
  dateOfBirth: string
  relationship: string
  designation: 'Primary' | 'Contingent' | 'Irrevocable'
  sharePercent: number
  isMinor: boolean
  isFilingParty: boolean
  email: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  zip: string
  tax: BeneficiaryTaxCertification
  ssnVerified?: boolean
  nameMatchStatus?: 'success' | 'warning' | 'danger'
  nra?: boolean
}

export function beneficiaryFullName(b: ClaimsBeneficiary): string {
  const parts = [b.firstName, b.middleName, b.lastName, b.suffix].filter(Boolean)
  return parts.join(' ')
}

/** Death claim — multiple beneficiaries from submission portal. */
export const DEATH_CASE_BENEFICIARIES: ClaimsBeneficiary[] = [
  {
    id: 'BENE-001',
    firstName: 'Jane',
    middleName: 'A.',
    lastName: 'Smith',
    dateOfBirth: '11/22/1983',
    relationship: 'Spouse',
    designation: 'Primary',
    sharePercent: 75,
    isMinor: false,
    isFilingParty: true,
    email: 'jane.smith@email.com',
    phone: '(512) 555-0198 — Mobile',
    addressLine1: '456 Maple Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78702',
    ssnVerified: true,
    nameMatchStatus: 'success',
    nra: false,
    tax: {
      taxpayerStatus: 'w9',
      taxpayerStatusLabel: 'U.S. Citizen or U.S. Resident (W-9)',
      tinLabel: 'Social Security Number (SSN)',
      tinMasked: '***-**-1234',
      federalTaxClassification: 'Individual / Sole Proprietor',
      withholdingElection: false,
      certified: true,
    },
  },
  {
    id: 'BENE-002',
    firstName: 'Michael',
    lastName: 'Smith',
    suffix: 'Jr.',
    dateOfBirth: '08/15/2008',
    relationship: 'Child',
    designation: 'Primary',
    sharePercent: 25,
    isMinor: true,
    isFilingParty: false,
    email: 'jane.smith@email.com',
    phone: '(512) 555-0198 — Mobile',
    addressLine1: '456 Maple Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78702',
    ssnVerified: true,
    nameMatchStatus: 'success',
    nra: false,
    tax: {
      taxpayerStatus: 'w9',
      taxpayerStatusLabel: 'U.S. Citizen or U.S. Resident (W-9)',
      tinLabel: 'Social Security Number (SSN)',
      tinMasked: '***-**-5678',
      federalTaxClassification: 'Individual / Sole Proprietor',
      withholdingElection: false,
      certified: true,
    },
  },
  {
    id: 'BENE-003',
    firstName: 'Robert',
    lastName: 'Smith',
    dateOfBirth: '04/02/1955',
    relationship: 'Sibling',
    designation: 'Contingent',
    sharePercent: 0,
    isMinor: false,
    isFilingParty: false,
    email: 'robert.smith@email.com',
    phone: '(512) 555-3301 — Home',
    addressLine1: '890 Hill Country Rd',
    city: 'San Antonio',
    state: 'TX',
    zip: '78209',
    ssnVerified: true,
    nameMatchStatus: 'success',
    nra: false,
    tax: {
      taxpayerStatus: 'w9',
      taxpayerStatusLabel: 'U.S. Citizen or U.S. Resident (W-9)',
      tinLabel: 'Social Security Number (SSN)',
      tinMasked: '***-**-9012',
      federalTaxClassification: 'Individual / Sole Proprietor',
      withholdingElection: true,
      certified: true,
    },
  },
]

/** TI claim — policy owner plus irrevocable beneficiary (T-14). */
export const TI_CASE_BENEFICIARIES: ClaimsBeneficiary[] = [
  {
    id: 'BENE-PO',
    firstName: 'John',
    middleName: 'A.',
    lastName: 'Smith',
    dateOfBirth: '09/04/1978',
    relationship: 'Self (insured / policy owner)',
    designation: 'Primary',
    sharePercent: 100,
    isMinor: false,
    isFilingParty: true,
    email: 'john.smith@email.com',
    phone: '(512) 555-0142 — Mobile',
    addressLine1: '123 Oak Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    ssnVerified: true,
    nameMatchStatus: 'success',
    nra: false,
    tax: {
      taxpayerStatus: 'w9',
      taxpayerStatusLabel: 'U.S. Citizen or U.S. Resident (W-9)',
      tinLabel: 'Social Security Number (SSN)',
      tinMasked: '***-**-4521',
      federalTaxClassification: 'Individual / Sole Proprietor',
      withholdingElection: false,
      certified: true,
    },
  },
  {
    id: 'BENE-IRV',
    firstName: 'Jane',
    middleName: 'A.',
    lastName: 'Smith',
    dateOfBirth: '11/22/1983',
    relationship: 'Spouse',
    designation: 'Irrevocable',
    sharePercent: 0,
    isMinor: false,
    isFilingParty: false,
    email: 'jane.smith@email.com',
    phone: '(512) 555-0198 — Mobile',
    addressLine1: '456 Maple Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78702',
    ssnVerified: true,
    nameMatchStatus: 'success',
    nra: false,
    tax: {
      taxpayerStatus: 'w9',
      taxpayerStatusLabel: 'U.S. Citizen or U.S. Resident (W-9)',
      tinLabel: 'Social Security Number (SSN)',
      tinMasked: '***-**-1234',
      federalTaxClassification: 'Individual / Sole Proprietor',
      withholdingElection: false,
      certified: true,
    },
  },
]
