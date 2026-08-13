import { services } from '@/data/business';

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-slate-900 sm:text-4xl">
            End-to-end solar energy services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We support you through every stage, from the first consultation to long-term maintenance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group card p-6 hover:-translate-y-1.5 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-700 text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
