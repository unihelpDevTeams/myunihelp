import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { seoPages, siteUrl } from './src/data/seoMetadata.js'

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const replaceMeta = (html, attribute, key, content) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`<meta\\s+${attribute}="${escapedKey}"\\s+content="[^"]*"\\s*\\/?>`, 'i')
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n  </head>`)
}

const createRouteHtml = (html, pathname, page) => {
  let output = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(page.title)}</title>`)
  output = replaceMeta(output, 'name', 'description', page.description)
  output = replaceMeta(output, 'property', 'og:title', page.title)
  output = replaceMeta(output, 'property', 'og:description', page.description)
  output = replaceMeta(output, 'property', 'og:url', siteUrl(pathname))
  output = replaceMeta(output, 'name', 'twitter:title', page.title)
  output = replaceMeta(output, 'name', 'twitter:description', page.description)
  output = output.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${siteUrl(pathname)}" />`)

  if (page.schema) {
    const jsonLd = JSON.stringify(page.schema).replaceAll('<', '\\u003c')
    output = output.replace('</head>', `  <script id="unihelp-page-structured-data" type="application/ld+json">${jsonLd}</script>\n  </head>`)
  }

  return output
}

const routeHtmlPlugin = () => {
  let outputDir

  return {
    name: 'unihelp-route-html',
    apply: 'build',
    configResolved(config) {
      outputDir = resolve(config.root, config.build.outDir)
    },
    async writeBundle() {
      const indexHtml = await readFile(resolve(outputDir, 'index.html'), 'utf8')
      await writeFile(resolve(outputDir, 'index.html'), createRouteHtml(indexHtml, '/', seoPages['/']))

      await Promise.all(Object.entries(seoPages)
        .filter(([pathname]) => pathname !== '/')
        .map(async ([pathname, page]) => {
          const outputPath = resolve(outputDir, pathname.slice(1), 'index.html')
          await mkdir(dirname(outputPath), { recursive: true })
          await writeFile(outputPath, createRouteHtml(indexHtml, pathname, page))
        }))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), routeHtmlPlugin()],
})
