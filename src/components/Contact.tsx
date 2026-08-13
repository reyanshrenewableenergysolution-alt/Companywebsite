import { useState } from 'react';
import { Send, CheckCircle2, MapPin, Mail, Phone, Clock, AlertCircle } from 'lucide-react';
import { business } from '@/data/business';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-enquiry-email`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactCards = [
    {
      label: 'Address',
      value: `${business.contact.address}, ${business.contact.city}, ${business.contact.state} - ${business.contact.pincode}`,
      icon: MapPin,
    },
    {
      label: 'Email',
      value: business.contact.email,
      icon: Mail,
      href: `mailto:${business.contact.email}`,
    },
    {
      label: 'Phone',
      value: business.contact.phone,
      icon: Phone,
      href: `tel:${business.contact.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      label: 'Business Hours',
      value: business.contact.hours,
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />

      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-slate-900 sm:text-4xl">
            Get in touch for the best deals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Have a question or ready to go solar? Reach out and our team will help you find the perfect energy solution.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="card h-full p-5 hover:-translate-y-1 hover:shadow-glow">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-600 uppercase tracking-wider text-brand-600">{c.label}</p>
                    <p className="mt-1 text-sm font-500 text-slate-700">{c.value}</p>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-soft">
              <iframe
                title="Reyansh location map"
                src="https://www.google.com/maps?q=Narpala,Anantapur,Andhra%20Pradesh,515425&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 sm:p-8">
            <h3 className="font-display text-xl font-700 text-slate-900">Request a Free Quote</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fill in your details and we'll get back to you within one business day.
            </p>

            {status === 'success' && (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-50 p-4 text-sm font-500 text-brand-800 ring-1 ring-inset ring-brand-100 animate-fade-in">
                <CheckCircle2 className="h-5 w-5 text-brand-600" />
                Thank you! Your enquiry has been received. We'll be in touch shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm font-500 text-red-800 ring-1 ring-inset ring-red-100 animate-fade-in">
                <AlertCircle className="h-5 w-5 text-red-600" />
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Your name"
                />
                <Field
                  label="Phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <Field
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@example.com"
              />
              <div>
                <label className="mb-1.5 block text-sm font-600 text-slate-700">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about your energy needs..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                {status !== 'submitting' && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-600 text-slate-700">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
