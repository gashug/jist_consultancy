"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) {
        throw new Error("Failed to send, please try again.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Full Name
          </label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Phone (WhatsApp preferred)
          </label>
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Business Name (optional)
          </label>
          <input
            name="businessName"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          What do you need help with?
        </label>
        <select
          name="service"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="Tax Advisory">Tax Advisory & KRA Returns</option>
          <option value="Accounting & Bookkeeping">
            Accounting &amp; Bookkeeping
          </option>
          <option value="Audit Advisory">Audit &amp; Compliance</option>
          <option value="Training">Training &amp; Workshops</option>
          <option value="Other">Not sure / Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          Briefly describe your situation
        </label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          placeholder="e.g., We have pending returns for 2023 and need help fixing them..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-accent disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
      </button>

      {status === "success" && (
        <p className="text-xs text-green-700 mt-1">
          Thank you. We’ve received your enquiry and will get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </form>
  );
}