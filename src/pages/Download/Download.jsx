import { ArrowDownToLine, ArrowUpRight, Check, Download as DownloadIcon, Smartphone } from 'lucide-react'

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.zenithdev.unihelp'
const apkUrl = 'https://expo.dev/artifacts/eas/XH3G5jnM6V6nBysql_o7Kxsn7MkTovMH4BeMV5mNKd4.apk'

const benefits = [
  'Study tools, AI help and community features in one place',
  'Keep learning resources close, even when your day gets busy',
  'Built for students who want a simpler campus experience',
]

const Download = () => {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-indigo-950/10 bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full border-[34px] border-indigo-500/20" aria-hidden="true" />
        <div className="absolute -bottom-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border-[46px] border-emerald-400/10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-3xl animate-rise">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-300">UniHelp for Android</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">
              Your campus life, in your pocket.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Download UniHelp for faster access to study tools, student communities, marketplace finds and the support you need on campus.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={apkUrl}
                download
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-emerald-400 px-6 text-base font-black text-slate-950 shadow-xl shadow-emerald-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              >
                <DownloadIcon size={19} aria-hidden="true" />
                Download APK
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 text-base font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              >
                <ArrowUpRight size={19} aria-hidden="true" />
                Get it on Google Play
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">Android APK · Google Play available for supported devices</p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-indigo-500 to-indigo-800 p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-indigo-700">
                    <Smartphone size={24} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-indigo-100">UniHelp</span>
                </div>
                <div className="mt-20 sm:mt-28">
                  <p className="text-sm font-bold text-indigo-200">Everything students need</p>
                  <p className="mt-2 text-3xl font-black leading-tight text-white">Learn. Connect. Get ahead.</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-indigo-100">
                  <ArrowDownToLine size={17} aria-hidden="true" />
                  Ready when you are
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-indigo-600">One app, more momentum</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Made for the rhythm of student life.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="border-t-2 border-slate-950 pt-4">
                <Check className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold leading-6 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Download