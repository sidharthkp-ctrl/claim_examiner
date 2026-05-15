export function ClaimHeader() {
  const fields = [
    { label: "Claim ID", value: "CLM-20260420-00123" },
    { label: "Claim type", value: "Death Claim" },
    { label: "Source", value: "BAU — Portal" },
    { label: "Status", value: "In Review", color: "#BA7517" },
    { label: "Verification", value: "Verified", color: "#3B6D11" },
    { label: "SLA remaining", value: "8 days", color: "#3B6D11" },
    { label: "Affected person", value: "John A. Smith" },
  ]

  return (
    <div className="bg-card border-b border-border px-4 py-2 flex gap-5 flex-wrap">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col gap-0.5">
          <span className="text-[10px] text-muted-foreground">{field.label}</span>
          <span
            className="text-[12px] font-medium"
            style={{ color: field.color || "inherit" }}
          >
            {field.value}
          </span>
        </div>
      ))}
    </div>
  )
}
