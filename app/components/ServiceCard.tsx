import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  href,
  points
}: {
  title: string;
  description: string;
  href: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <ul className="mt-3 text-xs text-slate-600 space-y-1 list-disc list-inside">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Link href={href} className="text-sm font-medium text-brand-primary hover:text-brand-accent">
          Learn more &rarr;
        </Link>
      </div>
    </div>
  );
}