// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="bg-white border-b">
//       <div className="container py-10 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
//         <div>
//           <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
//             Jist Consultancy
//           </p>
//           <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
//             Achieve Business Compliance &amp; Clarity
//             <span className="text-brand-primary"> for Your Business.</span>
//           </h1>
//           <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
//             We help Kenyan SMEs and individuals stay compliant with KRA, keep
//             clean books, and make confident decisions — without the jargon or
//             surprise penalties.
//           </p>

//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium !text-white hover:bg-brand-accent"
//             >
//               Freely Book Your Consultation
//             </Link>
//             <a
//               href="#services"
//               className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:border-brand-primary"
//             >
//               Explore Services
//             </a>
//           </div>

//           <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs text-slate-600 max-w-lg">
//             <div>
//               <p className="font-semibold text-sm text-slate-800">
//                 KRA Compliance
//               </p>
//               <p>VAT, PAYE, Income Tax and returns handled on time.</p>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-slate-800">
//                 SME Focused
//               </p>
//               <p>Solutions tailored for Kenyan SMEs and growing businesses.</p>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-slate-800">
//                 Transparent Fees
//               </p>
//               <p>No hidden charges. Clear scope before we start.</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-brand-light rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
//           <h3 className="text-lg font-semibold">
//             Free 30-Minute Compliance &amp; Clarity Session
//           </h3>
//           <p className="text-sm text-slate-600">
//             Not sure where to start? Share a few details and we’ll assess your
//             current compliance &amp; bookkeeping situation and recommend clear
//             next steps.
//           </p>
//           <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
//             <li>Quick review of your current KRA status</li>
//             <li>Identify key risk areas (penalties, gaps)</li>
//             <li>Action plan tailored to your business</li>
//           </ul>
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-medium !text-white hover:bg-brand-accent"
//           >
//             Book Session Now
//           </Link>
//           <p className="text-xs text-slate-500">
//             No obligation. Ideal for SMEs, startups and consultants.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// carousel codeblock 1
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import clsx from "clsx";

// const slides = [
//   {
//     src: "/img1.jpg",
//     alt: "Tax advisor reviewing documents with a Kenyan SME owner in an office.",
//   },
//   {
//     src: "/img2.jpg",
//     alt: "Clean bookkeeping reports and a laptop on a desk.",
//   },
//   {
//     src: "/img3.jpg",
//     alt: "Nairobi city skyline representing growing Kenyan businesses.",
//   },
// ];

// export default function Hero() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-rotate every 8 seconds
//   useEffect(() => {
//     const id = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, 8000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <section className="relative overflow-hidden border-b bg-slate-950 text-white">
//       {/* Background carousel */}
//       <div className="absolute inset-0 -z-10">
//         {slides.map((slide, index) => (
//           <Image
//             key={slide.src}
//             src={slide.src}
//             alt={slide.alt}
//             fill
//             priority={index === 0}
//             className={clsx(
//               "object-cover transition-opacity duration-1000 ease-out",
//               index === activeIndex ? "opacity-100" : "opacity-0"
//             )}
//           />
//         ))}
//         {/* Dark gradient overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/80 to-slate-950/50" />
//       </div>

//       {/* Content */}
//       <div className="container py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
//         <div>
//           <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
//             Jist Consultancy
//           </p>
//           <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
//             Achieve Business Compliance &amp; Clarity
//             <span className="text-brand-primary"> for Your Business.</span>
//           </h1>
//           <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl">
//             We help Kenyan SMEs and individuals stay compliant with KRA, keep
//             clean books, and make confident decisions — without the jargon or
//             surprise penalties.
//           </p>

//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white !text-white hover:bg-brand-accent"
//             >
//               Book Your Free Consultation
//             </Link>
//             <a
//               href="#services"
//               className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 hover:border-brand-primary"
//             >
//               Explore Services
//             </a>
//           </div>

