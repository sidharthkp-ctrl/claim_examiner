import Link from 'next/link'

export default function PortalHomePage() {
  const groups = [
    {
      id: 'intake',
      num: 1,
      title: 'Group 1: Claim Intake & Validation',
      desc: 'Perform initial intake checks, verify basic eligibility, examine beneficiary information, and calculate initial benefits.',
      color: 'from-cyan-50 to-teal-50 hover:border-teal-500/50',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      btnColor: 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500',
      items: [
        'Document Completeness Check',
        'Beneficiary Validation',
        'Policy & Rider Verification',
        'Eligibility Review',
        'Contestability Review',
        'Fast Track Check',
        'Tax Check & Exceptions',
        'Benefit Calculation',
        'Requirement Review & Pending Resolution',
        'Document Follow-up Management',
      ],
    },
    {
      id: 'workbench',
      num: 2,
      title: 'Group 2: Claim Examiner Workbench',
      isPrimary: true,
      desc: 'The core operational workbench for claims examination, clinical review, fraud assessment, financial adjustment, and final decision-making.',
      color: 'from-blue-50 to-indigo-50 hover:border-indigo-500/50 ring-2 ring-indigo-100 ring-offset-2',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 shadow-md',
      items: [
        'Case Workbench & Context',
        'Death Examination & Verification',
        'TI Medical Expert Review',
        'Medical & Evidence Review',
        'Examination Activities',
        'Claimant Communication & Outreach',
        'Obtain Additional Info',
        'Fraud / SIU Assessment',
        'Reserve & Financial Adjustments',
        'Settlement & Payment Verification',
        'Case Notes & Audit Activities',
        'Decision — Approve / Deny / Rescission / Pre-Escheatment',
      ],
    },
    {
      id: 'referral',
      num: 3,
      title: 'Group 3: Pre-Referral Review',
      desc: 'Conduct pre-referral quality audits, assemble referral packages, document final recommendations, and process outcome decisions.',
      color: 'from-purple-50 to-pink-50 hover:border-pink-500/50',
      badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
      btnColor: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
      items: [
        'Case Context Review',
        'Referral Package Preparation',
        'Update Recommendation & Submit',
        'Referral Outcome Processing',
      ],
    },
  ]

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-[#f4f7fa] to-[#eef3f8] px-4 py-12 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-800">
              Neutrinos Intelligent Systems
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-[#0C447C] tracking-tight sm:text-5xl">
            Claims Examiner Operations Portal
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select a specialized claim workflow group for **Death Claim** or **Terminal Illness (TI)**.
            All groups leverage the same responsive layout, with tools tailored specifically to the group's mission.
          </p>
        </div>

        {/* Portals Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Death Claims Column */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-xl shadow-slate-100/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-500/20">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#185FA5]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E6F1FB] text-[#185FA5] flex items-center justify-center text-2xl font-bold shadow-inner">
                D
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0C447C]">Death Claims</h2>
                <p className="text-xs text-slate-500">Manner of death, ADB, funeral assignments & S1-S15 activities</p>
              </div>
            </div>

            <div className="space-y-6">
              {groups.map((group) => (
                <div
                  key={`death-${group.id}`}
                  className={`group rounded-2xl border border-slate-100 bg-gradient-to-r ${group.color} p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                      {group.title}
                    </h3>
                    <div className="flex gap-2">
                      {group.isPrimary && (
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-emerald-100 text-emerald-800 border border-emerald-200 animate-pulse">
                          Primary Workbench
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-[9px] font-semibold rounded border ${group.badgeColor}`}>
                        Group {group.num}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {group.desc}
                  </p>
                  
                  {/* Sub-items list */}
                  <div className="mb-5 bg-white/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">Included Checklist & Activities:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <span className="text-blue-500 font-bold">✓</span>
                          <span className="truncate" title={item}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/death?group=${group.id}`}
                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${group.btnColor}`}
                  >
                    Open Death Group {group.num} Workbench &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* TI Claims Column */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-xl shadow-slate-100/40 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-500/20">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#534AB7]" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#EEEDFE] text-[#534AB7] flex items-center justify-center text-2xl font-bold shadow-inner">
                TI
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0C447C]">Terminal Illness (TI) Claims</h2>
                <p className="text-xs text-slate-500">Accelerated benefit, doctor verification & C1-C14 activities</p>
              </div>
            </div>

            <div className="space-y-6">
              {groups.map((group) => (
                <div
                  key={`ti-${group.id}`}
                  className={`group rounded-2xl border border-slate-100 bg-gradient-to-r ${group.color} p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-800 group-hover:text-purple-900 transition-colors">
                      {group.title}
                    </h3>
                    <div className="flex gap-2">
                      {group.isPrimary && (
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-emerald-100 text-emerald-800 border border-emerald-200 animate-pulse">
                          Primary Workbench
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-[9px] font-semibold rounded border ${group.badgeColor}`}>
                        Group {group.num}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {group.desc}
                  </p>

                  {/* Sub-items list */}
                  <div className="mb-5 bg-white/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">Included Checklist & Activities:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <span className="text-purple-500 font-bold">✓</span>
                          <span className="truncate" title={item}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/ti?group=${group.id}`}
                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${group.btnColor}`}
                  >
                    Open TI Group {group.num} Workbench &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="mt-12 text-center text-xs text-slate-400">
          Neutrinos Examiner Portal Suite &bull; Accidental Death and Dismemberment (ADB) &bull; Terminal Illness Accruals (TIA)
        </p>
      </div>
    </div>
  )
}
