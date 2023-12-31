import { siteConfig } from '@/config/site'
import 'css/fonts.css'
import 'css/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
  dialog,
}: {
  children: React.ReactNode
  dialog: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="bg-black">
        {children}
        {dialog}
      </body>
    </html>
  )
}
