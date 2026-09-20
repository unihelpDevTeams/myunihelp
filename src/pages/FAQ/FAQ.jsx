import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is UniHelp?',
    answer: 'UniHelp is a mobile app that helps students study, connect with other students, manage campus life, find resources and get support in one place.',
  },
  {
    question: 'Do I need an account?',
    answer: 'Yes. You need an account to use the main UniHelp experience, including your profile, study tools, community, messages, marketplace, hostels and Premium features.',
  },
  {
    question: 'What information do I add during signup?',
    answer: 'You can add your name, username, email, school, department, faculty, level, student type, interests, bio and profile photo.',
  },
  {
    question: 'Do I need to verify my email?',
    answer: 'Yes. Email verification helps protect your account and confirms that you can receive important account messages.',
  },
  {
    question: 'What does Premium include?',
    answer: 'Premium includes offline learning access, voice messages, study downloads, a higher AI response limit, reduced ads, higher hostel and product upload limits, and selected early-access benefits.',
  },
  {
    question: 'How much does Premium cost?',
    answer: 'Student Premium is available monthly for NGN 1,000 or yearly for NGN 10,000.',
  },
  {
    question: 'Can I upload study resources?',
    answer: 'You can upload lecture notes as PDF files. Past-question contribution options may appear where UniHelp makes them available.',
  },
  {
    question: 'What are the upload limits?',
    answer: 'Past-question and lecture-note uploads can be up to 50 MB. Marketplace and hostel images can be up to 10 MB per image. Standard accounts can upload up to 5 products and 5 hostels; Premium accounts can upload up to 10 each.',
  },
  {
    question: 'Can I delete my account?',
    answer: 'Yes. You can request account deletion from your profile settings. You may be asked to confirm your password or sign in again before deletion is completed.',
  },
  {
    question: 'Why does UniHelp ask for notification permission?',
    answer: 'Notifications help UniHelp send reminders, announcements, payment updates and other useful app messages. You can manage notification access from your device settings.',
  },
  {
    question: 'Why does UniHelp ask for microphone access?',
    answer: 'Microphone access is used only when you choose to record and send voice messages.',
  },
  {
    question: 'How do I contact support?',
    answer: 'Open the Help Center in the app to send a contact message, report a problem or share a suggestion.',
  },
]

const FAQ = () => {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase text-indigo-600">FAQ</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Frequently asked questions</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Quick answers about accounts, study tools, Premium, uploads and support.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-black text-slate-950">{item.question}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQ
