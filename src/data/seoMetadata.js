const siteOrigin = 'https://docs.myunihelp.com.ng'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UniHelp Documentation',
  url: `${siteOrigin}/`,
  inLanguage: 'en-NG',
}

export const seoPages = {
  '/': {
    title: 'UniHelp | Student Study Tools, Campus Community & Support',
    description: 'Learn how UniHelp helps students study, connect with classmates, explore campus services and manage everyday student life.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        websiteSchema,
        {
          '@type': 'SoftwareApplication',
          name: 'UniHelp',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Android',
          description: 'Student study tools, learning resources, campus community and support.',
          url: 'https://myunihelp.com.ng',
          installUrl: 'https://play.google.com/store/apps/details?id=com.zenithdev.unihelp',
        },
      ],
    },
  },
  '/docs': {
    title: 'UniHelp Product Guide | Features, Study Tools & Account Help',
    description: 'Explore the official UniHelp guide to study resources, AI Study Help, CBT practice, challenges, communities, marketplace, hostels and account controls.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'UniHelp product guide',
      description: 'Official guide to UniHelp features, study tools, community, marketplace and account controls.',
      url: `${siteOrigin}/docs`,
      inLanguage: 'en-NG',
      isPartOf: { '@type': 'WebSite', name: websiteSchema.name, url: websiteSchema.url },
      author: { '@type': 'Organization', name: 'UniHelp' },
    },
  },
  '/faq': {
    title: 'UniHelp FAQ | Accounts, Study Tools, Premium & Support',
    description: 'Find answers to common questions about UniHelp accounts, study tools, AI Study Help, messages, marketplace, Premium and support.',
  },
  '/download': {
    title: 'Use UniHelp on the Web or Android | UniHelp',
    description: 'Continue to UniHelp on the web or find the Android app on Google Play.',
  },
  '/privacy': {
    title: 'Privacy Policy | UniHelp',
    description: 'Learn what information UniHelp uses, why it is needed, and how to manage your privacy and account choices.',
  },
  '/terms': {
    title: 'Terms of Service | UniHelp',
    description: 'Review the terms for using UniHelp study tools, communities, marketplace and other student services.',
  },
  '/delete-account': {
    title: 'Delete Your UniHelp Account | Account Support',
    description: 'Learn how to request deletion of your UniHelp account and understand what happens to account data and subscriptions.',
  },
}

export const siteUrl = (pathname) => `${siteOrigin}${pathname === '/' ? '/' : pathname}`