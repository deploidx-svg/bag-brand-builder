import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CategoryStrip } from "@/components/site/CategoryStrip";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Story } from "@/components/site/Story";
import { OffersBanner } from "@/components/site/OffersBanner";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main>
        <h1 className="sr-only">Akill — Quality bags at honest prices, always 20% off</h1>
        <Hero />
        <CategoryStrip />
        <FeaturedProducts />
        <Story />
        <OffersBanner />
        <Reviews />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
