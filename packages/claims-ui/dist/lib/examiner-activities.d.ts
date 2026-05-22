import type { ClaimProduct } from './claim-product.js';
export interface ExaminerActivity {
    id: string;
    category: string;
    activity: string;
    trigger: string;
}
/** Death claim examiner activities (D-01 … D-31). */
export declare const DEATH_ACTIVITIES: ExaminerActivity[];
/** Terminal Illness examiner activities (T-01 … T-29). */
export declare const TI_ACTIVITIES: ExaminerActivity[];
export declare function activitiesForProduct(product: ClaimProduct): ExaminerActivity[];
//# sourceMappingURL=examiner-activities.d.ts.map