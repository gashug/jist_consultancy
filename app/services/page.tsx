import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services | Jist Consultancy",
  description:
    "Explore Jist Consultancy’s tax advisory, accounting & bookkeeping, audit services and training solutions for Kenyan SMEs and individuals."
};

export default function ServicesPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-8">
        We help you meet statutory obligations, maintain clean records and gain clarity
        over your business finances through four core service areas.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          title="Tax Advisory & Services"
          description="Keep up with VAT, PAYE, Income Tax and KRA requirements."
          href="/services/tax-advisory"
          points={["Returns filing", "Tax planning", "Penalty resolutions"]}
        />
        <ServiceCard
          title="Accounting & Bookkeeping"
          description="Accurate records for better decisions and easier audits."
          href="/services/accounting-bookkeeping"
          points={["Monthly books", "Payroll", "Reporting"]}
        />
        <ServiceCard
          title="Audit Advisory & Services"
          description="Internal and external audit readiness and support."
          href="/services/audit-advisory"
          points={["Internal controls", "Compliance gaps", "Audit liaison"]}
        />
        <ServiceCard
          title="Training & Workshops"
          description="Hands-on sessions for founders and finance teams."
          href="/services/training"
          points={["iTax", "Accounting tools", "Financial basics"]}
        />
      </div>
    </div>
  );
}