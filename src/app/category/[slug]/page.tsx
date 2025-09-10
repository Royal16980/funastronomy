import { allPosts } from 'contentlayer/generated';
import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';

export const revalidate = 60;

const labels = [
  'astronomy','missions','launches-spacecraft','observing','space-science','tech','media','briefs'
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!labels.includes(slug)) return notFound();
  const posts = allPosts
    .filter(p => p.category === slug)
    .sort((a,b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize">{slug.replace('-', ' ')}</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => <ArticleCard key={p._id} post={p} />)}
      </div>
    </div>
  );
}
