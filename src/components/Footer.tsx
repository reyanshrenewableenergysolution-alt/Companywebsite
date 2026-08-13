import { Sun, MapPin, Mail, Phone, Clock, ArrowUp } from 'lucide-react';
import { business, navLinks } from '@/data/business';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-px relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <Sun className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-700 text-white">Reyansh</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {business.tagline}. Rooftop solar systems and solar water heaters for homes and businesses across India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-600 uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-600 uppercase tracking-wider text-white">Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>3kW Rooftop Solar</li>
              <li>5kW Rooftop Solar (Single)</li>
              <li>5kW Rooftop Solar (Three)</li>
              <li>Solar Water Heaters</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-600 uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {business.contact.address}, {business.contact.city}, {business.contact.state} - {business.contact.pincode}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${business.contact.email}`} className="hover:text-brand-300">
                  {business.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:${business.contact.phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-300">
                  {business.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{business.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs font-500 text-slate-400 transition-colors hover:text-brand-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
