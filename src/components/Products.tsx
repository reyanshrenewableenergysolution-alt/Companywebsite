import { ArrowRight } from 'lucide-react';
import { products } from '@/data/business';

export default function Products() {
  return (
    <section id="products" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />

      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Products</span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-slate-900 sm:text-4xl">
            Reliable solar solutions for every need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From compact home systems to powerful three-phase setups and water heaters, we have the right fit for your energy goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="group card overflow-hidden hover:-translate-y-1.5 hover:shadow-glow"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-600 text-brand-700 backdrop-blur">
                    <Icon className="h-3.5 w-3.5" />
                    {p.category}
                  </span>
                  {p.phase && (
                    <span className="absolute right-4 top-4 rounded-full bg-solar-500/90 px-3 py-1 text-xs font-600 text-solar-900 backdrop-blur">
                      {p.phase}
                    </span>
                  )}
                </div>

                <div className="flex flex-col p-6">
                  <h3 className="font-display text-lg font-700 text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-500 text-brand-700"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    {p.price ? (
                      <span className="font-display text-xl font-700 text-slate-900">{p.price}</span>
                    ) : (
                      <span className="text-sm font-500 text-slate-500">Price on request</span>
                    )}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-sm font-600 text-brand-700 transition-colors hover:text-brand-800"
                    >
                      Enquire
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

          {/* CTA card */}
          <article className="group relative flex flex-col items-start justify-center overflow-hidden rounded-2xl bg-slate-950 p-8 text-white shadow-soft">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
            <h3 className="relative font-display text-xl font-700">Need a custom solution?</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-300">
              Tell us about your energy needs and we'll design a solar system tailored to your home or business.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative btn-solar mt-6"
            >
              Get a Custom Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
