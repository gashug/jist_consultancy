import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Jist Consultancy | Nairobi & Ruiru",
  description:
    "Contact Jist Consultancy for tax advisory, accounting, audit and training services in Kenya. Book your free consultation today."
};

export default function ContactPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-8">
        Tell us a bit about your situation and we’ll respond with next steps
        within one business day.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5">
          <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-5 text-sm text-slate-700">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="text-base font-semibold mb-2">Office &amp; Hours</h3>
            <p>
              Ruiru, Eastern Bypass<br />
              Nairobi Metropolitan, Kenya
            </p>
            <p className="mt-2">
              Phone: <a href="tel:+2547XXXXXXXX">+254 7XX XXX XXX</a><br />
              Email:{" "}
              <a href="mailto:info@jistconsultancy.co.ke">
                info@jistconsultancy.co.ke
              </a>
            </p>
            <p className="mt-2">
              Hours: Mon – Fri, 8:00am – 5:00pm (EAT)<br />
              Saturday by appointment
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="text-base font-semibold mb-2">
              Payment Methods Accepted
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>M-Pesa (PayBill / Till Number)</li>
              <li>Bank transfer (local Kenyan banks)</li>
              <li>Cash / cheque (by arrangement)</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="text-base font-semibold mb-2">Find Us</h3>
            <p className="text-xs text-slate-600 mb-2">
              (Replace this with your actual embedded map location)
            </p>
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
        </div>
      </div>
    </div>
  );
}