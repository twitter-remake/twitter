import IconComponent from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Image from 'next/image'

export const metadata = {
  title: `${siteConfig.name} - It's what's happening`,
}

export default function LoginPage() {
  return (
    <main className="grid grid-rows-[1fr,auto] bg-black min-h-screen">
      <div className="flex flex-col items-center lg:flex-row-reverse lg:items-stretch">
        <section className="min-w-[45vw] flex bg-black items-center p-4">
          <LoginMain />
        </section>
        <section className="relative w-full min-h-[45vh] bg-blue flex justify-center items-center">
          <Image
            src="/landing/whats_happening.png"
            priority
            fill
            sizes="100%"
            draggable={false}
            className="object-cover object-center"
            alt="Twitter banner"
          />
          <i className="absolute">
            <IconComponent icon="twitter" className="text-[#fff] w-96 h-96" />
          </i>
        </section>
      </div>
      <LoginFooter />
    </main>
  )
}

const LoginMain = () => {
  return (
    <div className="flex flex-col p-5 space-y-2">
      <IconComponent
        icon="twitter"
        className="text-secondary-light-200 pb-4 w-14 h-14"
      />
      <span className="font-twitter-chirp-extended font-black py-12 text-secondary-light-100 text-6xl">
        Happening now
      </span>
      <span className="font-twitter-chirp-extended font-black pb-6 text-secondary-light-100 text-3xl">
        Join Twitter today.
      </span>

      <Button className="w-[320px]" variant="secondary" icon="google">
        Sign up with Google
      </Button>
      <Button className="w-[320px]" variant="secondary" icon="github">
        Sign up with GitHub
      </Button>

      <div className="max-w-xs flex items-center justify-between space-x-4">
        <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
        <span className="text-secondary-light-100">or</span>
        <div className="w-full h-[1px] bg-secondary-light-400 bg-opacity-50"></div>
      </div>

      <Button className="w-[320px]">Create account</Button>
      <span className="max-w-xs text-xs text-secondary-light-400">
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

      <span className="pt-12 pb-2 text-secondary-light-100 text-base font-semibold">
        Already have an account?
      </span>
      <Button className="w-[320px]" variant="outline">
        Sign in
      </Button>
    </div>
  )
}

const LoginFooter = () => {
  const links = [
    { href: 'https://about.twitter.com', label: 'About' },
    { href: 'https://help.twitter.com', label: 'Help' },
    { href: 'https://twitter.com/tos', label: 'Terms of Service' },
    { href: 'https://twitter.com/tos', label: 'Privacy Policy' },
    { href: 'https://twitter.com/tos', label: 'Cookie Policy' },
    { href: 'https://twitter.com/tos', label: 'Accessibility' },
    { href: 'https://twitter.com/tos', label: 'Ads info' },
    { href: 'https://twitter.com/tos', label: 'Blog' },
    { href: 'https://twitter.com/tos', label: 'Status' },
    { href: 'https://twitter.com/tos', label: 'Careers' },
    { href: 'https://twitter.com/tos', label: 'Brand Resources' },
    { href: 'https://twitter.com/tos', label: 'Advertising' },
    { href: 'https://twitter.com/tos', label: 'Marketing' },
    { href: 'https://twitter.com/tos', label: 'Twitter for Business' },
    { href: 'https://twitter.com/tos', label: 'Developers' },
    { href: 'https://twitter.com/tos', label: 'Directory' },
    { href: 'https://twitter.com/tos', label: 'Settings' },
  ]

  return (
    <nav
      aria-label="footer"
      role="navigation"
      className="flex flex-wrap items-baseline justify-center p-4 space-x-4"
    >
      {links.map(({ href, label }) => (
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
          href={href}
        >
          <span className="text-sm text-secondary-light-400 hover:underline">
            {label}
          </span>
        </a>
      ))}
      <span className="text-sm text-secondary-light-400">
        © 2023 FuckElon Corp.
      </span>
    </nav>
  )
}
