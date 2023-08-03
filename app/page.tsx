import LoginBanner from '@/components/screens/home/login-banner'
import LoginFooter from '@/components/screens/home/login-footer'
import LoginMain from '@/components/screens/home/login-main'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: `${siteConfig.name} - It's what's happening`,
}

export default function LoginPage() {
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
