import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  Download as DownloadIcon,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.zenithdev.unihelp'
const apkUrl = 'https://expo.dev/artifacts/eas/XH3G5jnM6V6nBysql_o7Kxsn7MkTovMH4BeMV5mNKd4.apk'

const benefits = [
  'Study tools, AI help and community features in one place',
  'Keep learning resources close, even when your day gets busy',
  'Built for students who want a simpler campus experience',
]

const features = [
  { icon: BookOpen, title: 'Study tools', text: 'Learning resources and study helpers, close at hand whenever you sit down to work.' },
  { icon: Sparkles, title: 'AI help', text: 'Ask questions and get a hand with coursework when you get stuck.' },
  { icon: Users, title: 'Student communities', text: 'Connect with other students and stay part of what is happening on campus.' },
  { icon: ShoppingBag, title: 'Marketplace', text: 'Find what other students are selling, and sell what you no longer need.' },
]

const steps = [
  { title: 'Download the APK', text: 'Tap Download APK. Your browser may ask you to confirm the download.' },
  { title: 'Allow the install', text: 'Open the file. If Android asks, allow installs from the app you used to download it.' },
  { title: 'Open UniHelp', text: 'Tap Install, then Open. UniHelp will be on your home screen and in your app drawer.' },
]

const faqs = [
  {
    q: 'Should I choose the APK or Google Play?',
    a: 'Google Play is the easiest option if your phone supports it, because updates arrive automatically. The APK is a good choice if Play is not available on your phone or you would rather install directly.',
  },
  {
    q: 'Why does Android show a warning when I open the APK?',
    a: 'Android warns you about any app installed from outside Google Play. If you downloaded the APK from this page, you can continue with the install.',
  },
  {
    q: 'How do I update UniHelp after installing the APK?',
    a: 'Come back to this page, download the latest APK and install it over your current version. Installs from Google Play update on their own.',
  },
]

const primaryBtn =
  'inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 text-base font-black text-slate-950 shadow-xl shadow-emerald-950/30 transition duration-200 hover:bg-emerald-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-indigo-950 sm:w-auto'

const secondaryBtn =
  'inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/25 px-7 text-base font-black text-white transition duration-200 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-indigo-950 sm:w-auto'

