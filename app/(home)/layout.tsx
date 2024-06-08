import { Onest } from "next/font/google";
import Navbar from "./_components/navbar/navbar";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`h-screen ${onest.className}`}>
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
