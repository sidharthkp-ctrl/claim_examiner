/** Death vs Terminal Illness examiner portal product. */
export type ClaimProduct = 'death' | 'ti'

export const CLAIM_PRODUCT_LABELS: Record<ClaimProduct, string> = {
  death: 'Death Claim Examiner',
  ti: 'Terminal Illness Examiner',
}

export const CLAIM_PRODUCT_SHORT: Record<ClaimProduct, string> = {
  death: 'Death',
  ti: 'Terminal Illness',
}

export function claimProductFromAttr(value: string | null | undefined): ClaimProduct {
  return value === 'ti' ? 'ti' : 'death'
}
