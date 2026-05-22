import { html } from 'lit';
import { Icons } from '../../lib/icons.js';
import { MaterialIcons } from '../../lib/material-icons.js';
import '../../components/claims-badge.js';
import '../../components/claims-button.js';
import '../../components/claims-card.js';
import '../../components/claims-review-item.js';
export const DEATH_DECISION_OPTIONS = [
    {
        id: 'approve-pay',
        title: 'Approve — Pay (D-24)',
        description: 'All checks pass. DCI from HORD to settlement. Route to Payment Process. TPA authority up to $100K aggregate.',
    },
    {
        id: 'approve-suicide',
        title: 'Approve — Pay suicide provision (D-25)',
        description: 'Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value).',
    },
    {
        id: 'deny-tpa',
        title: 'Deny — within TPA authority (D-26)',
        description: 'Very limited scenarios. Appeal language for CA IL NE NH NJ RI TN WA WV. Most denials require Pru first.',
    },
    {
        id: 'refer-pru',
        title: 'Refer to Prudential for decision (D-27)',
        description: 'Over TPA authority, complex cases, most denials, rescission recommendations.',
    },
    {
        id: 'rescission',
        title: 'Recommend rescission (D-28)',
        description: 'Material misrepresentation. Contestable Claim Summary Form → Pru approval.',
    },
];
export const TI_DECISION_OPTIONS = [
    {
        id: 'approve-pay',
        title: 'Approve — Pay (T-25)',
        description: 'Medical expert approves. Face × % up to 95%, minus $100 admin fee. DCI HORD to settlement. Policy terminates on payment. TPA: $50K TI / $101K aggregate.',
    },
    {
        id: 'deny-ti-life',
        title: 'Deny — Life expectancy (T-26)',
        description: 'LE >6 months (>12 months CA). TPA denial authority — does not require Pru approval.',
    },
    {
        id: 'deny-ti-other',
        title: 'Deny — other reasons, Pru required (T-27)',
        description: 'Non-life-expectancy denials — $0 TPA authority. Pru approval before denial letter.',
    },
    {
        id: 'refer-pru',
        title: 'Refer to Prudential for decision (T-28)',
        description: 'Over authority, complex cases, most denials, rescission recommendations.',
    },
    {
        id: 'rescission',
        title: 'Recommend rescission (T-29)',
        description: 'Contestable investigation indicates material misrepresentation.',
    },
];
export function decisionOptionsForProduct(product) {
    return product === 'ti' ? TI_DECISION_OPTIONS : DEATH_DECISION_OPTIONS;
}
export function renderDeathExaminerReview() {
    return html `
    <div class="grid grid-cols-[1fr_220px] gap-2.5">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[13px] font-medium">Examiner review items</span>
          <claims-badge variant="info" className="text-[10px]">4 of 7 resolved — 57%</claims-badge>
        </div>

        <claims-review-item
          status="warning"
          title="Manner of death validation (D-08)"
          statusLabel="Pending"
          subtitle="S7 Natural vs S11 certificate Accidental"
        >
          <div class="flex gap-1.5 items-start mt-2">
            <select class="flex-1 border border-border rounded-md p-1.5 text-[11px]">
              <option>Select resolution...</option>
              <option>Accept certificate — Accidental</option>
              <option>Request additional documentation</option>
            </select>
            <claims-button variant="primary" className="text-[11px]">Resolve</claims-button>
          </div>
        </claims-review-item>

        <claims-review-item
          status="warning"
          title="Funeral home assignment (D-12)"
          statusLabel="Pending"
          subtitle="S8 Yes — validate form, TIN, payment split"
        >
          <div class="bg-[#EAF3DE] rounded-md px-2.5 py-1.5 text-[12px] text-[#27500A] font-medium mb-2">
            Payment split: FH $8,500.00 · Bene $491,500.00
          </div>
          <claims-button variant="success" className="text-[11px]">Approve split</claims-button>
        </claims-review-item>

        <claims-review-item
          status="danger"
          title="Document completeness (D-02)"
          statusLabel="Blocked"
          subtitle="Missing: Funeral Assignment Form (S9/S10)"
        ></claims-review-item>

        <claims-review-item
          status="success"
          title="Name discrepancy (D-05)"
          titleMuted
          collapsed
        ><span slot="status">${Icons.check()} Resolved</span></claims-review-item>

        <claims-review-item
          status="success"
          title="ADB verification (D-21)"
          titleMuted
          collapsed
        ><span slot="status">${Icons.check()} Resolved</span></claims-review-item>

        <claims-review-item status="danger" title="NRA / foreign payee (D-15)" statusLabel="Pending">
          <claims-field-row label="W-8BEN required"
            ><claims-badge variant="success">No — US citizen</claims-badge></claims-field-row
          >
        </claims-review-item>
      </div>
      <div>
        <div class="bg-secondary border border-border rounded-md p-3 text-[11px]">
          <div class="font-medium text-muted-foreground mb-1">Death activities in scope</div>
          D-01 through D-31 including death verification (D-29–31) and APO routing.
        </div>
      </div>
    </div>
  `;
}
export function renderTiExaminerReview() {
    return html `
    <div class="grid grid-cols-[1fr_220px] gap-2.5">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[13px] font-medium">Examiner review items</span>
          <claims-badge variant="info" className="text-[10px]">2 of 6 resolved — 33%</claims-badge>
        </div>

        <claims-review-item
          status="warning"
          title="Medical expert review (T-07) — mandatory"
          statusLabel="In progress"
          subtitle="All TI claims — no fast track"
        >
          <claims-field-row label="Queue">TPA Medical Expert</claims-field-row>
          <claims-field-row label="Physician Statement"
            ><claims-badge variant="success">Uploaded</claims-badge></claims-field-row
          >
        </claims-review-item>

        <claims-review-item
          status="warning"
          title="Life expectancy eligibility (T-12)"
          statusLabel="Pending expert"
          subtitle="6-month threshold (TX)"
        ></claims-review-item>

        <claims-review-item
          status="warning"
          title="Quote recalculation (T-22)"
          statusLabel="Watch"
          subtitle="Quote 29 days old at receipt — within 30 days"
        >
          <claims-field-row label="Action"
            ><claims-badge variant="success">No recalculation required</claims-badge></claims-field-row
          >
        </claims-review-item>

        <claims-review-item status="success" title="Policy owner identity (T-05)" titleMuted collapsed
          ><span slot="status">${Icons.check()} Resolved</span></claims-review-item
        >

        <claims-review-item status="success" title="TI policy eligibility (T-04)" titleMuted collapsed
          ><span slot="status">${Icons.check()} Resolved</span></claims-review-item
        >

        <claims-review-item status="purple" title="Acknowledgment SLA (T-24)" statusLabel="Due">
          <claims-field-row label="Complete claim form received">05/20/2026</claims-field-row>
          <claims-field-row label="NY 5-day / Fair Claim">TX — Fair Claim guidelines</claims-field-row>
        </claims-review-item>
      </div>
      <div>
        <div class="bg-secondary border border-border rounded-md p-3 text-[11px]">
          <div class="font-medium text-muted-foreground mb-1">TI activities in scope</div>
          T-01 through T-29. Mandatory medical review on every case.
        </div>
      </div>
    </div>
  `;
}
export function renderDeathClaimTools() {
    return html `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
      <claims-card title="Child support lien — CSLN (D-13)" icon=${MaterialIcons.building}>
        <claims-field-row label="CSLN result"
          ><claims-badge variant="success">No lien</claims-badge></claims-field-row
        >
        <claims-button className="w-full mt-2 text-[11px]">Recheck CSLN</claims-button>
      </claims-card>
      <claims-card title="IRS lien / federal levy (D-14)" icon=${MaterialIcons.receipt}>
        <claims-field-row label="IRS lien flag"
          ><claims-badge variant="success">No lien</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="Identity — Accurint (D-05)" icon=${MaterialIcons.userSearch}>
        <claims-field-row label="Result"
          ><claims-badge variant="success">Identity confirmed</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="Benefit calculation (D-24)" icon=${MaterialIcons.calculator}>
        <claims-field-row label="Face value">$500,000.00</claims-field-row>
        <claims-field-row label="Funeral assignment">− $8,500.00</claims-field-row>
        <claims-field-row label="Net payable">
          <span class="text-[#1D9E75]">$492,750.00</span>
        </claims-field-row>
      </claims-card>
      <claims-card title="SSDI death verification (D-29)" icon=${MaterialIcons.globe}>
        <claims-field-row label="SSDI result"
          ><claims-badge variant="success">Death confirmed</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="ADB investigation (D-21)" icon=${MaterialIcons.settings}>
        <claims-field-row label="ADB rider"
          ><claims-badge variant="success">Yes — two checks</claims-badge></claims-field-row
        >
      </claims-card>
    </div>
  `;
}
export function renderTiClaimTools() {
    return html `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
      <claims-card title="Quote recalculation (T-22)" icon=${MaterialIcons.refreshCw}>
        <claims-field-row label="Quote reference">TIQ-20260518-00042</claims-field-row>
        <claims-field-row label="Age at claim form receipt">29 days</claims-field-row>
        <claims-field-row label="Recalculation required"
          ><claims-badge variant="success">No</claims-badge></claims-field-row
        >
        <claims-info-box variant="info" className="mt-1.5">
          If quote &gt;30 days at receipt, recalculate. If benefit reduced, obtain new Claimant Statement.
        </claims-info-box>
      </claims-card>
      <claims-card title="Child support lien — CSLN (T-20)" icon=${MaterialIcons.building}>
        <claims-field-row label="CSLN result"
          ><claims-badge variant="success">No lien</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="IRS lien check (T-21)" icon=${MaterialIcons.receipt}>
        <claims-field-row label="IRS lien / levy"
          ><claims-badge variant="success">None</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="Benefit calculation (T-25)" icon=${MaterialIcons.calculator}>
        <claims-field-row label="Quoted accelerated benefit">$42,000.00</claims-field-row>
        <claims-field-row label="Admin fee">− $100.00</claims-field-row>
        <claims-field-row label="Net payable">
          <span class="text-[#1D9E75]">$41,900.00</span>
        </claims-field-row>
        <claims-field-row label="Policy on payment"
          ><claims-badge variant="warning">Terminates</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="Physician verification (T-10 / T-11)" icon=${MaterialIcons.stethoscope}>
        <claims-field-row label="Independent phone verification"
          ><claims-badge variant="warning">Scheduled</claims-badge></claims-field-row
        >
        <claims-field-row label="Family relationship"
          ><claims-badge variant="success">None</claims-badge></claims-field-row
        >
      </claims-card>
      <claims-card title="Prior TI claim (T-16)" icon=${MaterialIcons.shield}>
        <claims-field-row label="Prior TI paid"
          ><claims-badge variant="success">No</claims-badge></claims-field-row
        >
      </claims-card>
    </div>
  `;
}
export function renderSystemAssessment(product) {
    if (product === 'ti') {
        return html `
      <claims-ai-box className="mb-4">
        <span slot="title">AI assessment summary — Terminal Illness</span>
        TI claim for John A. Smith submitted 05/20/2026 by policy owner (insured). Quote
        TIQ-20260518-00042 valid (29 days). Documents: Claim Form ✓ Physician Statement ✓ Authorization ✓
        Medical records — pending expert request. Mandatory medical review required (T-07) — no fast track.
        Life expectancy attestation meets 6-month threshold pending expert confirmation. Recommend route to
        medical expert queue before decision preparation.
      </claims-ai-box>
    `;
    }
    return html `
    <claims-ai-box className="mb-4">
      <span slot="title">AI assessment summary — Death Claim</span>
      Death claim submitted 04/20/2026 by beneficiary Jane Smith (spouse). Policy in-force on DOD 02/28/2026.
      Documents: Death Certificate ✓ Claim Form ✓ Funeral Assignment ✗. Manner flagged — Natural vs
      Accidental. ADB rider — two-check process. Contestable period active. Recommend manner validation and
      funeral assignment follow-up.
    </claims-ai-box>
  `;
}
