export const LoginFooter = () => {
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
      className="w-full flex flex-wrap items-baseline justify-center p-4 space-x-4"
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

export default LoginFooter
