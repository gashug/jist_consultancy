import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Advisory & KRA Services | Jist Consultancy",
  description:
    "Tax advisory, VAT, PAYE, Income Tax and KRA iTax filing services for Kenyan SMEs and individuals. Avoid penalties and stay compliant with Jist Consultancy."
};

export default function TaxAdvisoryPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">
        Tax Advisory &amp; KRA Services
      </h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-6">
        We help Kenyan SMEs, startups and individuals understand their tax obligations,
        avoid penalties and file accurate returns with KRA. From VAT and PAYE to
        Income Tax and withholding tax, we provide practical, ongoing support.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">Common Pain Points</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Unfiled or late VAT, PAYE or Income Tax returns</li>
              <li>Unclear KRA penalty and interest calculations</li>
              <li>Difficulty reconciling company books with KRA iTax</li>
              <li>Confusion over withholding tax, rental income tax and presumptive tax</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              How Jist Consultancy Helps
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Set up and review your KRA iTax profile</li>
              <li>Prepare and file monthly/annual returns (VAT, PAYE, Income Tax)</li>
              <li>Perform tax health checks to identify gaps and risks</li>
              <li>Assist with KRA audits, objections and payment plans</li>
              <li>Advise on tax-efficient structures within the law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Who This Service Is For
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Registered companies with staff (PAYE, NSSF, NHIF)</li>
              <li>Consultants and freelancers with inconsistent income</li>
              <li>SMEs with backlogged returns or penalty issues</li>
              <li>Landlords and property owners with rental income</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              What You Can Expect
            </h2>
            <p>
              You’ll receive clear communication on what we need from you, timelines for
              filing, and a simple summary of your tax position. We prioritise keeping
              you compliant while planning to minimise unnecessary tax leakage.
            </p>
          </section>
        </div>

        <aside className="rounded-2xl border bg-white p-5 text-sm text-slate-700">
          <h3 className="text-base font-semibold mb-2">
            Ready to Fix Your Tax Situation?
          </h3>
          <p>
            Book a free 30-minute consultation to review your current KRA status and
            agree on next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-4 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white hover:bg-brand-accent"
          >
            Book Tax Consultation
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Ideal for businesses or individuals with pending returns, penalties or
            upcoming audits.
          </p>
        </aside>
      </div>
    </div>
  );
}