const PhoneMock = () => (
  <div
    className="relative mx-auto aspect-[9/19] w-full max-w-[19rem] rounded-[2.75rem] border border-white/20 bg-slate-900 p-[0.6rem] shadow-2xl shadow-black/50 lg:max-w-[21rem]"
    aria-hidden="true"
  >
    <div className="flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900">
      <div className="flex items-center justify-between px-6 pt-4 text-[0.7rem] font-bold">
        <span>9:41</span>
        <span className="h-4 w-16 rounded-full bg-slate-900" />
        <span className="flex items-end gap-0.5">
          <span className="h-1.5 w-1 rounded-sm bg-slate-900" />
          <span className="h-2 w-1 rounded-sm bg-slate-900" />
          <span className="h-2.5 w-1 rounded-sm bg-slate-900" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-0 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-500">Good morning</p>
            <p className="mt-0.5 text-xl font-black leading-tight">What are you studying today?</p>
          </div>
          <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
            <Bell size={16} />
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 text-xs text-slate-400 ring-1 ring-slate-200">
          <Search size={15} />
          Search courses, people, items
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            { icon: BookOpen, label: 'Study', tone: 'bg-indigo-100 text-indigo-700' },
            { icon: Sparkles, label: 'AI help', tone: 'bg-emerald-100 text-emerald-700' },
            { icon: Users, label: 'Community', tone: 'bg-amber-100 text-amber-700' },
            { icon: ShoppingBag, label: 'Market', tone: 'bg-rose-100 text-rose-700' },
          ].map(({ icon: Icon, label, tone }) => (
            <div key={label} className={`rounded-2xl p-3 ${tone}`}>
              <Icon size={20} />
              <p className="mt-4 text-xs font-black">{label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-indigo-600 p-3.5 text-white">
          <div className="flex items-center gap-2 text-xs font-black">
            <Sparkles size={14} />
            Ask UniHelp
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-white/40" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/40" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/25" />
          </div>
        </div>

        <div className="mt-auto flex items-center justify-around border-t border-slate-200 py-3.5">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  </div>
)

const Download = () => {
  const heroCtaRef = useRef(null)
  const endCtaRef = useRef(null)
  const [heroPast, setHeroPast] = useState(false)
  const [endReached, setEndReached] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroPast(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    const endObserver = new IntersectionObserver(([entry]) => {
      setEndReached(entry.isIntersecting || entry.boundingClientRect.top < 0)
    })

    if (heroCtaRef.current) heroObserver.observe(heroCtaRef.current)
    if (endCtaRef.current) endObserver.observe(endCtaRef.current)

    return () => {
      heroObserver.disconnect()
      endObserver.disconnect()
    }
  }, [])

  const showBar = heroPast && !endReached

  return (
    <main>
      <style>{`
        @keyframes uh-rise {
          from { opacity: 0; transform: translateY(1.5rem); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .uh-rise { animation: uh-rise 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both; }
          .uh-rise-phone { animation: uh-rise 900ms cubic-bezier(0.2, 0.7, 0.2, 1) 180ms both; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo-950 pt-14 text-white sm:pt-20 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-36 h-80 w-80 rounded-full border-[34px] border-indigo-400/10 sm:h-[26rem] sm:w-[26rem]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-52 -left-24 h-96 w-96 rounded-full border-[46px] border-emerald-400/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
          <div className="uh-rise max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-indigo-100">
              <Smartphone size={16} aria-hidden="true" />
              UniHelp for Android
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,9vw,4.9rem)] font-black leading-[1.02] tracking-tight [text-wrap:balance]">
              Your campus life, in your pocket.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-indigo-100/80 sm:text-lg sm:leading-8">
              Download UniHelp for faster access to study tools, student communities, marketplace finds and the support you need on campus.
            </p>

            <div ref={heroCtaRef} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={apkUrl} download rel="noopener" className={primaryBtn}>
                <DownloadIcon size={20} aria-hidden="true" />
                Download APK
              </a>
              <a href={playStoreUrl} target="_blank" rel="noreferrer" className={secondaryBtn}>
                <ArrowUpRight size={20} aria-hidden="true" />
                Get it on Google Play
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-indigo-200/70">
              Android only. Get the APK directly, or use Google Play on supported devices.
            </p>
          </div>

          <div className="uh-rise-phone relative mx-auto h-[26rem] w-full max-w-[19rem] overflow-hidden sm:h-[30rem] lg:h-auto lg:max-w-none lg:overflow-visible">
            <PhoneMock />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-indigo-950 to-transparent lg:hidden"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Benefits + features */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl [text-wrap:balance]">
              Made for the rhythm of student life.
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-base leading-7 text-slate-700">
                  <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-slate-950 pt-5">
                <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install steps */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl [text-wrap:balance]">
            Install the APK in three steps.
          </h2>

          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 md:block">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-indigo-600 text-lg font-black text-white">
                  {index + 1}
                </span>
                <div className="md:mt-5">
                  <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex gap-3 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm leading-6 text-indigo-950 sm:p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <p>
              Only install UniHelp from this page or from Google Play. Android may show a warning for apps installed outside Play, which is expected for APK files.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Questions before you install</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-3 text-left text-base font-bold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 flex-none text-slate-500 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-4 pr-9 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="relative overflow-hidden bg-indigo-950 py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border-[30px] border-indigo-400/10" aria-hidden="true" />
        <div ref={endCtaRef} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl [text-wrap:balance]">Get UniHelp on your phone.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100/80 sm:text-lg">
            Study tools, student communities and the campus marketplace, all in one app.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={apkUrl} download rel="noopener" className={primaryBtn}>
              <DownloadIcon size={20} aria-hidden="true" />
              Download APK
            </a>
            <a href={playStoreUrl} target="_blank" rel="noreferrer" className={secondaryBtn}>
              <ArrowUpRight size={20} aria-hidden="true" />
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky download bar */}
      <div
        aria-hidden={!showBar}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-indigo-950/95 px-4 pt-3 backdrop-blur transition duration-300 md:hidden ${
          showBar ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
        }`}
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={apkUrl}
            download
            rel="noopener"
            tabIndex={showBar ? 0 : -1}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 text-sm font-black text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
          >
            <DownloadIcon size={18} aria-hidden="true" />
            Download APK
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={showBar ? 0 : -1}
            className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-white/25 px-4 text-sm font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-950"
          >
            Google Play
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Download