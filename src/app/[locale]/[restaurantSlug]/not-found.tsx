import Link from "next/link";

export default function RestaurantMenuNotFound() {
  return (
    <main className="flex min-h-screen items-center bg-theme-bg px-5 py-16 text-theme-text sm:px-8">
      <section className="mx-auto max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-theme-accent/75">
          Luna Menu
        </p>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-theme-text-strong sm:text-5xl">
          This menu is not available.
        </h1>
        <p className="mt-5 text-base leading-7 text-theme-text-muted/70">
          The restaurant menu may be unpublished, moved, or not ready to share
          yet. Please check the QR code or ask the restaurant team for the
          current menu link.
        </p>
        <p className="mt-4 text-sm leading-6 text-theme-text-muted/55">
          Menü şu anda yayında olmayabilir. Lütfen QR kodu kontrol edin veya
          restoran ekibinden güncel menü bağlantısını isteyin.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-theme-accent/30 bg-theme-accent/14 px-6 text-sm font-medium text-theme-text-soft transition hover:bg-theme-accent/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/80"
        >
          Luna Menu
        </Link>
      </section>
    </main>
  );
}
