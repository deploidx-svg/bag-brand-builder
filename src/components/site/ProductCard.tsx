import { Star } from "lucide-react";
import { Product, discounted } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: Props) => {
  const { add } = useCart();
  const [pop, setPop] = useState(false);
  const now = discounted(product.mrp);

  const handleAdd = () => {
    add();
    setPop(true);
    setTimeout(() => setPop(false), 400);
  };

  return (
    <article
      className="product-card animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-card">
        <span className="badge-discount absolute left-3 top-3 z-10">20% Off</span>
        <img
          src={product.image}
          alt={product.name}
          width={768}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-bold text-foreground md:text-lg">{product.name}</h3>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="badge-soft !py-0.5 !text-[10px]">{product.category}</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-mono font-bold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="price-strike">₹{product.mrp.toLocaleString("en-IN")}</span>
          <span className="price-now">₹{now.toLocaleString("en-IN")}</span>
        </div>
        <button
          onClick={handleAdd}
          className={cn(
            "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep cta-glow",
            pop && "animate-pop"
          )}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};
