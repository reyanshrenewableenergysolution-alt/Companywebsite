import { whyChooseUs } from '@/data/business';

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-solar-500/15 blur-3xl" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-brand-300 ring-1 ring-inset ring-white/15">
            Why Choose Us?
          </span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-white sm:text-4xl">
            A partner you can rely on for clean energy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            We combine experience, quality, and genuine care to deliver solar solutions that truly make a difference.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-700 text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{w.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
