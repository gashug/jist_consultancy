import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Jist Consultancy",
  description:
    "Answers to common questions about Jist Consultancy’s tax, accounting, audit and training services in Kenya."
};

const faqs = [
  {
    q: "Do you only work with businesses in Nyeri?",
    a: "We primarily serve clients in Nyeri and its environs (including Othaya and Karatina), but we can support businesses anywhere in Kenya through online consultations and cloud tools."
  },
  {
    q: "Can you help if I have unfiled returns from previous years?",
    a: "Yes. We regularly assist clients to clean up backlogged VAT, PAYE and Income Tax returns, assess penalties and agree on realistic action plans with KRA."
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the scope and complexity of your situation. After a free initial consultation, we provide a clear, written quote with no hidden charges."
  },
  {
    q: "Do you offer training for my staff on iTax and accounting software?",
    a: "Yes. We run tailored trainings on KRA iTax, accounting software and basic financial management for founders, finance teams and staff."
  }
];

export default function FAQPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-8">
        Find quick answers below. If you don’t see your question,{" "}
        <a href="/contact" className="text-brand-primary">
          contact us
        </a>{" "}
        and we’ll be happy to help.
      </p>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-2xl border bg-white p-4 text-sm text-slate-700"
          >
            <h2 className="font-semibold">{faq.q}</h2>
            <p className="mt-1 text-slate-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}