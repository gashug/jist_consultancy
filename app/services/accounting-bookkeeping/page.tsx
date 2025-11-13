import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | Jist Consultancy",
  description:
    "Monthly accounting, bookkeeping, payroll and financial reporting services for Kenyan SMEs and individuals."
};

export default function AccountingBookkeepingPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">
        Accounting &amp; Bookkeeping Services
      </h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-6">
        We provide consistent, reliable accounting and bookkeeping support so you
        always know where your money is going. Our services are tailored for Kenyan
        SMEs, startups and professionals who need clean records and clear reports
        without hiring a full in-house finance team.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">Common Pain Points</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Books are out of date or scattered across spreadsheets and receipts</li>
              <li>No clear picture of cashflow, profitability or outstanding debts</li>
              <li>Struggle to prepare financial statements for banks, investors or audits</li>
              <li>Payroll and PAYE calculations are time-consuming and error-prone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              How Jist Consultancy Helps
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Set up or improve your chart of accounts and accounting structure</li>
              <li>Provide monthly bookkeeping (posting, reconciliations, adjustments)</li>
              <li>Prepare management reports (P&amp;L, balance sheet, cashflow)</li>
              <li>Handle payroll calculations, PAYE summaries and staff statutory deductions</li>
              <li>Coordinate with your tax and audit requirements for a seamless experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Tools &amp; Approach
            </h2>
            <p>
              We work with commonly used accounting tools and can support cloud-based
              systems for businesses that prefer online access. Our focus is on accuracy,
              timeliness and clear explanations so that owners and directors can make
              confident decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Who This Service Is For
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Growing SMEs who need structured monthly reporting</li>
              <li>Startups preparing to raise capital or apply for financing</li>
              <li>Consultants, agencies and professionals with recurring clients</li>
              <li>Family businesses that want visibility and control over finances</li>
            </ul>
          </section>
        </div>

        <aside className="rounded-2xl border bg-white p-5 text-sm text-slate-700">
          <h3 className="text-base font-semibold mb-2">
            Want Clean, Up-to-Date Books?
          </h3>
          <p>
            Book a free discovery call to review your current bookkeeping setup and
            agree on a simple, affordable monthly package.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-4 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium !text-white hover:bg-brand-accent"
          >
            Book Accounting Consultation
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Ideal for SMEs that want predictable reporting, organised documents and
            easier compliance.
          </p>
        </aside>
      </div>
    </div>
  );
}