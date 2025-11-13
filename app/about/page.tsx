import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jist Consultancy | Nairobi & Ruiru",
  description:
    "Learn about Jist Consultancy’s mission, team and experience helping Kenyan SMEs and individuals stay compliant and financially organized."
};

export default function AboutPage() {
  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">About Jist Consultancy</h1>
      <p className="text-sm text-slate-700 max-w-3xl">
        Jist Consultancy is a Nyeri-based professional services firm focused
        on helping Kenyan SMEs, startups and individuals stay compliant with KRA and
        build financially healthy businesses.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-sm text-slate-700">
            To remove the fear, confusion and penalties associated with tax and
            compliance by providing straightforward, practical and transparent advisory,
            accounting, audit and training services.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Who We Serve</h2>
          <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
            <li>Small &amp; Medium Enterprises across Kenya</li>
            <li>Freelancers, consultants and professionals</li>
            <li>Family businesses and startups</li>
            <li>Non-profits and community organizations</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Our Team</h2>
        <p className="text-sm text-slate-700 mb-4">
          Jist Consultancy is led by qualified professionals with experience across tax,
          accounting, audit and training.{" "}
          <span className="italic">
            (Add specific team profiles here with photos, professional memberships and
            credentials like ICPAK, ACCA, CPA(K), etc.)
          </span>
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example skeleton profile cards */}
          <div className="rounded-2xl border bg-white p-4 text-sm">
            <div className="h-20 w-20 rounded-full bg-slate-200 mb-3" />
            <h3 className="font-semibold">[Your Name]</h3>
            <p className="text-xs text-slate-500">Lead Tax &amp; Compliance Advisor</p>
            <p className="mt-2 text-xs text-slate-600">
              3+ years of experience supporting SMEs and professionals
              across Kenya with tax planning, advisory and compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}