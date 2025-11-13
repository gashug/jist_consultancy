export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "latest-kenyan-business-regulations-2025",
    title: "Understanding the Latest Kenyan Business Regulations 2025",
    excerpt:
      "A practical overview of recent regulatory changes affecting Kenyan SMEs, including tax updates and compliance tips.",
    date: "2025-01-10",
    category: "Regulations",
    content: `
      <p>Kenyan SMEs continue to face a dynamic regulatory environment. In 2025, several updates have been introduced that affect how businesses register, file taxes and maintain compliance...</p>
      <p>(Replace with full article content in simple, SEO-optimised language.)</p>
    `
  },
  {
    slug: "common-sme-compliance-mistakes-kenya",
    title: "5 Common Compliance Mistakes Kenyan SMEs Make",
    excerpt:
      "Avoid these frequent errors that lead to penalties, cashflow issues and unnecessary stress for business owners.",
    date: "2024-11-20",
    category: "SME Tips",
    content: `
      <p>Many Kenyan SMEs unknowingly expose themselves to penalties and cashflow strain due to a few recurring mistakes...</p>
    `
  }
];