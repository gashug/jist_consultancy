import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training & Workshops | Jist Consultancy",
  description:
    "Practical KRA iTax training, accounting software sessions and financial management workshops for Kenyan SMEs and individuals."
};

export default function TrainingPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">
        Training &amp; Workshops
      </h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-6">
        We design practical, hands-on trainings that help founders, finance teams and
        individuals understand tax, use accounting tools effectively and make better
        financial decisions. The focus is on clarity, not jargon.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-sm text-slate-700">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Core Training Areas
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>KRA iTax Training:</strong> Registration, returns filing,
                payments and common error resolution for VAT, PAYE and Income Tax.
              </li>
              <li>
                <strong>Accounting Software Training:</strong> How to use selected
                accounting tools for invoicing, expense tracking, reconciliations and
                reporting.
              </li>
              <li>
                <strong>Financial Management Basics:</strong> Cashflow management,
                budgeting, pricing and understanding key financial statements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Training Formats
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>One-on-one sessions for founders and professionals</li>
              <li>Team workshops for SMEs and growing organisations</li>
              <li>Virtual sessions for remote teams across Kenya</li>
              <li>Custom programmes aligned to your specific industry and tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Who Benefits From Our Trainings
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Business owners who want to understand what their accountant is doing</li>
              <li>Staff who handle basic finance tasks and need more confidence</li>
              <li>Freelancers and consultants managing their own compliance</li>
              <li>Teams transitioning from manual/spreadsheet processes to structured tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Outcomes You Can Expect
            </h2>
            <p>
              By the end of each programme, participants should be able to carry out
              day-to-day tasks with less reliance on guesswork, identify when to seek
              professional help, and understand the impact of their actions on tax and
              financial health.
            </p>
          </section>
        </div>

        <aside className="rounded-2xl border bg-white p-5 text-sm text-slate-700">
          <h3 className="text-base font-semibold mb-2">
            Need a Custom Training for Your Team?
          </h3>
          <p>
            Share your team size, current tools and key challenges. We’ll propose a
            tailored training outline and schedule that suits your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-4 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium !text-white hover:bg-brand-accent"
          >
            Discuss a Training Programme
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Short sessions (2–3 hours) and multi-day programmes available, in-person
            or online.
          </p>
        </aside>
      </div>
    </div>
  );
}