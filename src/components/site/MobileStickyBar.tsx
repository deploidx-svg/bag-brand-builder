import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WhatsAppIcon } from "./Navbar";

export const MobileStickyBar = () => {
  const { count } = useCart();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/919999999999"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
        <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground">
          <ShoppingBag className="h-5 w-5" /> Cart {count > 0 && `(${count})`}
        </button>
      </div>
    </div>
  );
};
