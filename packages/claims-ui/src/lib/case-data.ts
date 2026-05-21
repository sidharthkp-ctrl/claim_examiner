/** A policy attached to a claim filing. */
export interface ClaimsPolicy {
  id: string
  label: string
}

/** A single claim within the open case. */
export interface ClaimsSelectorItem {
  id: string
  type: string
  status: string
  personName: string
  policies: ClaimsPolicy[]
}

/**
 * The case is the group of claims for one insured/event.
 * The workbench opens with one case already selected (no in-app case picker).
 */
export interface ClaimsCaseContext {
  id: string
  insuredName: string
  dateOfDeath: string
  claims: ClaimsSelectorItem[]
}

/** Demo case opened by the host app (e.g. route / case queue). */
export const DEFAULT_CASE: ClaimsCaseContext = {
  id: 'CASE-2026-001',
  insuredName: 'John A. Smith',
  dateOfDeath: '02/28/2026',
  claims: [
    {
      id: 'CLM-001',
      type: 'Death Claim — Life',
      status: 'In Review',
      personName: 'John A. Smith',
      policies: [{ id: 'POL-001', label: 'Life — $500,000' }],
    },
    {
      id: 'CLM-002',
      type: 'Death Claim — Term',
      status: 'Pending documents',
      personName: 'John A. Smith',
      policies: [{ id: 'POL-002', label: 'Term — $250,000' }],
    },
  ],
}

export function findClaimInCase(
  caseContext: ClaimsCaseContext | undefined,
  claimId: string
) {
  return caseContext?.claims.find((c) => c.id === claimId)
}

/** @deprecated Use ClaimsCaseContext */
export type ClaimsCaseItem = ClaimsCaseContext
