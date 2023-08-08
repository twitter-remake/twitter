/** @type {import('next').NextConfig} */

const ContentSecurityPolicyReportOnly = `
  script-src
  accounts.google.com/gsi/client; frame-src
  accounts.google.com/gsi; connect-src
  accounts.google.com/gsi;
`

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-ReportOnly',
            value: ContentSecurityPolicyReportOnly.replace(
              /\s{2,}/g,
              ' '
            ).trim(),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
