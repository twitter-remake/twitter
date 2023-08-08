import Login from '@/components/screens/home/login'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: `${siteConfig.name} - It's what's happening`,
}

export default function LoginPage() {
  return <Login />
}
