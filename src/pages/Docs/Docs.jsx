import {
  Bot,
  CheckCircle2,
  FileText,
  GraduationCap,
  Lock,
  MessageCircle,
  Shield,
  ShoppingBag,
  Sparkles,
  Trophy,
  UserRound,
} from 'lucide-react'
import {
  accountSecurity,
  featureGroups,
  guideIntro,
  permissionInventory,
  premiumDetails,
  privacyCategories,
  serviceProviders,
  sponsorshipDetails,
  uploadRules,
} from '../../data/productContent'

const iconMap = {
  'Account & Profile': UserRound,
  'Study Tools': GraduationCap,
  'AI Study Help': Bot,
  'Challenge Arena': Trophy,
  'Community & Messages': MessageCircle,
  'Marketplace & Hostels': ShoppingBag,
  'Stories, News & Announcements': FileText,
  Support: Shield,
}

const SectionHeader = ({ eyebrow, title, text, inverse = false }) => (
  <div className="max-w-3xl">
    <p className={`text-sm font-extrabold uppercase ${inverse ? 'text-indigo-200' : 'text-indigo-600'}`}>{eyebrow}</p>
    <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${inverse ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
    {text ? <p className={`mt-4 text-base leading-8 ${inverse ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p> : null}
  </div>
)

const BulletList = ({ items, inverse = false }) => (
  <ul className="mt-5 space-y-3">
    {items.map((item) => (
      <li key={item} className={`flex gap-3 text-sm leading-6 ${inverse ? 'text-slate-200' : 'text-slate-700'}`}>
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Docs = () => {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold uppercase text-indigo-600">Product Guide</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              {guideIntro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{guideIntro.subtitle}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {guideIntro.badges.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Features"
            title="What you can do with UniHelp"
            text="Use this guide to understand the main areas of the app and the information you may use in each one."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featureGroups.map((group) => {
              const Icon = iconMap[group.title] || Sparkles
              return (
                <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-700">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{group.summary}</p>
                    </div>
                  </div>
                  <BulletList items={group.features} />
                  <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 text-sm">
                    <p><span className="font-black text-slate-950">Information used:</span> <span className="text-slate-600">{group.data}</span></p>
                    <p><span className="font-black text-slate-950">Access:</span> <span className="text-slate-600">{group.access}</span></p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="privacy" className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Privacy"
            title="Information used to provide UniHelp"
            text="UniHelp uses account, content, learning and device information to run the features you choose to use."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {privacyCategories.map((group) => (
              <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-black text-slate-950">{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-black text-slate-950">Services that help UniHelp work</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {serviceProviders.map((service) => (
                <div key={service.name} className="rounded-lg bg-slate-50 p-4">
                  <p className="font-black text-slate-950">{service.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="permissions" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Permissions" title="Device access you may be asked for" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {permissionInventory.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-200 p-6">
                <Lock className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black text-slate-950">{item.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase text-slate-400">{item.platform}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="premium" className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            inverse
            eyebrow="Premium"
            title="Premium plans and benefits"
            text="Upgrade when you want offline study access, higher limits and additional communication features."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold uppercase text-indigo-200">Plan</p>
              <h3 className="mt-2 text-3xl font-black">{premiumDetails.plan}</h3>
              <div className="mt-6 grid gap-3">
                {[...premiumDetails.prices, ...premiumDetails.providers].map((item) => (
                  <p key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-slate-100">{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white p-6 text-slate-950">
              <h3 className="text-xl font-black">Premium benefits</h3>
              <BulletList items={premiumDetails.benefits} />
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="font-black">Upload limits</h4>
                <BulletList items={premiumDetails.limits} />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-black">Marketplace promotion</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Promote eligible marketplace listings to help more students discover them.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {sponsorshipDetails.map((plan) => (
                <div key={plan.label} className="rounded-lg bg-white px-4 py-5 text-slate-950">
                  <p className="text-sm font-bold text-slate-500">{plan.label}</p>
                  <p className="mt-2 text-2xl font-black">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="uploads" className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="Uploads" title="Supported files and sizes" />
            <BulletList items={uploadRules} />
          </div>
          <div>
            <SectionHeader eyebrow="Account Safety" title="Sign-in and deletion controls" />
            <BulletList items={accountSecurity} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Docs
