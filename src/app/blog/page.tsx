import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Piles Treatment Tips & Health Guides | Dr. Jadhav Pune",
  description:
    "Expert articles on piles, fissure, fistula prevention, laser surgery recovery, and when to see a proctologist in Pune.",
  path: "/blog",
});

const upcomingPosts = [
  {
    slug: "piles-symptoms-when-to-see-doctor",
    title: "Piles Symptoms: When Should You See a Doctor in Pune?",
    excerpt:
      "Learn early warning signs of hemorrhoids and why timely consultation with a piles specialist in Wakad can prevent complications.",
  },
  {
    slug: "laser-piles-surgery-recovery-timeline",
    title: "Laser Piles Surgery Recovery: What to Expect",
    excerpt:
      "A practical day-by-day recovery guide after laser hemorrhoidectomy at Dr. Jadhav Laser Centre.",
  },
  {
    slug: "fissure-vs-piles-difference",
    title: "Fissure vs Piles: How to Tell the Difference",
    excerpt:
      "Understand symptoms, causes, and treatment options for anal fissure and piles — explained by a Pune proctologist.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold">Health Blog</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Educational content for patients searching for piles treatment information
            in Pune — coming soon with full articles for SEO.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4">
          {upcomingPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h2 className="font-display text-xl font-bold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                Coming soon
              </span>
            </article>
          ))}
          <p className="text-center text-slate-600">
            Need help now?{" "}
            <Link href="/contact" className="font-semibold text-brand-700 hover:underline">
              Book a consultation
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
