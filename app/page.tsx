import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jist Consultancy | Tax, Accounting & Audit Services in Kenya",
  description:
    "Jist Consultancy helps Kenyan SMEs and individuals with KRA tax compliance, accounting, audit advisory and training. Book a free consultation today."
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="services"
        eyebrow="Services"
        title="Practical Compliance & Financial Support for Kenyan Businesses"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Tax Advisory & Services"
            description="Stay on the right side of KRA with timely, accurate tax returns and clear advisory."
            href="/services/tax-advisory"
            points={["VAT, PAYE & Income Tax", "KRA iTax filing & support", "Tax health checks"]}
          />
          <ServiceCard
            title="Accounting & Bookkeeping"
            description="Clean, up-to-date books that help you understand cashflow and make better decisions."
            href="/services/accounting-bookkeeping"
            points={["Monthly bookkeeping", "Payroll & PAYE", "Management reports"]}
          />
          <ServiceCard
            title="Audit Advisory & Services"
            description="Reduce risk with structured internal reviews and audit preparation support."
            href="/services/audit-advisory"
            points={["Internal controls review", "Financial statement audits", "Regulatory readiness"]}
          />
          <ServiceCard
            title="Training & Workshops"
            description="Equip your team with practical skills on iTax, accounting tools and financial basics."
            href="/services/training"
            points={["KRA iTax training", "Accounting software", "Financial literacy"]}
          />
        </div>
      </Section>

      <Section
        eyebrow="Why Jist Consultancy"
        title="Built for Kenyan SMEs, Startups and Professionals"
      >
        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-base">Local Expertise</h3>
            <p className="mt-2">
              We focus on Kenyan tax and regulatory requirements — from KRA to NSSF/NHIF
              and local county obligations.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-base">Clear Communication</h3>
            <p className="mt-2">
              No jargon. We explain what’s happening, what it means, and what to do next
              in simple language.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-base">SME-Friendly Pricing</h3>
            <p className="mt-2">
              Transparent, predictable fees with clear scope. Ideal for SMEs managing
              tight budgets and growth.
            </p>
          </div>
        </div>
      </Section>

      <TestimonialCarousel />

      <Section title="Visit or Contact Our Office">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 text-sm text-slate-700">
            <h3 className="text-base font-semibold mb-2">Office Details</h3>
            <p>
              Room 15 2nd Floor, Kimondo Ngunju Building<br />
              Nyeri, Kenya
            </p>
            <p className="mt-2">
              Phone: <a href="tel:+2547XXXXXXXX">+254 7XX XXX XXX</a><br />
              Email:{" "}
              <a href="mailto:info@jistconsultancy.co.ke">
                info@jistconsultancy.co.ke
              </a>
            </p>
            <p className="mt-2">
              Hours: Mon – Fri, 8:00am – 5:00pm (EAT)
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-4 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium !text-white hover:bg-brand-accent"
            >
              Book Your Consultation
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-slate-200 h-72">
            {/* Replace src with your actual Google Maps embed */}
            <iframe
              title="Jist Consultancy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.7626640564688!2d36.94855231887918!3d-0.4197175751026177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285dfdfc311113%3A0x688d20c4b92405dc!2sKanisa%20Rd%2C%20Nyeri!5e0!3m2!1sen!2ske!4v1763039909395!5m2!1sen!2ske"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}