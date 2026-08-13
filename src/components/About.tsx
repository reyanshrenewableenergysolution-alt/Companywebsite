import { CheckCircle2, Leaf } from 'lucide-react';
import { business, aboutImage } from '@/data/business';

const highlights = [
  'Rooftop solar systems for homes and businesses',
  'Solar water heaters with long lifespan',
  'Quality-first installations across India',
  'Clean, reliable, and affordable energy',
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate-100">
            <img
              src={aboutImage}
              alt="Solar engineers inspecting a rooftop installation"
              className="h-[400px] w-full object-cover sm:h-[480px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-600">
                <Leaf className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-700 text-slate-900">Clean Energy</p>
                <p className="text-xs text-slate-500">Accessible for everyone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <span className="section-eyebrow">About Us</span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-slate-900 sm:text-4xl">
            Dedicated to making clean energy accessible
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">{business.about}</p>

          <ul className="mt-7 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm text-slate-700">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">
              View Our Products
            </a>
            <a href="#contact" className="btn-ghost">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
