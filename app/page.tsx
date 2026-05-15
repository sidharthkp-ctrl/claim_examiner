"use client"

import { useState } from "react"
import { ClaimsSidebar } from "@/components/claims/sidebar"
import { Topbar } from "@/components/claims/topbar"
import { SLABanner } from "@/components/claims/sla-banner"
import { ClaimHeader } from "@/components/claims/claim-header"
import { CaseContextPage } from "@/components/claims/pages/case-context"
import { EventDetailsPage } from "@/components/claims/pages/event-details"
import { PolicyInfoPage } from "@/components/claims/pages/policy-info"
import { DocumentsPage } from "@/components/claims/pages/documents"
import { IntegrationsPage } from "@/components/claims/pages/integrations"
import { MedicalReviewPage } from "@/components/claims/pages/medical"
import { ReferralPage } from "@/components/claims/pages/referral"
import { WorksheetPage } from "@/components/claims/pages/worksheet"
import { ToolsPage } from "@/components/claims/pages/tools"
import { CommunicationsPage } from "@/components/claims/pages/communications"
import { DecisionPage } from "@/components/claims/pages/decision"

const pageLabels: Record<string, string> = {
  "case-context": "Case Context",
  "event-details": "Event Details",
  "policy-info": "Policy Info",
  "documents": "Documents",
  "integrations": "External Integrations",
  "medical": "Medical Review",
  "referral": "Referral",
  "worksheet": "Worksheet",
  "tools": "Tools",
  "comms": "External Communications",
  "decision": "Decision",
}

export default function ClaimsWorkbench() {
  const [activePage, setActivePage] = useState("case-context")

  const renderPage = () => {
    switch (activePage) {
      case "case-context":
        return <CaseContextPage onNavigate={setActivePage} />
      case "event-details":
        return <EventDetailsPage />
      case "policy-info":
        return <PolicyInfoPage />
      case "documents":
        return <DocumentsPage />
      case "integrations":
        return <IntegrationsPage />
      case "medical":
        return <MedicalReviewPage />
      case "referral":
        return <ReferralPage />
      case "worksheet":
        return <WorksheetPage />
      case "tools":
        return <ToolsPage />
      case "comms":
        return <CommunicationsPage />
      case "decision":
        return <DecisionPage />
      default:
        return <CaseContextPage onNavigate={setActivePage} />
    }
  }

  return (
    <div className="flex h-screen min-h-[720px] bg-background text-[13px] font-sans">
      <ClaimsSidebar activePage={activePage} onPageChange={setActivePage} />
      
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Topbar breadcrumbLabel={pageLabels[activePage] || activePage} />
        <SLABanner />
        <ClaimHeader />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}
