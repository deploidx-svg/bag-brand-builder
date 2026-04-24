import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/#story" },
  { label: "Contact", href: "/#contact" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.66a11.84 11.84 0 0 0 5.69 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.46zM12.05 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.74 9.74 0 0 1-1.49-5.1c0-5.39 4.4-9.79 9.81-9.79 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.74-9.8 9.74zm5.37-7.3c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15s-.76.96-.93 1.16c-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.83 1.2 3.02c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.99-1.4.24-.69.24-1.27.17-1.4-.07-.12-.27-.2-.56-.34z" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-background"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-primary">
          akill<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button aria-label="Search" className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-primary md:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-whatsapp transition-transform hover:scale-110 md:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            aria-label={`Cart (${count})`}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 font-mono text-[10px] font-bold text-primary-foreground animate-pop">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:bg-secondary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-display text-2xl font-extrabold text-primary">akill<span className="text-accent">.</span></span>
          <button aria-label="Close" onClick={() => setOpen(false)} className="h-10 w-10 rounded-full hover:bg-secondary inline-flex items-center justify-center">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-5 pt-6">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="border-b border-border py-4 font-display text-2xl font-bold text-foreground">
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/919999999999" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-semibold text-whatsapp-foreground">
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export { WhatsAppIcon };
