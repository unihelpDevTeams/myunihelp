import { ShieldCheck } from 'lucide-react'
import { permissionInventory, privacyCategories, serviceProviders } from '../../data/productContent'

const useItems = [
  'Create and manage your UniHelp account.',
  'Provide study tools, uploads, community, messaging, marketplace, hostels, stories, notifications and support.',
  'Process Premium access and marketplace promotion payments.',
  'Save offline learning materials and study progress when you use supported features.',
  'Improve account safety and help complete account deletion requests.',
]

const Privacy = () => {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase text-indigo-600">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">How UniHelp handles your information</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            UniHelp uses your information to provide student accounts, study features, community tools, marketplace services and support.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 p-6">
            <ShieldCheck className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black text-slate-950">Information UniHelp uses</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {privacyCategories.map((group) => (
                <div key={group.title} className="rounded-lg bg-slate-50 p-4">
                  <h3 className="font-black text-slate-950">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section className="rounded-lg border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-950">How UniHelp uses information</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {useItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-950">Device permissions</h2>
              <div className="mt-5 grid gap-4">
                {permissionInventory.map((permission) => (
                  <div key={permission.name} className="rounded-lg bg-slate-50 p-4">
                    <h3 className="font-black text-slate-950">{permission.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{permission.purpose}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-black text-slate-950">Services that help UniHelp operate</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              UniHelp works with trusted service providers to support secure accounts, media storage, payments, notifications, messaging and study assistance.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {serviceProviders.map((service) => (
                <div key={service.name} className="rounded-lg bg-slate-50 p-4">
                  <h3 className="font-black text-slate-950">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black text-slate-950">Your choices</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You can update your profile, manage device permissions, sign out or request account deletion from within the UniHelp app. You can also contact support through the Help Center.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Privacy
