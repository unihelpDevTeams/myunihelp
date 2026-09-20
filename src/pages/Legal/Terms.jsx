import { FileCheck2 } from 'lucide-react'
import { premiumDetails, sponsorshipDetails, uploadRules } from '../../data/productContent'

const termsSections = [
  {
    title: 'Using UniHelp',
    text: 'UniHelp is designed to support students with study tools, resources, community features, marketplace listings, hostels, stories, messages and support. Use the app responsibly and follow all applicable school, platform and community rules.',
  },
  {
    title: 'Your account',
    text: 'Keep your account details accurate and protect your password. You are responsible for activity that happens through your account.',
  },
  {
    title: 'Email verification',
    text: 'UniHelp may require email verification before you access the main app experience. This helps protect accounts and important account messages.',
  },
  {
    title: 'Content you upload or share',
    text: 'Only upload or share content you own or have permission to use. This includes notes, documents, photos, stories, comments, messages, listings, reports, suggestions and profile media.',
  },
  {
    title: 'Academic integrity',
    text: 'UniHelp is built to support learning. Do not use UniHelp to cheat, impersonate others, plagiarize, distribute exam answers improperly or violate academic rules.',
  },
  {
    title: 'Marketplace and hostel listings',
    text: 'Listings are created by users. Review details carefully, communicate safely and verify information before making payments or commitments outside UniHelp.',
  },
  {
    title: 'AI study assistance',
    text: 'AI study features are provided for learning support. Review important answers carefully and use your own judgment before relying on them for coursework or decisions.',
  },
  {
    title: 'Reports and support',
    text: 'You can report problems, send suggestions or contact support through the app. UniHelp may review reports and take action to protect students and the service.',
  },
  {
    title: 'Account deletion',
    text: 'You can request account deletion from your profile settings. For your safety, UniHelp may ask you to confirm your password or sign in again before completing the request.',
  },
]

const Terms = () => {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase text-indigo-600">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Using UniHelp responsibly</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These terms explain the basic rules for using UniHelp features, uploads, community spaces, marketplace listings and Premium services.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-5">
            {termsSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-200 p-6 shadow-sm">
                <FileCheck2 className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                <h2 className="mt-3 text-xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{section.text}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-950">Premium</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                <li>Plan: {premiumDetails.plan}</li>
                {premiumDetails.prices.map((item) => <li key={item}>{item}</li>)}
                {premiumDetails.providers.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-950">Marketplace promotion</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {sponsorshipDetails.map((item) => <li key={item.label}>{item.label}: {item.price}</li>)}
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-950">Upload rules</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {uploadRules.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Terms
