import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXContent } from '@contentlayer/utils';

export const revalidate = 60;

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-invert max-w-3xl">
      <figure className="mb-6">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
        <figcaption className="text-sm text-white/60 mt-2">{post.excerpt}</figcaption>
      </figure>
      <h1>{post.title}</h1>
      <p className="text-white/60 text-sm">{new Date(post.date).toLocaleDateString()}</p>
      <MDXContent code={post.body.code} />
    </article>
  );
}
