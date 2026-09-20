import { BookOpen, Calculator, CheckCircle2, Compass, MessagesSquare, ShoppingBag, Trophy } from 'lucide-react'

const categories = [
  { name: 'Learn', text: 'Notes, past questions and academic resources.', icon: BookOpen, tone: 'bg-indigo-50 text-indigo-700' },
  { name: 'Calculate', text: 'GPA, CGPA and practical study tools.', icon: Calculator, tone: 'bg-violet-50 text-violet-700' },
  { name: 'Connect', text: 'Student conversations and community spaces.', icon: MessagesSquare, tone: 'bg-sky-50 text-sky-700' },
  { name: 'Discover', text: 'Campus updates, services and useful information.', icon: Compass, tone: 'bg-emerald-50 text-emerald-700' },
  { name: 'Compete', text: 'Challenges, streaks and achievement moments.', icon: Trophy, tone: 'bg-amber-50 text-amber-700' },
  { name: 'Buy & Sell', text: 'A student-focused marketplace experience.', icon: ShoppingBag, tone: 'bg-rose-50 text-rose-700' },
]

const ProductOverview = () => {
  return (
    <section id="overview" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-indigo-600">Product Overview</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">One app. Many parts of student life.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              UniHelp is designed as a practical mobile companion for the moments students repeat every week: studying, tracking academic progress, finding support, joining conversations and exploring campus life.
            </p>
            <div className="mt-8 grid gap-3">
              {['Academic tools and learning resources in one flow', 'Community, marketplace and campus discovery built around students', 'A focused mobile experience that can grow with the product'].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-violet-100 to-slate-100 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
              <div className="grid border-b border-slate-200 bg-slate-950 text-white sm:grid-cols-[1fr_auto]">
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-200">Student Life Hub</p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">A connected product system, not a collection of pages.</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    Each UniHelp area supports a real student need while staying part of one coherent mobile app.
                  </p>
                </div>
                <div className="hidden min-w-44 border-l border-white/10 p-7 sm:block">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Focus</p>
                  <p className="mt-3 text-3xl font-black">Mobile first</p>
                </div>
              </div>

              <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
                {categories.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={item.name} className="group bg-white p-5 transition duration-300 hover:bg-slate-50 sm:p-6">
                      <div className="flex items-start gap-4">
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${item.tone}`}>
                          <Icon size={21} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-lg font-black text-slate-950">{item.name}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="grid gap-4 bg-slate-50 p-5 sm:grid-cols-3 sm:p-6">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">Design</p>
                  <p className="mt-2 text-sm font-bold text-slate-800">Clean, focused, student-ready</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">Scope</p>
                  <p className="mt-2 text-sm font-bold text-slate-800">Academic, campus and community</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">Experience</p>
                  <p className="mt-2 text-sm font-bold text-slate-800">Built around everyday student tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview
