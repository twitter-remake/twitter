import { AuthProviderButton } from '@/components/auth/AuthProviderButton'
import Icon from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const LoginMain = () => {
  return (
    <section className="min-w-[45vw] flex bg-black items-center p-2 md:p-4">
      <div className="flex flex-col p-3 md:p-5 space-y-2">
        <Icon
          name="twitter"
          className="text-secondary-light-200 pb-4 w-14 h-14"
        />
        <span className="font-twitter-chirp-extended font-black py-12 text-secondary-light text-4xl md:text-6xl">
          Happening now
        </span>
        <span className="font-twitter-chirp-extended font-black pb-6 text-secondary-light text-2xl md:text-3xl">
          Join Twitter today.
        </span>

        <AuthProviderButton provider="google" variant="signup" />
        <AuthProviderButton provider="github" variant="signup" />

        <div className="max-w-xs flex items-center justify-between space-x-4">
          <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
          <span className="text-secondary-light-100">or</span>
          <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
        </div>

        <Button className="w-[320px]">Create account</Button>
        <span className="max-w-xs text-[11px] leading-3 text-secondary-light-400">
          By signing up, you agree to the{' '}
          <span className="text-primary-blue cursor-pointer hover:underline">
            Terms of Service
          </span>{' '}
          and{' '}
          <span className="text-primary-blue cursor-pointer hover:underline">
            Privacy Policy
          </span>
          , including{' '}
          <span className="text-primary-blue cursor-pointer hover:underline">
            Cookie Use
          </span>
          .
        </span>

        <span className="pt-12 pb-2 text-secondary-light-100 text-lg font-semibold">
          Already have an account?
        </span>
        <Link href="/i/flow/signin">
          <Button className="w-[320px]" variant="outline-primary">
            Sign in
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default LoginMain
