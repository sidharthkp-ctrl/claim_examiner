import type { ClaimProduct } from './claim-product.js'

export interface ExaminerActivity {
  id: string
  category: string
  activity: string
  trigger: string
}

/** Death claim examiner activities (D-01 … D-31). */
export const DEATH_ACTIVITIES: ExaminerActivity[] = [
  { id: 'D-01', category: 'Case Review', activity: 'Review Case Context', trigger: 'Case assigned to examiner queue' },
  { id: 'D-02', category: 'Document & Outreach', activity: 'Review Uploaded Documents', trigger: 'Any entry point' },
  { id: 'D-03', category: 'Document & Outreach', activity: 'Outreach to Claimant / Third Parties', trigger: 'Additional information needed' },
  { id: 'D-04', category: 'Document & Outreach', activity: 'Handle Incorrect Claimant', trigger: 'Claimant is not named beneficiary' },
  { id: 'D-05', category: 'Data Validation', activity: 'Resolve Name Discrepancies', trigger: 'Name mismatch on DC or claim form' },
  { id: 'D-06', category: 'Data Validation', activity: 'Misstatement of Age Handling', trigger: 'DOB on DC differs from policy' },
  { id: 'D-08', category: 'Data Validation', activity: 'Manner of Death Validation', trigger: 'Declared vs certificate manner mismatch' },
  { id: 'D-09', category: 'Data Validation', activity: 'Divorce Revocation Check', trigger: 'Ex-spouse beneficiary + revocation state' },
  { id: 'D-10', category: 'Data Validation', activity: 'Minor Beneficiary Verification', trigger: 'Beneficiary under 18' },
  { id: 'D-11', category: 'Flagged Handling', activity: 'Foreign Death Handling', trigger: 'Death outside U.S./Canada' },
  { id: 'D-12', category: 'Flagged Handling', activity: 'Funeral Home Assignment Processing', trigger: 'Assignment form uploaded' },
  { id: 'D-13', category: 'Flagged Handling', activity: 'CSLN / Child Support Lien Check', trigger: 'CA CO MA NV RI TX WA' },
  { id: 'D-14', category: 'Flagged Handling', activity: 'Federal Tax Lien / Levy Processing', trigger: 'IRS lien flag' },
  { id: 'D-15', category: 'Flagged Handling', activity: 'Foreign Payee (NRA) Handling', trigger: 'Non-resident alien beneficiary' },
  { id: 'D-16', category: 'Flagged Handling', activity: 'Incompetent / Incapacitated Beneficiary', trigger: 'Incapacitated beneficiary' },
  { id: 'D-17', category: 'Flagged Handling', activity: 'Simultaneous Death Handling', trigger: 'Insured and bene died close together' },
  { id: 'D-18', category: 'Flagged Handling', activity: 'Disclaimer Processing', trigger: 'Beneficiary disclaims interest' },
  { id: 'D-19', category: 'Flagged Handling', activity: 'Disappearance Handling', trigger: 'Disappearance claim' },
  { id: 'D-20', category: 'Investigation', activity: 'Contestable Investigation', trigger: 'Contestable + MRX discrepancy' },
  { id: 'D-21', category: 'Investigation', activity: 'ADB / Accidental Death Benefit Investigation', trigger: 'ADB rider + accidental manner' },
  { id: 'D-22', category: 'Decision Preparation', activity: 'Clear Flags and Consolidate Findings', trigger: 'All validation complete' },
  { id: 'D-23', category: 'Decision Preparation', activity: 'State-Specific Requirement Check', trigger: 'Prior to decision' },
  { id: 'D-24', category: 'Decision Execution', activity: 'Approve - Pay', trigger: 'All checks pass, within TPA authority' },
  { id: 'D-25', category: 'Decision Execution', activity: 'Approve - Pay (Suicide Provision)', trigger: 'Suicide within contestable period' },
  { id: 'D-26', category: 'Decision Execution', activity: 'Deny', trigger: 'Limited TPA denial scenarios' },
  { id: 'D-27', category: 'Decision Execution', activity: 'Refer to Prudential for Decision', trigger: 'Over authority / complex' },
  { id: 'D-28', category: 'Decision Execution', activity: 'Recommend Rescission', trigger: 'Material misrepresentation' },
  { id: 'D-29', category: 'Death Verification & APO', activity: 'Perform Death Verification', trigger: 'NIGO Final Notice path' },
  { id: 'D-30', category: 'Death Verification & APO', activity: 'Route Verified Case to Pre-Escheatment', trigger: 'Death verified' },
  { id: 'D-31', category: 'Death Verification & APO', activity: 'Un-Suspend Policy (Death Not Verified)', trigger: 'Death not confirmed' },
]

