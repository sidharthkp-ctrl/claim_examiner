import type { ClaimsWorkbench } from '@neutrinos/claims-ui'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'claims-workbench': React.DetailedHTMLProps<
        React.HTMLAttributes<ClaimsWorkbench>,
        ClaimsWorkbench
      >
    }
  }
}

export {}
