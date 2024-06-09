import CalendlyButton from "@/components/calendly-button";
import Header from "./_components/header/header";
import ImageCarousel from "./_components/header/image-carousel";
import Services from "./_components/services/services";
import Pricing from "./_components/pricing/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="text-white overflow-hidden">
      <CalendlyButton />
      <Header />
      <ImageCarousel />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
