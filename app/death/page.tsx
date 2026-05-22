"use client"

import { useEffect, useState } from 'react'
import '@neutrinos/claims-ui'

export default function DeathExaminerPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="h-screen overflow-hidden">
      <claims-workbench claim-product="death" />
    </div>
  )
}
