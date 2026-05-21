/** Demo case opened by the host app (e.g. route / case queue). */
export const DEFAULT_CASE = {
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
};
export function findClaimInCase(caseContext, claimId) {
    return caseContext?.claims.find((c) => c.id === claimId);
}
