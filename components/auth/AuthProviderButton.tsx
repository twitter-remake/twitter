'use client'
import { auth } from '@/lib/firebase/firebase'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useMemo } from 'react'
import { Button } from '../ui/button'

type AuthProviderButtonProps = {
  provider: keyof typeof providers
  variant: 'signin' | 'signup'
}

const providers = {
  google: {
    name: 'Google',
    oauthProvider: new GoogleAuthProvider(),
  },
  github: {
    name: 'GitHub',
    oauthProvider: new GithubAuthProvider(),
  },
}

export const AuthProviderButton = ({
  provider,
  variant,
}: AuthProviderButtonProps) => {
  const _provider = useMemo(() => providers[provider], [provider])

  async function handleAuthentication() {
    try {
      await signInWithPopup(auth, _provider.oauthProvider)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      className="!bg-white hover:!bg-secondary-light-200 w-[320px]"
      variant="secondary"
      icon={provider}
      onClick={handleAuthentication}
    >
      Sign {variant === 'signin' ? 'in' : 'up'} with {_provider.name}
    </Button>
  )
}
