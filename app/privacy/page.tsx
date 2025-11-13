import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jist Consultancy",
  description:
    "Privacy policy for Jist Consultancy, explaining how we handle your personal and business information."
};

export default function PrivacyPage() {
  return (
    <div className="container py-10 sm:py-16 text-sm text-slate-700 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Jist Consultancy respects your privacy. This policy explains how we collect, use
        and protect your information when you use our website and services.
      </p>
      <p className="text-xs italic">
        (Insert your full privacy policy here, including data collection, cookies,
        consent, and contact details for privacy enquiries.)
      </p>
    </div>
  );
}