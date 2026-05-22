import Link from 'next/link'

export default function PortalHomePage() {
  return (
    <main className="min-h-full flex flex-col items-center justify-center bg-[#eef3f8] px-6 py-12">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#185FA5] mb-2">
            Neutrinos
          </p>
          <h1 className="text-3xl font-semibold text-[#0C447C] tracking-tight">
            Claims Examiner Portals
          </h1>
          <p className="mt-3 text-[15px] text-[#4a5568] max-w-xl mx-auto leading-relaxed">
            Select a workbench to review submitted claims. Death and Terminal Illness share the same
            page structure; fields and examiner activities differ by claim type.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Link
            href="/death"
            className="group block rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-sm hover:shadow-md hover:border-[#185FA5]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E6F1FB] text-[#185FA5] flex items-center justify-center text-xl font-semibold mb-4">
              D
            </div>
            <h2 className="text-xl font-semibold text-[#0C447C] group-hover:text-[#185FA5]">
              Death Claim Examiner
            </h2>
            <p className="mt-2 text-[13px] text-[#718096] leading-relaxed">
              Beneficiary and death-event workflows: manner of death, funeral assignment, ADB, death
              verification, and D-01 through D-31 activities.
            </p>
            <span className="mt-6 inline-flex items-center text-[13px] font-medium text-[#185FA5]">
              Open workbench →
            </span>
          </Link>

          <Link
            href="/ti"
            className="group block rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-sm hover:shadow-md hover:border-[#534AB7]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EEEDFE] text-[#534AB7] flex items-center justify-center text-xl font-semibold mb-4">
              TI
            </div>
            <h2 className="text-xl font-semibold text-[#0C447C] group-hover:text-[#534AB7]">
              Terminal Illness Examiner
            </h2>
            <p className="mt-2 text-[13px] text-[#718096] leading-relaxed">
              Policy owner and quote-driven workflows: mandatory medical review, life expectancy,
              physician verification, and T-01 through T-29 activities.
            </p>
            <span className="mt-6 inline-flex items-center text-[13px] font-medium text-[#534AB7]">
              Open workbench →
            </span>
          </Link>
        </div>

        <p className="mt-8 text-center text-[11px] text-[#a0aec0]">
          Submission portal reference: Death (S1–S15) · Terminal Illness (C1–C14)
        </p>
      </div>
    </main>
  )
}
