export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Fun Astronomy. All rights reserved.</p>
        <p>Built with Next.js on Vercel.</p>
      </div>
    </footer>
  );
}
