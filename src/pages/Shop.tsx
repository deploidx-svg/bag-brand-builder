import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, Category, discounted } from "@/data/products";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Sort = "popular" | "low" | "high" | "new";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") as Category | null;
  const [selected, setSelected] = useState<Category[]>(initialCat ? [initialCat] : []);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState<Sort>("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (selected.length === 1) setParams({ category: selected[0] }, { replace: true });
    else setParams({}, { replace: true });
  }, [selected, setParams]);

  const toggleCat = (c: Category) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  const list = useMemo(() => {
    let l = products.filter((p) => discounted(p.mrp) <= maxPrice);
    if (selected.length) l = l.filter((p) => selected.includes(p.category));
    switch (sort) {
      case "low": l = [...l].sort((a, b) => discounted(a.mrp) - discounted(b.mrp)); break;
      case "high": l = [...l].sort((a, b) => discounted(b.mrp) - discounted(a.mrp)); break;
      case "new": l = [...l].reverse(); break;
      default: l = [...l].sort((a, b) => b.reviews - a.reviews);
    }
    return l;
  }, [selected, maxPrice, sort]);

  const Filters = (
    <aside className="space-y-8">
      <div>
        <h3 className="font-display text-base font-bold">Category</h3>
        <ul className="mt-4 space-y-3">
          {categories.map((c) => (
            <li key={c.name}>
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-primary"
                  checked={selected.includes(c.name)}
                  onChange={() => toggleCat(c.name)}
                />
                <span className="text-foreground/80">{c.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-base font-bold">Price</h3>
        <div className="mt-4 space-y-2">
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>₹500</span>
            <span className="font-bold text-primary">Up to ₹{maxPrice.toLocaleString("en-IN")}</span>
            <span>₹5,000</span>
          </div>
        </div>
      </div>
      {(selected.length > 0 || maxPrice < 5000) && (
        <button
          onClick={() => { setSelected([]); setMaxPrice(5000); }}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Clear all filters
        </button>
      )}
    </aside>
  );

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <div className="container-x py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Shop</span>
        </nav>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold md:text-5xl">All Bags</h1>
            <p className="mt-1 text-muted-foreground">
              {list.length} product{list.length !== 1 && "s"} · Always 20% off
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFiltersOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="popular">Popular</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="new">Newest</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr] lg:gap-12">
          <div className="hidden md:block">{Filters}</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
            {list.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background transition-transform duration-300 md:hidden",
          filtersOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="font-display text-xl font-bold">Filters</span>
          <button onClick={() => setFiltersOpen(false)} aria-label="Close" className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">{Filters}</div>
        <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background p-4">
          <button onClick={() => setFiltersOpen(false)} className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground">
            Show {list.length} results
          </button>
        </div>
      </div>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Shop;
