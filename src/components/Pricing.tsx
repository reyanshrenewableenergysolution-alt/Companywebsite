import { CheckCircle2, IndianRupee, Info } from 'lucide-react';
import { products } from '@/data/business';

export default function Pricing() {
  const priced = products.filter((p) => p.price);

  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />

      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Pricing</span>
          <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-slate-900 sm:text-4xl">
            Transparent pricing, no surprises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            All prices are inclusive of installation. Government subsidies and flexible financing options are available.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-slate-100 shadow-soft">
          <table className="w-full text-left">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-6 py-5 text-sm font-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-5 text-sm font-600 uppercase tracking-wider">Phase</th>
                <th className="px-6 py-5 text-right text-sm font-600 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {priced.map((p) => (
                <tr key={p.id} className="transition-colors hover:bg-brand-50/50">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-100 text-brand-600">
                        <IndianRupee className="h-4 w-4" />
                      </span>
                      <span className="font-display text-sm font-700 text-slate-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">{p.phase}</td>
                  <td className="px-6 py-5 text-right">
                    <span className="font-display text-base font-700 text-slate-900">{p.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl items-start gap-3 rounded-2xl bg-solar-50 p-5 text-sm text-solar-800 ring-1 ring-inset ring-solar-100">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-solar-600" />
          <p>
            Pricing is inclusive of installation. Government subsidies and flexible financing options available.
            Contact us to learn more!
          </p>
        </div>

        <ul className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-3">
          {['Inclusive of installation', 'Government subsidies available', 'Flexible financing options'].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-brand-600" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
