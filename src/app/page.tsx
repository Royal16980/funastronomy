import { allPosts } from 'contentlayer/generated';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';

export const revalidate = 60;

export default function HomePage() {
  const posts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const [hero, ...rest] = posts;
  return (
    <div className="grid gap-8">
      {hero && (
        <section className="grid md:grid-cols-2 gap-6 items-stretch">
          <ArticleCard post={hero} />
          <div className="grid gap-6">
            {rest.slice(0, 3).map(p => (
              <ArticleCard key={p._id} post={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-4">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-xl font-semibold">Latest</h2>
          <Link href="/category/astronomy" className="text-sm text-white/70 hover:underline">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.slice(3, 15).map(p => (
            <ArticleCard key={p._id} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
