import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../../assets/images/logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]

const ctaTarget = '/docs'

const scrollToHash = (hash) => {
  if (!hash) return
  window.requestAnimationFrame(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (to) => {
    setIsOpen(false)
    const hash = to.includes('#') ? to.slice(to.indexOf('#')) : ''
    scrollToHash(hash)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
          aria-label="UniHelp home">
          <img
            src={logo}
            alt="UniHelp logo"
            className="h-15 w-15"/>
          <span className="text-xl font-bold tracking-tight text-slate-950">UniHelp</span></Link>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => handleNavClick(item.to)}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-700 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to={ctaTarget}
          onClick={() => handleNavClick(ctaTarget)}
          className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 md:inline-flex"
        >
          Open Docs
          <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-x-0 top-18 z-40 transition-opacity duration-300`}
      >
        <div className="mx-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-2 shadow-2xl shadow-slate-950/15 backdrop-blur-xl">
          <div className={`grid gap-1 transition duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}>
            {[...navItems, { label: 'Open Docs', to: ctaTarget, cta: true }].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`flex min-h-14 items-center justify-between rounded-2xl px-4 text-base font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  item.cta ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-700'
                }`}
              >
                {item.label}
                {item.cta && <ArrowRight size={18} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