//           <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs text-slate-200 max-w-lg">
//             <div>
//               <p className="font-semibold text-sm text-white">
//                 KRA Compliance
//               </p>
//               <p>VAT, PAYE, Income Tax and returns handled on time.</p>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-white">SME Focused</p>
//               <p>Solutions tailored for Kenyan SMEs and growing businesses.</p>
//             </div>
//             <div>
//               <p className="font-semibold text-sm text-white">
//                 Transparent Fees
//               </p>
//               <p>No hidden charges. Clear scope before we start.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right-hand card stays, now floating above the background */}
//         <div className="bg-white/95 text-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg space-y-4 backdrop-blur">
//           <h3 className="text-lg font-semibold">
//             Free 30-Minute Compliance &amp; Clarity Session
//           </h3>
//           <p className="text-sm text-slate-700">
//             Not sure where to start? Share a few details and we’ll assess your
//             current compliance &amp; bookkeeping situation and recommend clear
//             next steps.
//           </p>
//           <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
//             <li>Quick review of your current KRA status</li>
//             <li>Identify key risk areas (penalties, gaps)</li>
//             <li>Action plan tailored to your business</li>
//           </ul>
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white !text-white hover:bg-brand-accent"
//           >
//             Book Session Now
//           </Link>
//           <p className="text-xs text-slate-500">
//             No obligation. Ideal for SMEs, startups and consultants.
//           </p>
//         </div>
//       </div>

//       {/* Slide indicators */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-4">
//         <div className="container flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setActiveIndex(index)}
//               className={clsx(
//                 "h-1.5 w-6 rounded-full transition-colors pointer-events-auto",
//                 index === activeIndex
//                   ? "bg-white"
//                   : "bg-white/40 hover:bg-white/70"
//               )}
//               aria-label={`Show slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/img1.jpg",       // make sure these filenames/paths match what's in /public
    alt: "Tax advisor reviewing documents with a Kenyan SME owner in an office.",
  },
  {
    src: "/img2.jpg",
    alt: "Bookkeeping laptop with financial reports on a desk.",
  },
  {
    src: "/img3.jpg",
    alt: "Nairobi skyline at golden hour representing business growth.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      8000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b bg-slate-950 text-white">
      {/* Background carousel (behind content, but ABOVE section background) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/70 to-slate-950/55" />
      </div>

      {/* Content sits ABOVE background */}
      <div className="relative z-10 container py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
            Jist Consultancy
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Achieve Business Compliance &amp; Clarity
            <span className="text-brand-primary"> for Your Business.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl">
            We help Kenyan SMEs and individuals stay compliant with KRA, keep
            clean books, and make confident decisions — without the jargon or
            surprise penalties.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white !text-white hover:bg-brand-accent"
            >
              Freely Book Your Consultation
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 hover:border-brand-primary"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs text-slate-200 max-w-lg">
            <div>
              <p className="font-semibold text-sm text-white">
                KRA Compliance
              </p>
              <p>VAT, PAYE, Income Tax and returns handled on time.</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white">SME Focused</p>
              <p>Solutions tailored for Kenyan SMEs and growing businesses.</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-white">
                Transparent Fees
              </p>
              <p>No hidden charges. Clear scope before we start.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/50 text-slate-50 border border-white/10 p-6 sm:p-8 shadow-lg space-y-4 backdrop-blur-md">
  <h3 className="text-lg font-semibold">
    Free 30-Minute Compliance &amp; Clarity Session
  </h3>
  <p className="text-sm text-slate-200">
    Not sure where to start? Share a few details and we’ll assess your current
    compliance &amp; bookkeeping situation and recommend clear next steps.
  </p>
  <ul className="text-sm text-slate-200 list-disc list-inside space-y-1">
    <li>Quick review of your current KRA status</li>
    <li>Identify key risk areas (penalties, gaps)</li>
    <li>Action plan tailored to your business</li>
  </ul>
  <Link
    href="/contact"
    className="inline-flex items-center justify-center rounded-full bg-brand-accent px-4 py-2 text-sm font-medium text-white !text-white hover:bg-brand-primary"
  >
    Book Session Now
  </Link>
  <p className="text-xs text-slate-400">
    No obligation. Ideal for SMEs, startups and consultants.
  </p>
</div>

      </div>

      {/* Indicators */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4">
        <div className="container flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 w-6 rounded-full transition-colors pointer-events-auto ${
                index === activeIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
