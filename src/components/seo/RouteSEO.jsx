import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoPages, siteUrl } from '../../data/seoMetadata'

const socialImage = `${siteUrl('/')}/favicon.png`

const setMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function RouteSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const route = pathname.replace(/\/+$/, '') || '/'
    const page = seoPages[route]
    if (!page) return

    const canonical = siteUrl(route)
    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'UniHelp')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', socialImage)
    setMeta('property', 'og:image:alt', 'UniHelp logo')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:image', socialImage)

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    let schemaScript = document.head.querySelector('#unihelp-page-structured-data')
    if (page.schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.id = 'unihelp-page-structured-data'
        schemaScript.type = 'application/ld+json'
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(page.schema)
    } else {
      schemaScript?.remove()
    }
  }, [pathname])

  return null
}