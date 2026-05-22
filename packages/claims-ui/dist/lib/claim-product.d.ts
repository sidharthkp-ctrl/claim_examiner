/** Death vs Terminal Illness examiner portal product. */
export type ClaimProduct = 'death' | 'ti';
export declare const CLAIM_PRODUCT_LABELS: Record<ClaimProduct, string>;
export declare const CLAIM_PRODUCT_SHORT: Record<ClaimProduct, string>;
export declare function claimProductFromAttr(value: string | null | undefined): ClaimProduct;
//# sourceMappingURL=claim-product.d.ts.map