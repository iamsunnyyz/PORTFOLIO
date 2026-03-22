import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 text-[var(--text-color)]">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-400">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-slate-400">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
