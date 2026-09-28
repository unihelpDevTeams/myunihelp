import { Link } from 'react-router-dom'
import { AlertTriangle, Mail, ShieldCheck, Trash2 } from 'lucide-react'

const DeleteAccount = () => (
  <main className="bg-white">
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase text-indigo-600">Account Controls</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-6xl">Delete your UniHelp account</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          You can delete your account in the app. If you can no longer sign in, email our support team to request deletion.
        </p>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-6">
          <section className="rounded-lg border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-indigo-50 text-indigo-700">
                <Trash2 size={21} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-black text-slate-950">From the UniHelp app</h2>
            </div>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 marker:font-bold marker:text-indigo-600">
              <li>Sign in to the account you want to delete.</li>
              <li>Open <strong>Profile</strong>, then choose <strong>Danger Zone</strong>.</li>
              <li>Under <strong>Delete account</strong>, review the information and type <strong>DELETE</strong>.</li>
              <li>If prompted, enter your password. Some sign-in methods may require you to sign in again.</li>
              <li>Confirm <strong>Delete account</strong>. Deletion is permanent.</li>
            </ol>
          </section>

          <section className="rounded-lg border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-100 text-slate-700">
                <Mail size={21} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-black text-slate-950">Can’t access your account?</h2>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Email <a className="font-bold text-indigo-700 underline underline-offset-4" href="mailto:support@unihelp.com?subject=Account%20deletion%20request">support@unihelp.com</a> with the subject “Account deletion request.” Include the email address registered to your UniHelp account and, if available, your username. Support may ask for information to verify that you own the account.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Do not send your password, payment card details, or one-time sign-in codes by email.
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <ShieldCheck className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-slate-950">What deletion removes</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The in-app deletion flow removes your UniHelp sign-in account and profile, profile activity, and eligible account-owned listings and uploaded media from UniHelp systems.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Content already shared with other people, transaction records, or information that must be kept for legal, accounting, or security reasons may remain or be retained for the period required. Contact support if you have a question about specific information.
            </p>
          </section>

          <section className="rounded-lg border border-amber-200 bg-amber-50 p-6">
            <AlertTriangle className="h-6 w-6 text-amber-700" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-black text-slate-950">Google Play subscriptions</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Deleting your UniHelp account does not cancel an active auto-renewing Google Play subscription. Cancel it separately in Google Play under <strong>Payments & subscriptions</strong> before deleting your account.
            </p>
          </section>

          <p className="text-sm leading-6 text-slate-500">
            See our <Link className="font-bold text-indigo-700 underline underline-offset-4" to="/privacy">Privacy Policy</Link> for more information about data use.
          </p>
        </aside>
      </div>
    </section>
  </main>
)

export default DeleteAccount