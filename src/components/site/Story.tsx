const stats = [
  { big: "4", label: "Categories", sub: "Bags for every need" },
  { big: "20%", label: "Off", sub: "On every single order" },
  { big: "0", label: "Middlemen", sub: "Direct from manufacturer" },
];

export const Story = () => {
  return (
    <section id="story" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(220 100% 97%) 0%, hsl(0 0% 100%) 60%, hsl(262 100% 98%) 100%)",
        }}
      />
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="space-y-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-5 rounded-2xl border border-border bg-background/70 p-6 backdrop-blur shadow-[var(--shadow-card)]"
            >
              <div className="font-display text-5xl font-extrabold text-primary md:text-6xl">{s.big}</div>
              <div>
                <div className="font-display text-xl font-bold">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <span className="badge-soft w-fit">Our Story</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            We Were Tired of <span className="text-primary">Overpriced Bags.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            We saw people paying too much for the same bags available at fair prices. So we went straight
            to quality manufacturers, cut out every middleman, and built a brand around one simple idea —
            <span className="font-semibold text-foreground"> great bags shouldn't cost a fortune.</span>
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">100%</div>
              <div className="text-muted-foreground">Quality checked</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">7-day</div>
              <div className="text-muted-foreground">Easy returns</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Free</div>
              <div className="text-muted-foreground">Shipping ₹999+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
