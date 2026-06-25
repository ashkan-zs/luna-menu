export default function RestaurantMenuLoading() {
  return (
    <main className="min-h-screen bg-theme-bg px-5 py-8 text-theme-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="h-[58svh] rounded-[2rem] bg-white/6" />
        <div className="mt-8 h-10 w-2/3 rounded-full bg-white/8" />
        <div className="mt-6 flex gap-3 overflow-hidden">
          <div className="h-11 w-28 shrink-0 rounded-full bg-white/8" />
          <div className="h-11 w-28 shrink-0 rounded-full bg-white/8" />
          <div className="h-11 w-28 shrink-0 rounded-full bg-white/8" />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="h-56 rounded-[1.5rem] bg-white/7" />
          <div className="h-56 rounded-[1.5rem] bg-white/7" />
        </div>
      </div>
    </main>
  );
}
