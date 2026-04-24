const items = [
  "🏷️ ALWAYS 20% OFF",
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "QUALITY GUARANTEED",
  "DIRECT FROM MANUFACTURER",
  "🏷️ ALWAYS 20% OFF",
  "7-DAY EASY RETURNS",
];

export const OffersBanner = () => {
  return (
    <section className="overflow-hidden bg-primary-deep py-4 text-primary-foreground">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 inline-flex items-center font-mono text-sm font-bold uppercase tracking-widest">
            {it}
            <span className="ml-8 inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
          </span>
        ))}
      </div>
    </section>
  );
};
