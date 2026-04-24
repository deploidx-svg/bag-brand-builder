import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya S.",
    city: "Bengaluru",
    text: "Genuinely surprised at the build quality. Feels like a bag twice the price. The 20% off is the cherry on top.",
  },
  {
    name: "Rahul M.",
    city: "Mumbai",
    text: "Ordered the laptop backpack — clean stitching, great padding, looks premium. Honest pricing, no gimmicks.",
  },
  {
    name: "Priya K.",
    city: "Delhi",
    text: "Bought the tote for daily office use. Compliments every week! Will definitely buy again from Akill.",
  },
];

export const Reviews = () => {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="mb-10 max-w-2xl">
        <span className="badge-soft">⭐ Customer Love</span>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">What Our Customers Say</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="relative rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <span className="absolute left-0 top-6 h-12 w-1 rounded-r-full bg-accent" />
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-foreground/80 leading-relaxed">"{r.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                {r.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
