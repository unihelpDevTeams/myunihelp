import { BookOpen, CircleCheck, Lock, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const CampusTag = ({ children }) => (
  <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
    {children}
  </span>
)

const previewRows = [
  { icon: BookOpen, title: 'Academic resources', text: 'Lecture notes, past questions and formula tools' },
  { icon: ShoppingBag, title: 'Campus marketplace', text: 'Student listings, hostels, reviews and sponsorship' },
  { icon: Lock, title: 'Premium benefits', text: 'Offline library, voice messages and higher upload limits' },
  { icon: CircleCheck, title: 'Privacy choices', text: 'Clear information about account data and permissions' },
]

const FinalCTA = () => {
  return (
    <section id="get-the-app" className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl bg-indigo-700 p-6 text-white shadow-xl shadow-indigo-950/15 sm:p-10 lg:rounded-[2rem] lg:p-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="max-w-xl text-balance text-[1.75rem] font-extrabold leading-[1.15] tracking-tight min-[400px]:text-[2rem] sm:text-4xl lg:text-[2.75rem]">
              Explore UniHelp with confidence.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">
              Read clear guides for features, Premium, privacy, terms, uploads and account controls.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/docs"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-indigo-700 transition duration-200 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
              >
                Open documentation
              </Link>
              <Link
                to="/faq"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
              >
                Read FAQ
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md space-y-3 lg:max-w-none" aria-hidden="true">
            {previewRows.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 shadow-lg shadow-indigo-950/20 sm:p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Icon size={21} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{text}</p>
                </div>
                <CampusTag>Guide</CampusTag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
