"use client"

import { useEffect, useState } from 'react'
import "@neutrinos/claims-ui"

export default function ClaimsWorkbenchPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <claims-workbench />
}
