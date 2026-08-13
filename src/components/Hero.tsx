import { Sun, ArrowRight, Sparkles } from 'lucide-react';
import { business, heroImage } from '@/data/business';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/80 via-white to-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-40 -z-10 h-80 w-80 rounded-full bg-solar-200/40 blur-3xl" />

      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Clean Energy for Your Future
          </span>
          <h1 className="mt-5 font-display text-4xl font-800 leading-[1.1] tracking-tight text-slate-900 text-balance sm:text-5xl lg:text-6xl">
            Transform Your Home with{' '}
            <span className="bg-gradient-to-r from-brand-600 to-solar-500 bg-clip-text text-transparent">
              Solar Energy
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Experience sustainable power solutions that reduce your electricity bills by up to 90% while contributing to a cleaner environment.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get a Free Quote
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {business.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-600 uppercase tracking-wider text-brand-600">{s.label}</dt>
                <dd className="mt-1 font-display text-lg font-700 text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-in lg:pl-6">
          <div className="relative overflow-hidden rounded-3xl shadow-glow ring-1 ring-brand-100">
            <img
              src={heroImage}
              alt="Technician installing solar panels on a rooftop"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-soft backdrop-blur sm:-left-6 animate-float">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-solar-100 text-solar-600">
              <Sun className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-sm font-700 text-slate-900">Up to 90% Savings</p>
              <p className="text-xs text-slate-500">on your electricity bills</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-3 top-6 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-soft backdrop-blur animate-float [animation-delay:1.5s]">
            <p className="font-display text-xs font-700 text-brand-700">Eco-Friendly</p>
            <p className="text-[11px] text-slate-500">Renewable & Clean</p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-16 border-y border-slate-100 bg-brand-50/50">
        <div className="container-px flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-xs font-600 uppercase tracking-wider text-brand-700">
          <span>Rooftop Solar</span>
          <span className="text-brand-300">•</span>
          <span>Solar Water Heaters</span>
          <span className="text-brand-300">•</span>
          <span>Installation & Maintenance</span>
          <span className="text-brand-300">•</span>
          <span>Subsidy Assistance</span>
          <span className="text-brand-300">•</span>
          <span>Pan-India Service</span>
        </div>
      </div>
    </section>
  );
}
