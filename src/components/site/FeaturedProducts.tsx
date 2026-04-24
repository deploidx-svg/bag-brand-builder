import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mb-10 flex flex-col items-start gap-3">
        <span className="badge-soft">✨ Bestsellers</span>
        <h2 className="font-display text-3xl font-bold md:text-5xl">Our Most-Loved Bags</h2>
        <p className="text-muted-foreground md:text-lg">Quality you can feel. Prices that make sense.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
};
