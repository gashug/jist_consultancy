import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jist Consultancy",
  description:
    "Terms and conditions for using Jist Consultancy’s website and services."
};

export default function TermsPage() {
  return (
    <div className="container py-10 sm:py-16 text-sm text-slate-700 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-4">Terms &amp; Conditions</h1>
      <p className="mb-4">
        These terms and conditions govern your use of the Jist Consultancy website and
        any services you engage us for.
      </p>
      <p className="text-xs italic">
        (Insert your actual legal terms here, ideally drafted or reviewed by a legal
        professional familiar with Kenyan law.)
      </p>
    </div>
  );
}