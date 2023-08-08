export const LoginFooter = () => {
  const links = [
    { href: 'https://about.twitter.com', label: 'About' },
    { href: 'https://help.twitter.com', label: 'Help Center' },
    { href: 'https://twitter.com/tos', label: 'Terms of Service' },
    { href: 'https://twitter.com/privacy', label: 'Privacy Policy' },
    {
      href: 'https://support.twitter.com/articles/20170514',
      label: 'Cookie Policy',
    },
    {
      href: 'https://help.twitter.com/resources/accessibility',
      label: 'Accessibility',
    },
    {
      href: 'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo',
      label: 'Ads info',
    },
    { href: 'https://blog.twitter.com/', label: 'Blog' },
    { href: 'https://status.twitterstat.us/', label: 'Status' },
    { href: 'https://careers.twitter.com/', label: 'Careers' },
    {
      href: 'https://about.twitter.com/press/brand-assets',
      label: 'Brand Resources',
    },
    {
      href: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise',
      label: 'Advertising',
    },
    { href: 'https://marketing.twitter.com/', label: 'Marketing' },
    {
      href: 'https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness',
      label: 'Twitter for Business',
    },
    { href: 'https://developer.twitter.com/', label: 'Developers' },
    { href: 'https://twitter.com/i/directory/profiles', label: 'Directory' },
    { href: 'https://twitter.com/settings', label: 'Settings' },
  ]

  return (
    <nav
      aria-label="footer"
      role="navigation"
      className="w-full flex flex-wrap items-baseline justify-center p-4 space-x-4"
    >
      {links.map(({ href, label }) => (
        <a
          key={`${href}${label}`}
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

export default LoginFooter
