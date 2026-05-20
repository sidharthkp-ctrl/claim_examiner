var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
let ClaimsMedicalPage = class ClaimsMedicalPage extends LightDomElement {
    render() {
        return html `
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Medical records request (D-18)" icon=${MaterialIcons.stethoscope}>
              <claims-field-row label="Contestable period">
                <claims-badge variant="warning">Active — 23 months</claims-badge>
              </claims-field-row>
              <claims-field-row label="Records requested">Austin Regional Clinic</claims-field-row>
              <claims-field-row label="Date range requested">03/15/2022 — 03/15/2024</claims-field-row>
              <claims-field-row label="Request sent">04/19/2026</claims-field-row>
              <claims-field-row label="Status">
                <claims-badge variant="warning">Pending response</claims-badge>
              </claims-field-row>
              <claims-info-box variant="info" className="mt-2">
                Per BOG 6.1: For contestable claims, request medical records for 2 years prior to policy
                issue date to check for material misrepresentation.
              </claims-info-box>
            </claims-card>

            <claims-card title="Medical history summary" icon=${MaterialIcons.fileText}>
              <claims-field-row label="Pre-existing conditions">
                <claims-badge variant="warning">Under review</claims-badge>
              </claims-field-row>
              <claims-field-row label="Application disclosures">Hypertension disclosed</claims-field-row>
              <claims-field-row label="Undisclosed conditions">
                <claims-badge variant="warning">Pending records</claims-badge>
              </claims-field-row>
              <claims-field-row label="Materiality assessment">
                <claims-badge variant="warning">Pending</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>

          <div>
            <claims-card title="Contestable investigation (D-19)" icon=${MaterialIcons.alertTriangle}>
              <claims-field-row label="Investigation status">
                <claims-badge variant="info">In progress</claims-badge>
              </claims-field-row>
              <claims-field-row label="Assigned investigator">Medical Review Team</claims-field-row>
              <claims-field-row label="Target completion">05/04/2026</claims-field-row>

              <div class="mt-3">
                <div class="text-[11px] text-muted-foreground mb-1">Investigation notes</div>
                <textarea
                  class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                  placeholder="Document investigation findings..."
                >
Hypertension disclosed on application. Awaiting medical records to verify no additional undisclosed conditions. Will assess materiality once records received.</textarea>
              </div>

              <div class="mt-2 flex gap-2">
                <claims-button className="text-[11px]">Save notes</claims-button>
                <claims-button variant="primary" className="text-[11px]"
                  >Request additional records</claims-button
                >
              </div>
            </claims-card>

            <claims-card title="MRX results" icon=${MaterialIcons.stethoscope}>
              <claims-field-row label="MRX check run">04/20/2026</claims-field-row>
              <claims-field-row label="Prescription history">No red flags</claims-field-row>
              <claims-field-row label="Hospital admissions">None found in period</claims-field-row>
              <claims-field-row label="Specialist visits">
                <claims-badge variant="warning">1 cardiology visit — reviewing</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>
        </div>
      </div>
    `;
    }
};
ClaimsMedicalPage = __decorate([
    customElement('claims-medical-page')
], ClaimsMedicalPage);
export { ClaimsMedicalPage };
