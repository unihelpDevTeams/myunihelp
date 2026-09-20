const steps = [
  { number: '01', title: 'Get UniHelp', text: 'Download the mobile app.' },
  { number: '02', title: 'Create your profile', text: 'Set up your student account.' },
  { number: '03', title: 'Explore UniHelp', text: 'Access the tools and experiences available to you.' },
]

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-indigo-600">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Start simple, then explore more.</h2>
          </div>

          <div className="relative grid gap-5">
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-gradient-to-b from-indigo-200 via-violet-300 to-transparent sm:block" aria-hidden="true" />
            {steps.map((step) => (
              <div key={step.number} className="relative grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr] sm:items-center sm:p-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
