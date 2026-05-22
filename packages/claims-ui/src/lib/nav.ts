import type { ClaimProduct } from './claim-product.js'

export type NavScope = 'case' | 'claim'

export const PAGE_LABELS: Record<string, string> = {
  'case-context': 'Case Overview',
  'event-details': 'Event Details',
  'claimant-details': 'Claimant Details',
  'case-documents': 'Case Documents',
  'claim-overview': 'Claim Overview',
  'policy-info': 'Policy Details',
  'claim-documents': 'Claim Documents',
  medical: 'Medical Review',
  referral: 'Referral',
  worksheet: 'Worksheet',
  comms: 'Communication Trail',
}

export interface NavItem {
  id: string
  label: string
  section: string
  scope: NavScope
}

/** Sidebar section headers — Case block then Claim block. */
export const NAV_SECTIONS = [
  'Case',
  'Claim',
  'Policy Details',
  'Documents',
  'Referral',
  'Decision',
  'Communications',
] as const

const BASE_NAV_ITEMS: NavItem[] = [
  { id: 'case-context', label: 'Overview', section: 'Case', scope: 'case' },
  { id: 'event-details', label: 'Event Details', section: 'Case', scope: 'case' },
  { id: 'claimant-details', label: 'Claimant Details', section: 'Case', scope: 'case' },
  { id: 'case-documents', label: 'Case Documents', section: 'Documents', scope: 'case' },
  { id: 'claim-overview', label: 'Overview', section: 'Claim', scope: 'claim' },
  { id: 'policy-info', label: 'Policy Details', section: 'Policy Details', scope: 'claim' },
  { id: 'claim-documents', label: 'Claim Documents', section: 'Documents', scope: 'claim' },
  { id: 'referral', label: 'Referral', section: 'Referral', scope: 'claim' },
  { id: 'worksheet', label: 'Worksheet', section: 'Decision', scope: 'claim' },
  { id: 'comms', label: 'Communication Trail', section: 'Communications', scope: 'claim' },
]

/** TI portal adds mandatory medical review (T-07) in the claim section. */
const TI_MEDICAL_NAV: NavItem = {
  id: 'medical',
  label: 'Medical Review',
  section: 'Claim',
  scope: 'claim',
}

export function navItemsForProduct(product: ClaimProduct): NavItem[] {
  if (product === 'ti') {
    const items = [...BASE_NAV_ITEMS]
    const claimOverviewIdx = items.findIndex((n) => n.id === 'claim-overview')
    items.splice(claimOverviewIdx + 1, 0, TI_MEDICAL_NAV)
    return items
  }
  return BASE_NAV_ITEMS
}

/** @deprecated Use navItemsForProduct */
export const NAV_ITEMS = BASE_NAV_ITEMS

export function isClaimScopedPage(pageId: string): boolean {
  const item = BASE_NAV_ITEMS.find((n) => n.id === pageId)
  if (item) return item.scope === 'claim'
  return pageId === 'medical'
}