/** Terminal Illness examiner activities (T-01 … T-29). */
export const TI_ACTIVITIES: ExaminerActivity[] = [
  { id: 'T-01', category: 'Case Review', activity: 'Review Case Context', trigger: 'TI case assigned — no fast track' },
  { id: 'T-02', category: 'Document & Outreach', activity: 'Review Uploaded Documents', trigger: 'Any entry point' },
  { id: 'T-03', category: 'Document & Outreach', activity: 'Outreach to Claimant / Physician', trigger: 'Missing docs or physician verification' },
  { id: 'T-04', category: 'Data Validation', activity: 'Policy Eligibility for TI Benefit', trigger: 'Every TI case' },
  { id: 'T-05', category: 'Data Validation', activity: 'Validate Policy Owner Identity', trigger: 'Every TI case' },
  { id: 'T-06', category: 'Data Validation', activity: 'POA / Guardianship Verification', trigger: 'Representative signing' },
  { id: 'T-07', category: 'Medical Review', activity: 'Refer Case for Medical Expert Review', trigger: 'Every TI case — mandatory' },
  { id: 'T-08', category: 'Medical Review', activity: 'Document Medical Expert Findings', trigger: 'Medical review complete' },
  { id: 'T-09', category: 'Medical Review', activity: 'Request Additional Medical Records', trigger: 'Expert requests records' },
  { id: 'T-10', category: 'Medical Review', activity: 'Physician Independent Phone Verification', trigger: 'As deemed appropriate' },
  { id: 'T-11', category: 'Eligibility & Data', activity: 'Confirm Physician Qualifications', trigger: 'Every TI case' },
  { id: 'T-12', category: 'Eligibility & Data', activity: 'Confirm Life Expectancy Eligibility', trigger: 'Every TI case' },
  { id: 'T-13', category: 'Eligibility & Data', activity: 'Review Cognitive Impairment', trigger: 'Insured not mentally capable' },
  { id: 'T-14', category: 'Eligibility & Data', activity: 'Verify Irrevocable Beneficiary Consent', trigger: 'Irrevocable bene on policy' },
  { id: 'T-15', category: 'Special Cases', activity: 'Reinstated Within 2 Years - Review', trigger: 'Policy reinstated within 2 years' },
  { id: 'T-16', category: 'Special Cases', activity: 'Prior TI Claim - Deny', trigger: 'Prior TI paid' },
  { id: 'T-17', category: 'Special Cases', activity: 'Previously Denied - New Claim', trigger: 'Prior denial, new submission' },
  { id: 'T-18', category: 'Special Cases', activity: 'Insured Dies During TI Processing', trigger: 'Death before TI payment' },
  { id: 'T-19', category: 'Investigation', activity: 'Contestable Investigation (TI)', trigger: 'Contestable + MRX / pre-policy condition' },
  { id: 'T-20', category: 'Data Match & Liens', activity: 'Data Match - Child Support Liens', trigger: 'CA CO MA NV RI TX WA' },
  { id: 'T-21', category: 'Data Match & Liens', activity: 'IRS Lien Check', trigger: 'Every TI case' },
  { id: 'T-22', category: 'Quote Management', activity: 'Quote Recalculation', trigger: 'Quote over 30 days at receipt' },
  { id: 'T-23', category: 'Decision Preparation', activity: 'Clear Flags and Consolidate Findings', trigger: 'All validation + medical complete' },
  { id: 'T-24', category: 'Decision Preparation', activity: 'Acknowledgment SLA Check', trigger: 'Claim form received' },
  { id: 'T-25', category: 'Decision Execution', activity: 'Approve - Pay', trigger: 'Medical expert approves, within TPA authority' },
  { id: 'T-26', category: 'Decision Execution', activity: 'Deny - Life Expectancy', trigger: 'LE does not meet threshold' },
  { id: 'T-27', category: 'Decision Execution', activity: 'Deny - Other Reasons (Pru Required)', trigger: 'Non-LE denial' },
  { id: 'T-28', category: 'Decision Execution', activity: 'Refer to Prudential for Decision', trigger: 'Over authority / complex' },
  { id: 'T-29', category: 'Decision Execution', activity: 'Recommend Rescission', trigger: 'Material misrepresentation' },
]

export function activitiesForProduct(product: ClaimProduct): ExaminerActivity[] {
  return product === 'ti' ? TI_ACTIVITIES : DEATH_ACTIVITIES
}
