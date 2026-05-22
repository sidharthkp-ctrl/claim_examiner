import { type TemplateResult } from 'lit';
import type { ClaimProduct } from '../../lib/claim-product.js';
import '../../components/claims-badge.js';
import '../../components/claims-button.js';
import '../../components/claims-card.js';
import '../../components/claims-review-item.js';
export declare const DEATH_DECISION_OPTIONS: readonly [{
    readonly id: "approve-pay";
    readonly title: "Approve — Pay (D-24)";
    readonly description: "All checks pass. DCI from HORD to settlement. Route to Payment Process. TPA authority up to $100K aggregate.";
}, {
    readonly id: "approve-suicide";
    readonly title: "Approve — Pay suicide provision (D-25)";
    readonly description: "Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value).";
}, {
    readonly id: "deny-tpa";
    readonly title: "Deny — within TPA authority (D-26)";
    readonly description: "Very limited scenarios. Appeal language for CA IL NE NH NJ RI TN WA WV. Most denials require Pru first.";
}, {
    readonly id: "refer-pru";
    readonly title: "Refer to Prudential for decision (D-27)";
    readonly description: "Over TPA authority, complex cases, most denials, rescission recommendations.";
}, {
    readonly id: "rescission";
    readonly title: "Recommend rescission (D-28)";
    readonly description: "Material misrepresentation. Contestable Claim Summary Form → Pru approval.";
}];
export declare const TI_DECISION_OPTIONS: readonly [{
    readonly id: "approve-pay";
    readonly title: "Approve — Pay (T-25)";
    readonly description: "Medical expert approves. Face × % up to 95%, minus $100 admin fee. DCI HORD to settlement. Policy terminates on payment. TPA: $50K TI / $101K aggregate.";
}, {
    readonly id: "deny-ti-life";
    readonly title: "Deny — Life expectancy (T-26)";
    readonly description: "LE >6 months (>12 months CA). TPA denial authority — does not require Pru approval.";
}, {
    readonly id: "deny-ti-other";
    readonly title: "Deny — other reasons, Pru required (T-27)";
    readonly description: "Non-life-expectancy denials — $0 TPA authority. Pru approval before denial letter.";
}, {
    readonly id: "refer-pru";
    readonly title: "Refer to Prudential for decision (T-28)";
    readonly description: "Over authority, complex cases, most denials, rescission recommendations.";
}, {
    readonly id: "rescission";
    readonly title: "Recommend rescission (T-29)";
    readonly description: "Contestable investigation indicates material misrepresentation.";
}];
export declare function decisionOptionsForProduct(product: ClaimProduct): readonly [{
    readonly id: "approve-pay";
    readonly title: "Approve — Pay (D-24)";
    readonly description: "All checks pass. DCI from HORD to settlement. Route to Payment Process. TPA authority up to $100K aggregate.";
}, {
    readonly id: "approve-suicide";
    readonly title: "Approve — Pay suicide provision (D-25)";
    readonly description: "Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value).";
}, {
    readonly id: "deny-tpa";
    readonly title: "Deny — within TPA authority (D-26)";
    readonly description: "Very limited scenarios. Appeal language for CA IL NE NH NJ RI TN WA WV. Most denials require Pru first.";
}, {
    readonly id: "refer-pru";
    readonly title: "Refer to Prudential for decision (D-27)";
    readonly description: "Over TPA authority, complex cases, most denials, rescission recommendations.";
}, {
    readonly id: "rescission";
    readonly title: "Recommend rescission (D-28)";
    readonly description: "Material misrepresentation. Contestable Claim Summary Form → Pru approval.";
}] | readonly [{
    readonly id: "approve-pay";
    readonly title: "Approve — Pay (T-25)";
    readonly description: "Medical expert approves. Face × % up to 95%, minus $100 admin fee. DCI HORD to settlement. Policy terminates on payment. TPA: $50K TI / $101K aggregate.";
}, {
    readonly id: "deny-ti-life";
    readonly title: "Deny — Life expectancy (T-26)";
    readonly description: "LE >6 months (>12 months CA). TPA denial authority — does not require Pru approval.";
}, {
    readonly id: "deny-ti-other";
    readonly title: "Deny — other reasons, Pru required (T-27)";
    readonly description: "Non-life-expectancy denials — $0 TPA authority. Pru approval before denial letter.";
}, {
    readonly id: "refer-pru";
    readonly title: "Refer to Prudential for decision (T-28)";
    readonly description: "Over authority, complex cases, most denials, rescission recommendations.";
}, {
    readonly id: "rescission";
    readonly title: "Recommend rescission (T-29)";
    readonly description: "Contestable investigation indicates material misrepresentation.";
}];
export declare function renderDeathExaminerReview(): TemplateResult;
export declare function renderTiExaminerReview(): TemplateResult;
export declare function renderDeathClaimTools(): TemplateResult;
export declare function renderTiClaimTools(): TemplateResult;
export declare function renderSystemAssessment(product: ClaimProduct): TemplateResult;
//# sourceMappingURL=worksheet-content.d.ts.map