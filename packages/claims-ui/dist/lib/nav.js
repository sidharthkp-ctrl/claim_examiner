export const PAGE_LABELS = {
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
};
/** Sidebar section headers — Case block then Claim block. */
export const NAV_SECTIONS = [
    'Case',
    'Claim',
    'Policy Details',
    'Documents',
    'Referral',
    'Decision',
    'Communications',
];
export const NAV_ITEMS = [
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
];
export function isClaimScopedPage(pageId) {
    const item = NAV_ITEMS.find((n) => n.id === pageId);
    return item?.scope === 'claim';
}
