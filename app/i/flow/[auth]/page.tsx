'use client'
import DialogLoginFlow from '@/components/ui/flow/dialog-login-flow'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

type AuthFlowDialogParams = {
  auth: 'signin' | 'signup'
}

type AuthFlowDialogProps = {
  params: AuthFlowDialogParams
}

export default function AuthFlowDialog({ params }: AuthFlowDialogProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (params.auth === 'signin') {
    return <DialogLoginFlow open />
  }

  notFound()
}
