import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jist Consultancy | Tax, Accounting & Audit Services",
  description: "Jist Consultancy helps Kenyan SMEs and individuals stay compliant with KRA while gaining financial clarity through expert tax, accounting, audit and training services.",
  metadataBase: new URL("https://"),
  openGraph: {
    title: "Jist Consultancy | Compliance & Financial Clarity",
    description: "Trusted tax, accounting, audit, and training services for Kenyan businesses and individuals.",
    url: "https://",
    siteName: "Jist Consultancy",
    locale: "en_KE",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Jist Consultancy",
  "url": "https://example.com/",
  "telephone": "+254700000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business St",
    "addressLocality": "Nairobi",
    "addressRegion": "KE",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "areaServed": "KE",
  "priceRange": "KES",
  "sameAs": [
    "https://www.facebook.com/jistconsultancy",
    "https://www.linkedin.com/company/jist-consultancy",
    "https://twitter.com/jist_consultancy"
  ],
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} 
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 