"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
            J
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-lg">Jist Consultancy</div>
            <div className="text-xs text-slate-500">
              Compliance • Clarity • Confidence
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-primary">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-primary px-4 py-2 text-sm !text-white hover:bg-brand-accent"
          >
            Consultation Awaits
          </Link>
        </nav>

        <button
          className="md:hidden rounded-full border p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "block text-sm",
                  "hover:text-brand-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex mt-2 rounded-full bg-brand-primary px-4 py-2 text-sm text-white hover:bg-brand-accent"
            >
              Consult Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}