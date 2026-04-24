import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export const CategoryStrip = () => {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">Find the bag that fits your day.</p>
        </div>
        <Link to="/shop" className="hidden text-sm font-semibold text-primary hover:underline md:inline">
          View all →
        </Link>
      </div>

      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:px-0 md:overflow-visible">
        {categories.map((c) => (
          <Link
            key={c.name}
            to={`/shop?category=${encodeURIComponent(c.name)}`}
            className="group relative min-w-[70%] snap-start overflow-hidden rounded-[20px] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] sm:min-w-[55%] md:min-w-0"
          >
            <span className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            <div className="flex h-44 items-end">
              <div className="text-6xl transition-transform duration-300 group-hover:scale-110 md:text-7xl">
                {c.emoji}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold text-primary">
                Shop now <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
