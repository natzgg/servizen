import Header from "./_components/header/header";
import ImageCarousel from "./_components/header/image-carousel";

export default function Home() {
  return (
    <div className="text-white h-full w-full overflow-x-hidden">
      <Header />
      <ImageCarousel />
    </div>
  );
}
