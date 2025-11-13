import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Jist Consultancy`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="container py-10 sm:py-16">
      <article className="max-w-3xl">
        <p className="text-xs text-slate-500">
          {new Date(post.date).toLocaleDateString("en-KE", {
            year: "numeric",
            month: "short",
            day: "numeric"
          })}{" "}
          · {post.category}
        </p>
        <h1 className="text-3xl font-semibold mt-2">{post.title}</h1>
        <div
          className="mt-4 prose prose-sm max-w-none prose-p:mt-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}