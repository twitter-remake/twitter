'use client'
import { auth } from '@/lib/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import LoginBanner from './login-banner'
import LoginFooter from './login-footer'
import LoginMain from './login-main'

export default function Login() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user', user)
        const idToken = await user.getIdToken()
        console.log('idToken', idToken)
        await signOut(auth)
      } else {
        console.log('no user')
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <main className="grid grid-rows-[1fr,auto] bg-black min-h-screen">
      <div className="flex flex-col items-center lg:flex-row-reverse lg:items-stretch">
        <LoginMain />
        <LoginBanner />
      </div>
      <LoginFooter />
    </main>
  )
}
