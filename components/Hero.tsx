import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white border-b">
      <div className="container py-10 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
            Jist Consultancy · Nairobi & Ruiru
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Achieve Business Compliance &amp; Clarity
            <span className="text-brand-primary"> for Your Business.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
            We help Kenyan SMEs and individuals stay compliant with KRA, keep
            clean books, and make confident decisions — without the jargon or
            surprise penalties.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-accent"
            >
              Book Your Free Consultation
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-brand-primary"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs text-slate-600 max-w-lg">
            <div>
              <p className="font-semibold text-sm text-slate-800">
                KRA Compliance
              </p>
              <p>VAT, PAYE, Income Tax and returns handled on time.</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-slate-800">
                SME Focused
              </p>
              <p>Solutions tailored for Kenyan SMEs and growing businesses.</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-slate-800">
                Transparent Fees
              </p>
              <p>No hidden charges. Clear scope before we start.</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-light rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-lg font-semibold">
            Free 30-Minute Compliance &amp; Clarity Session
          </h3>
          <p className="text-sm text-slate-600">
            Not sure where to start? Share a few details and we’ll assess your
            current compliance &amp; bookkeeping situation and recommend clear
            next steps.
          </p>
          <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Quick review of your current KRA status</li>
            <li>Identify key risk areas (penalties, gaps)</li>
            <li>Action plan tailored to your business</li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-accent"
          >
            Book Session Now
          </Link>
          <p className="text-xs text-slate-500">
            No obligation. Ideal for SMEs, startups and consultants.
          </p>
        </div>
      </div>
    </section>
  );
}