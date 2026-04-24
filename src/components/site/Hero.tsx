import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBag from "@/assets/hero-bag.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero">
      {/* floating dots */}
      <span aria-hidden className="absolute left-[8%] top-24 h-3 w-3 rounded-full bg-primary/30 animate-float" />
      <span aria-hidden className="absolute left-[20%] bottom-20 h-2 w-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "1.2s" }} />
      <span aria-hidden className="absolute right-[15%] top-40 h-4 w-4 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "2s" }} />
      <span aria-hidden className="absolute right-[8%] bottom-24 h-2.5 w-2.5 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24 lg:py-28">
        <div className="md:col-span-7 md:pr-6">
          <span
            className="badge-soft animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            🏷️ Always 20% Off — Every Order
          </span>
          <h1
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            Bags Built for Quality.{" "}
            <span className="text-primary">Priced for Everyone.</span>
          </h1>
          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            We source directly from manufacturers so you never overpay. Premium bags. Honest prices.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "450ms" }}
          >
            <Link
              to="/shop"
              className="cta-glow group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.03]"
            >
              Explore Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-background px-7 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/5"
            >
              View All Products
            </Link>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <span className="inline-flex items-center gap-2"><span className="text-primary">⭐</span> Trusted by Customers</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-2"><span>🏭</span> Direct from Manufacturer</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-2"><span>🏷️</span> Always 20% Off</span>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-square max-w-md">
            <div aria-hidden className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={heroBag}
              alt="Premium navy laptop bag"
              width={1024}
              height={1024}
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(15,23,42,0.18)]"
              style={{ transform: "rotate(3deg)" }}
            />
            <div className="absolute -bottom-4 left-6 z-20 hidden rounded-2xl border border-border bg-background/90 p-3 shadow-[var(--shadow-card)] backdrop-blur md:block animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">Today's price</div>
              <div className="flex items-baseline gap-2">
                <span className="price-strike">₹2,499</span>
                <span className="price-now">₹1,999</span>
              </div>
            </div>
            <div className="absolute -right-2 top-6 z-20 hidden md:block animate-fade-in-up" style={{ animationDelay: "950ms" }}>
              <span className="badge-discount">20% Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
