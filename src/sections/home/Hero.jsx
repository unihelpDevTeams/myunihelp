import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  Flame,
  MessageCircle,
  ShoppingBag,
  Trophy,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CGPA = 4.38
const CGPA_MAX = 5
const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
const RING_OFFSET = RING_CIRCUMFERENCE * (1 - CGPA / CGPA_MAX)

const highlights = [
  { label: 'CGPA calculator', icon: Calculator },
  { label: 'Past questions', icon: BookOpen },
  { label: 'Campus community', icon: MessageCircle },
  { label: 'Daily Arena', icon: Trophy },
  { label: 'Marketplace', icon: ShoppingBag },
]

const appRows = [
  {
    label: 'Resources',
    value: 'Past questions',
    icon: BookOpen,
    tone: 'bg-violet-50 text-violet-700',
  },
  {
    label: 'Arena',
    value: 'Daily challenge',
    icon: Trophy,
    tone: 'bg-amber-50 text-amber-700',
    progress: 60,
  },
]

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background layers */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_0%_0%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(45rem_35rem_at_100%_20%,rgba(139,92,246,0.12),transparent_60%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-8 lg:py-20 xl:gap-16">
        {/* Copy */}
        <div className="animate-rise mx-auto flex min-w-0 max-w-2xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-indigo-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
            Official UniHelp product guide
          </p>

          <h1 className="mt-5 text-balance text-[2rem] font-black leading-[1.08] tracking-tight text-slate-950 min-[400px]:text-[2.35rem] sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
            Study, connect and manage campus life with UniHelp.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:max-w-lg xl:max-w-xl">
            Learn how UniHelp helps students access study tools, community spaces,
            marketplace listings, hostels, challenges and support.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/docs"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 motion-reduce:transform-none sm:w-auto"
            >
              Read the Docs
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              to="/download"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 motion-reduce:transform-none sm:w-auto"
            >
              Download App
          <ArrowDownToLine size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 w-full border-t border-slate-200/80 pt-6 lg:max-w-xl">
            <p className="text-sm font-semibold text-slate-500">
              Popular UniHelp areas
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              {highlights.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm sm:text-sm"
                >
                  <Icon size={14} className="text-indigo-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phone mockup (decorative) */}
        <div
          className="relative mx-auto flex w-full min-w-0 justify-center pb-4 lg:pb-0"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-400/25 blur-3xl sm:h-80 sm:w-80" />

          <div className="animate-float relative motion-reduce:animate-none">
            {/* Floating chips: hidden on very small screens to prevent overflow */}
            <div className="absolute -left-8 top-24 z-10 hidden items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-2.5 pr-4 shadow-xl shadow-slate-300/50 sm:flex lg:-left-12">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-50 text-orange-600">
                <Flame size={18} />
              </span>
              <span className="text-left">
                <span className="block text-xs font-medium text-slate-500">Streaks</span>
                <span className="block text-sm font-extrabold text-slate-950">Track progress</span>
              </span>
            </div>

            <div className="absolute -right-6 bottom-28 z-10 hidden items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-2.5 pr-4 shadow-xl shadow-slate-300/50 sm:flex lg:-right-10">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <BookOpen size={18} />
              </span>
              <span className="text-left">
                <span className="block text-xs font-medium text-slate-500">Resources</span>
                <span className="block text-sm font-extrabold text-slate-950">Study faster</span>
              </span>
            </div>

            {/* Device */}
            <div className="relative w-[15.5rem] rounded-[2.4rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-indigo-950/30 ring-1 ring-white/10 min-[400px]:w-[17rem] sm:w-[20rem] sm:rounded-[2.8rem] sm:p-2.5 lg:w-[21rem] xl:w-[22rem]">
              <div className="absolute left-1/2 top-3.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950 sm:top-4 sm:w-24" />

              <div className="overflow-hidden rounded-[1.9rem] bg-slate-50 sm:rounded-[2.25rem]">
                {/* Header */}
                <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-slate-950 px-5 pb-14 pt-10 text-white sm:px-6 sm:pt-11">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-indigo-100">Welcome back</p>
                      <p className="mt-0.5 text-base font-extrabold sm:text-lg">Your UniHelp</p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
                      <Brain size={19} />
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-semibold leading-snug text-indigo-50 sm:text-base">
                    Academic tools, community, marketplace and support.
                  </p>
                </div>

                {/* Body */}
                <div className="-mt-9 space-y-3 px-3.5 pb-4 sm:px-4 sm:pb-5">
                  {/* CGPA card */}
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-3.5 shadow-lg shadow-slate-300/50">
                    <div className="relative h-16 w-16 shrink-0">
                      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
                        <circle cx="32" cy="32" r={RING_RADIUS} fill="none" strokeWidth="6" className="stroke-indigo-100" />
                        <circle
                          cx="32"
                          cy="32"
                          r={RING_RADIUS}
                          fill="none"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={RING_CIRCUMFERENCE}
                          strokeDashoffset={RING_OFFSET}
                          className="stroke-indigo-600"
                        />
                      </svg>
                      <span className="absolute inset-0 grid place-items-center text-indigo-700">
                        <Calculator size={18} />
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-400">Current CGPA</p>
                      <p className="mt-0.5 text-2xl font-black leading-none text-slate-950 sm:text-3xl">
                        CGPA
                        <span className="ml-1 text-xs font-bold text-slate-400 sm:text-sm">
                          tracker
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Rows */}
                  {appRows.map((row) => {
                    const Icon = row.icon
                    return (
                      <div
                        key={row.label}
                        className="flex items-center gap-3 rounded-3xl bg-white p-3 shadow-lg shadow-slate-200/70"
                      >
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${row.tone}`}>
                          <Icon size={19} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-400">{row.label}</p>
                          <p className="truncate text-sm font-extrabold text-slate-950">{row.value}</p>
                          {row.progress ? (
                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-amber-100">
                              <div
                                className="h-full rounded-full bg-amber-500"
                                style={{ width: `${row.progress}%` }}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )
                  })}

                  {/* Tiles */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-3xl bg-indigo-600 p-3.5 text-white shadow-lg shadow-indigo-600/25 sm:p-4">
                      <MessageCircle size={19} />
                      <p className="mt-4 text-xs font-extrabold sm:mt-5 sm:text-sm">Community</p>
                    </div>
                    <div className="rounded-3xl bg-white p-3.5 text-slate-950 shadow-lg shadow-slate-200/80 sm:p-4">
                      <ShoppingBag size={19} className="text-violet-700" />
                      <p className="mt-4 text-xs font-extrabold sm:mt-5 sm:text-sm">Marketplace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
