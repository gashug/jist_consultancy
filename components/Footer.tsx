import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-200 mt-12">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg">Jist Consultancy</h3>
          <p className="mt-2 text-sm text-slate-400 max-w-md">
            Helping Kenyan SMEs and individuals stay compliant, reduce risk, and
            gain financial clarity through practical tax, accounting, audit and
            training solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Contact</h4>
          <p className="mt-2 text-sm text-slate-400">
            Room 15 2nd Floor, Kimondo Ngunju Building<br />
            Nyeri, Kenya<br />
            Phone: <a href="tel:+2547XXXXXXXX">+254 7XX XXX XXX</a><br />
            Email: <a href="mailto:info@jistconsultancy.co.ke">info@jistconsultancy.co.ke</a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Resources</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Jist Consultancy. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
