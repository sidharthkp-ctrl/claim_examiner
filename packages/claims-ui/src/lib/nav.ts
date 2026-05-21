export type NavScope = 'case' | 'claim'

export const PAGE_LABELS: Record<string, string> = {
  'case-context': 'Case Overview',
  'event-details': 'Event Details',
  'claimant-details': 'Claimant Details',
  'case-documents': 'Case Documents',
  'claim-overview': 'Claim Overview',
  'policy-info': 'Policy Details',
  'claim-documents': 'Claim Documents',
  referral: 'Referral',
  worksheet: 'Worksheet',
  comms: 'Communication Trail',
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

export const NAV_ITEMS = [
  { id: 'case-context', label: 'Overview', section: 'Case', scope: 'case' as NavScope },
  { id: 'event-details', label: 'Event Details', section: 'Case', scope: 'case' as NavScope },
  { id: 'claimant-details', label: 'Claimant Details', section: 'Case', scope: 'case' as NavScope },
  { id: 'case-documents', label: 'Case Documents', section: 'Documents', scope: 'case' as NavScope },
  { id: 'claim-overview', label: 'Overview', section: 'Claim', scope: 'claim' as NavScope },
  { id: 'policy-info', label: 'Policy Details', section: 'Policy Details', scope: 'claim' as NavScope },
  { id: 'claim-documents', label: 'Claim Documents', section: 'Documents', scope: 'claim' as NavScope },
  { id: 'referral', label: 'Referral', section: 'Referral', scope: 'claim' as NavScope },
  { id: 'worksheet', label: 'Worksheet', section: 'Decision', scope: 'claim' as NavScope },
  { id: 'comms', label: 'Communication Trail', section: 'Communications', scope: 'claim' as NavScope },
] as const

export function isClaimScopedPage(pageId: string): boolean {
  const item = NAV_ITEMS.find((n) => n.id === pageId)
  return item?.scope === 'claim'
}
