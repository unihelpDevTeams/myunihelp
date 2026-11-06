import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_ORIGIN = 'https://docs.myunihelp.com.ng'
const SOCIAL_IMAGE = `${SITE_ORIGIN}/favicon.png`

const pageMetadata = {
  '/': {
    title: 'UniHelp | Student Study Tools, Campus Community & Support',
    description: 'Learn how UniHelp helps students study, connect with classmates, explore campus services and manage everyday student life.',
    schemaType: 'SoftwareApplication',
  },
  '/docs': {
    title: 'UniHelp Product Guide | Features, Study Tools & Account Help',
    description: 'Explore the official UniHelp guide to study resources, AI Study Help, CBT practice, challenges, communities, marketplace, hostels and account controls.',
    schemaType: 'TechArticle',
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

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const upsertStructuredData = (schema) => {
  let script = document.head.querySelector('#unihelp-page-structured-data')
  if (!script) {
    script = document.createElement('script')
    script.id = 'unihelp-page-structured-data'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(schema)
}

export default function RouteSEO() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/'
    const page = pageMetadata[pathname] || {
      title: 'UniHelp Documentation | Official Student Guides',
      description: 'Official guides and support information for UniHelp student features.',
    }
    const canonical = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'UniHelp Documentation',
      url: `${SITE_ORIGIN}/`,
      inLanguage: 'en-NG',
    }
    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': page.schemaType || 'WebPage',
      name: page.title,
      description: page.description,
      url: canonical,
      inLanguage: 'en-NG',
      isPartOf: { '@type': 'WebSite', name: website.name, url: website.url },
    }
    const schema = pathname === '/'
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            website,
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
        }
      : pageSchema

    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'UniHelp')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', SOCIAL_IMAGE)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:image', SOCIAL_IMAGE)

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical
    upsertStructuredData(schema)
  }, [location.pathname])

  return null
}
