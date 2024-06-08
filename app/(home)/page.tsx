import Header from "./_components/header/header";
import ImageCarousel from "./_components/header/image-carousel";
import Services from "./_components/services/services";

export default function Home() {
  return (
    <div className="text-white h-full w-full overflow-x-hidden">
      <Header />
      <ImageCarousel />
      <Services />
    </div>
  );
}
