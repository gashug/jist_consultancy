import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Resources & Blog | Jist Consultancy",
  description:
    "Practical guides on Kenyan tax, accounting, audit and financial management for SMEs and individuals."
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container py-10 sm:py-16">
      <h1 className="text-3xl font-semibold mb-4">Resources &amp; Blog</h1>
      <p className="text-sm text-slate-700 max-w-3xl mb-6">
        Articles written for Kenyan SMEs, startups and individuals who want to
        understand compliance, manage cashflow and avoid penalties.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border bg-white p-5 text-sm text-slate-700"
          >
            <p className="text-xs text-slate-500">
              {new Date(post.date).toLocaleDateString("en-KE", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })}{" "}
              · {post.category}
            </p>
            <h2 className="text-base font-semibold mt-2">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex mt-3 text-sm font-medium text-brand-primary hover:text-brand-accent"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}