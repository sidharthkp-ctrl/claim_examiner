export const PAGE_LABELS: Record<string, string> = {
  'case-context': 'Case Context',
  'event-details': 'Event Details',
  'policy-info': 'Policy Info',
  documents: 'Documents',
  integrations: 'External Integrations',
  medical: 'Medical Review',
  referral: 'Referral',
  worksheet: 'Worksheet',
  tools: 'Tools',
  comms: 'External Communications',
  decision: 'Decision',
}

export const NAV_ITEMS = [
  { id: 'case-context', label: 'Case Context', section: 'Case' },
  { id: 'event-details', label: 'Event Details', section: 'Case' },
  { id: 'policy-info', label: 'Policy Info', section: 'Policy' },
  { id: 'documents', label: 'Documents', section: 'Documents' },
  { id: 'integrations', label: 'External Integrations', section: 'Integrations' },
  { id: 'medical', label: 'Medical Review', section: 'Medical' },
  { id: 'referral', label: 'Referral', section: 'Referral' },
  { id: 'worksheet', label: 'Worksheet', section: 'Worksheet' },
  { id: 'tools', label: 'Tools', section: 'Tools' },
  { id: 'comms', label: 'External Communications', section: 'Communications' },
  { id: 'decision', label: 'Decision', section: 'Decision' },
] as const
