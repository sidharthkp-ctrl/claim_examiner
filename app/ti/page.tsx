"use client"

import { useEffect, useState } from 'react'
import '@neutrinos/claims-ui'

export default function TiExaminerPage() {
  const [mounted, setMounted] = useState(false)
  const [group, setGroup] = useState('workbench')

  useEffect(() => {
    setMounted(true)
    const params = new URLSearchParams(window.location.search)
    const g = params.get('group') || 'workbench'
    setGroup(g)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="h-screen overflow-hidden">
      <claims-workbench claim-product="ti" claim-group={group} />
    </div>
  )
}
