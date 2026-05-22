import { html, type TemplateResult } from 'lit'
import { MaterialIcons } from '../../lib/material-icons.js'
import '../../components/claims-badge.js'
import '../../components/claims-card.js'

export function renderDeathEventDetails(): TemplateResult {
  return html`
    <div class="grid grid-cols-2 gap-2.5">
      <div>
        <claims-card title="Death event (S7 — Details of Passing)" icon=${MaterialIcons.fileText}>
          <claims-field-row label="Date of passing">02/28/2026</claims-field-row>
          <claims-field-row label="Place of death">Austin, TX — Domestic</claims-field-row>
          <claims-field-row label="Foreign death flag"
            ><claims-badge variant="success">No</claims-badge></claims-field-row
          >
          <claims-field-row label="Declared manner (claimant — S7)"
            ><claims-badge variant="warning">Natural</claims-badge></claims-field-row
          >
          <claims-field-row label="Certificate manner (S11 review)"
            ><claims-badge variant="danger">Accidental</claims-badge></claims-field-row
          >
          <claims-field-row label="Cause stated on certificate">Blunt force trauma</claims-field-row>
          <claims-field-row label="Country / State">United States — Texas</claims-field-row>
          <claims-field-row label="Marital status at passing">Married</claims-field-row>
          <claims-field-row label="Certifying physician">Dr. Robert Lee, MD</claims-field-row>
          <claims-field-row label="AI extraction confidence"
            ><claims-badge variant="success">94%</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="Key dates & contestability" icon=${MaterialIcons.calendar}>
          <claims-field-row label="Policy issue date">03/15/2024</claims-field-row>
          <claims-field-row label="Date of death">02/28/2026</claims-field-row>
          <claims-field-row label="Months since issue">23 months</claims-field-row>
          <claims-field-row label="Within contestable period"
            ><claims-badge variant="warning">Yes — 2-yr window</claims-badge></claims-field-row
          >
          <claims-field-row label="HORD (date claim received)">04/20/2026</claims-field-row>
          <claims-field-row label="Claim submitted on">04/20/2026 10:42 AM</claims-field-row>
        </claims-card>
      </div>

      <div>
        <claims-card title="Manner discrepancy (D-08)" icon=${MaterialIcons.alertTriangle}>
          <claims-info-box variant="danger" className="mb-2">
            <div class="font-medium text-[#A32D2D]">Mismatch — examiner action required</div>
            <div class="mt-1 text-[#791F1F]">
              Claimant declared Natural (S7); death certificate states Accidental (S11). Must be reconciled
              before decision. ADB rider requires separate accidental death verification (D-21).
            </div>
          </claims-info-box>
          <claims-field-row label="ADB rider present"
            ><claims-badge variant="info">Yes — two-check process</claims-badge></claims-field-row
          >
          <claims-field-row label="Resolution status"
            ><claims-badge variant="warning">Pending examiner action</claims-badge></claims-field-row
          >
          <div class="mt-2">
            <label class="text-[11px] text-muted-foreground">Examiner resolution notes</label>
            <textarea
              class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
              placeholder="Document how manner discrepancy was resolved..."
            ></textarea>
          </div>
        </claims-card>

        <claims-card title="Special manner handling" icon=${MaterialIcons.gavel}>
          <claims-field-row label="Homicide review (D-08)"
            ><claims-badge variant="neutral">N/A — not homicide</claims-badge></claims-field-row
          >
          <claims-field-row label="Suicide review (D-08)"
            ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
          >
          <claims-field-row label="Undetermined — investigation"
            ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="Foreign death (D-11)" icon=${MaterialIcons.globe}>
          <claims-field-row label="Death location">Austin, TX — USA</claims-field-row>
          <claims-field-row label="Foreign death triggered"
            ><claims-badge variant="success">No</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="Policy not active exception (S7a)" icon=${MaterialIcons.alertTriangle}>
          <claims-field-row label="In-force on date of passing"
            ><claims-badge variant="success">Yes — online path continued</claims-badge></claims-field-row
          >
          <claims-info-box variant="info" className="mt-1.5">
            If policy not in force on DOD, claimant sees S7a and claim cannot proceed online.
          </claims-info-box>
        </claims-card>
      </div>
    </div>
  `
}

