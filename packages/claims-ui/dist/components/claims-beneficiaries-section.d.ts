import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimsBeneficiary } from '../lib/beneficiary-data.js';
import './claims-badge.js';
import './claims-card.js';
export type BeneficiariesDisplayMode = 'full' | 'table' | 'compact';
export declare class ClaimsBeneficiariesSection extends LightDomElement {
    beneficiaries: ClaimsBeneficiary[];
    mode: BeneficiariesDisplayMode;
    showTax: boolean;
    title: string;
    description: string;
    private _renderTaxBlock;
    private _renderBeneficiaryCard;
    private _renderTable;
    private _renderCompact;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-beneficiaries-section': ClaimsBeneficiariesSection;
    }
}
//# sourceMappingURL=claims-beneficiaries-section.d.ts.map