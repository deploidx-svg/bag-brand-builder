import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import { WhatsAppIcon } from "./Navbar";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-dark-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl font-extrabold text-primary-foreground">
            akill<span className="text-accent">.</span>
          </span>
          <p className="mt-3 max-w-xs text-sm font-semibold text-dark-foreground/90">Affordable but Stylish.</p>
          <p className="mt-2 max-w-xs text-sm text-dark-foreground/60">
            Quality bags sourced direct from manufacturers. Always 20% off, every order.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dark-foreground/80">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-dark-foreground/70 hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/shop" className="text-dark-foreground/70 hover:text-primary-foreground">Shop</Link></li>
            <li><a href="#story" className="text-dark-foreground/70 hover:text-primary-foreground">About</a></li>
            <li><a href="#contact" className="text-dark-foreground/70 hover:text-primary-foreground">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dark-foreground/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@akill.in" className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-primary-foreground">
                <Mail className="h-4 w-4" /> hello@akill.in
              </a>
            </li>
            <li>
              <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-whatsapp">
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-primary-foreground">
                <Instagram className="h-4 w-4" /> @akill.bags
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-dark-foreground/50 md:flex-row">
          <span>© 2025 Akill. All rights reserved.</span>
          <span className="font-mono">Made with ♥ in India</span>
        </div>
      </div>
    </footer>
  );
};
