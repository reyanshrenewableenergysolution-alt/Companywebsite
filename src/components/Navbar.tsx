import { useEffect, useState } from 'react';
import { Sun, Menu, X, Phone } from 'lucide-react';
import { navLinks, business } from '@/data/business';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-soft border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
            <Sun className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-700 text-slate-900">Reyansh</span>
            <span className="text-[10px] font-600 uppercase tracking-[0.2em] text-brand-600">
              Renewable Energy
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-full px-4 py-2 text-sm font-500 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.contact.phone.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-2 text-sm font-600 text-slate-700 hover:text-brand-700"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {business.contact.phone}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="btn-primary"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-px border-t border-slate-100 bg-white/95 py-4 backdrop-blur">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm font-500 text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="btn-primary mt-3 w-full"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
