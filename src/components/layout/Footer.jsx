import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const footerGroups = [
  {
    title: 'Documentation',
    links: [
      { label: 'Product Docs', to: '/docs' },
      { label: 'Features', to: '/docs#features' },
      { label: 'Privacy Guide', to: '/docs#privacy' },
      { label: 'Premium & Payments', to: '/docs#premium' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Permissions', to: '/docs#permissions' },
      { label: 'Uploads', to: '/docs#uploads' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

const Footer = () => {
  return (
    <footer id="support" className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950">
            <img src={logo} alt="UniHelp logo" className="h-15 w-15" />
            <span className="text-xl font-bold">UniHelp Docs</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Official guides for UniHelp features, Premium, privacy, support and account controls.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-300 transition hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        &copy; 2026 UniHelp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
