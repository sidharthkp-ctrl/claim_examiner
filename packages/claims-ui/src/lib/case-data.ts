import type { ClaimProduct } from './claim-product.js'

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
  /** Death: date of death. TI: date of diagnosis (submission portal Event Details). */
  eventDate: string
  eventDateLabel: string
  claims: ClaimsSelectorItem[]
}

/** Demo death case — aligns with death claim submission portal (S1–S15). */
export const DEFAULT_DEATH_CASE: ClaimsCaseContext = {
  id: 'CASE-20260420-00089',
  insuredName: 'John A. Smith',
  eventDate: '02/28/2026',
  eventDateLabel: 'Date of death',
  claims: [
    {
      id: 'CLM-20260420-00123',
      type: 'Death Claim — Life',
      status: 'In Review',
      personName: 'John A. Smith',
      policies: [{ id: 'POL-001', label: 'Life — $500,000' }],
    },
    {
      id: 'CLM-20260420-00124',
      type: 'Death Claim — Term',
      status: 'Pending documents',
      personName: 'John A. Smith',
      policies: [{ id: 'POL-002', label: 'Term — $250,000' }],
    },
  ],
}

/** Demo TI case — aligns with TI submission portal (C1–C14). */
export const DEFAULT_TI_CASE: ClaimsCaseContext = {
  id: 'CASE-20260518-00012',
  insuredName: 'John A. Smith',
  eventDate: '03/10/2026',
  eventDateLabel: 'Date of diagnosis',
  claims: [
    {
      id: 'CLM-20260518-00042',
      type: 'Terminal Illness — Accelerated',
      status: 'Medical review',
      personName: 'John A. Smith',
      policies: [{ id: 'POL-001', label: 'Life — TI quote $42,000' }],
    },
  ],
}

export function defaultCaseForProduct(product: ClaimProduct): ClaimsCaseContext {
  return product === 'ti' ? DEFAULT_TI_CASE : DEFAULT_DEATH_CASE
}

/** @deprecated Use defaultCaseForProduct */
export const DEFAULT_CASE = DEFAULT_DEATH_CASE

export function findClaimInCase(
  caseContext: ClaimsCaseContext | undefined,
  claimId: string
) {
  return caseContext?.claims.find((c) => c.id === claimId)
}

/** @deprecated Use ClaimsCaseContext */
export type ClaimsCaseItem = ClaimsCaseContext
