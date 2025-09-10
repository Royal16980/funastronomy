'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/category/astronomy', label: 'Astronomy' },
  { href: '/category/missions', label: 'Missions' },
  { href: '/category/launches-spacecraft', label: 'Launches' },
  { href: '/category/observing', label: 'Observing' },
  { href: '/category/space-science', label: 'Space Science' },
  { href: '/category/tech', label: 'Tech' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Fun Astronomy
        </Link>
        <nav className="hidden md:flex gap-5 text-sm">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:underline ${pathname.startsWith(l.href) ? 'text-white' : 'text-white/80'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
