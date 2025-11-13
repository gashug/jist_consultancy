import { ReactNode } from "react";

export default function Section({
  id,
  title,
  eyebrow,
  children
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-10 sm:py-16">
      <div className="container">
        <div className="max-w-3xl mb-8">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}