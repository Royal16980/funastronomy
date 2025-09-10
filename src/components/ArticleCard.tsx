import Image from 'next/image';
import Link from 'next/link';
import type { Post } from 'contentlayer/generated';

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition">
      <Link href={post.url}>
        <div className="relative aspect-[16/9]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <p className="text-xs uppercase tracking-wide text-white/60">{post.category}</p>
          <h3 className="mt-2 text-lg font-semibold group-hover:underline">{post.title}</h3>
          <p className="mt-2 text-sm text-white/70 line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