export function renderTiEventDetails(): TemplateResult {
  return html`
    <div class="grid grid-cols-2 gap-2.5">
      <div>
        <claims-card title="Event details (submission — Event Details)" icon=${MaterialIcons.fileText}>
          <claims-field-row label="Date of diagnosis">03/10/2026</claims-field-row>
          <claims-field-row label="Diagnosis (insured)">Stage IV pancreatic cancer</claims-field-row>
          <claims-field-row label="Life expectancy attestation (claim form)"
            ><claims-badge variant="success">≤ 6 months — non-CA</claims-badge></claims-field-row
          >
          <claims-field-row label="Physician statement LE"
            ><claims-badge variant="success">6 months or less</claims-badge></claims-field-row
          >
          <claims-field-row label="State of residence">Texas — 6-month threshold</claims-field-row>
          <claims-field-row label="Treating physician">Dr. Maria Chen, MD — Oncology</claims-field-row>
          <claims-field-row label="Physician license / U.S. practice"
            ><claims-badge variant="success">Verified (T-11)</claims-badge></claims-field-row
          >
          <claims-field-row label="AI extraction confidence"
            ><claims-badge variant="success">91%</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="Quote gateway (C4 — Select Quote)" icon=${MaterialIcons.dollarSign}>
          <claims-field-row label="Quote reference">TIQ-20260518-00042</claims-field-row>
          <claims-field-row label="Quoted benefit">$42,000.00</claims-field-row>
          <claims-field-row label="Quote generated">05/18/2026</claims-field-row>
          <claims-field-row label="Valid until">06/17/2026 (29 days remaining)</claims-field-row>
          <claims-field-row label="Quote status at filing"
            ><claims-badge variant="success">Valid — Variant A</claims-badge></claims-field-row
          >
          <claims-info-box variant="info" className="mt-1.5">
            Quotes valid 30 days. Variant B routes to new quote journey; Variant C requires regeneration.
          </claims-info-box>
        </claims-card>

        <claims-card title="Key dates" icon=${MaterialIcons.calendar}>
          <claims-field-row label="Policy issue date">03/15/2024</claims-field-row>
          <claims-field-row label="HORD">05/20/2026</claims-field-row>
          <claims-field-row label="Claim submitted">05/20/2026 09:15 AM</claims-field-row>
          <claims-field-row label="Mandatory medical review (T-07)"
            ><claims-badge variant="warning">Required — no fast track</claims-badge></claims-field-row
          >
        </claims-card>
      </div>

      <div>
        <claims-card title="Life expectancy eligibility (T-12)" icon=${MaterialIcons.stethoscope}>
          <claims-field-row label="Threshold">6 months (TX)</claims-field-row>
          <claims-field-row label="Physician certification"
            ><claims-badge variant="success">Meets threshold</claims-badge></claims-field-row
          >
          <claims-field-row label="Claim form attestation match"
            ><claims-badge variant="success">Matches</claims-badge></claims-field-row
          >
          <claims-info-box variant="info" className="mt-1.5">
            California residents: 12-month threshold. Denial for LE only is TPA authority (T-26).
          </claims-info-box>
        </claims-card>

        <claims-card title="Policy owner / representative (C2)" icon=${MaterialIcons.user}>
          <claims-field-row label="Role selected">Policy Owner (insured)</claims-field-row>
          <claims-field-row label="POA documentation"
            ><claims-badge variant="success">N/A</claims-badge></claims-field-row
          >
          <claims-field-row label="Cognitive impairment (T-13)"
            ><claims-badge variant="success">No — insured capable</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="TI eligibility flags (T-04)" icon=${MaterialIcons.shield}>
          <claims-field-row label="TI rider present"
            ><claims-badge variant="success">Yes</claims-badge></claims-field-row
          >
          <claims-field-row label="Grace period default"
            ><claims-badge variant="success">No</claims-badge></claims-field-row
          >
          <claims-field-row label="Prior TI claim paid"
            ><claims-badge variant="success">No</claims-badge></claims-field-row
          >
          <claims-field-row label="Irrevocable bene Section 4"
            ><claims-badge variant="success">N/A</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="Reversal scenario (T-18)" icon=${MaterialIcons.alertTriangle}>
          <claims-field-row label="Insured deceased during processing"
            ><claims-badge variant="success">No</claims-badge></claims-field-row
          >
          <claims-info-box variant="info" className="mt-1.5">
            If insured dies before TI payment: reverse to Death track, Pend TI → Pend Death, handoff to
            death examiner.
          </claims-info-box>
        </claims-card>
      </div>
    </div>
  `
}
