export const CLAIM_PRODUCT_LABELS = {
    death: 'Death Claim Examiner',
    ti: 'Terminal Illness Examiner',
};
export const CLAIM_PRODUCT_SHORT = {
    death: 'Death',
    ti: 'Terminal Illness',
};
export function claimProductFromAttr(value) {
    return value === 'ti' ? 'ti' : 'death';
}
