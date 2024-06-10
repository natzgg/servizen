import Footer from "@/components/footer";
import Navbar from "../(home)/_components/navbar/navbar";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AboutLayout;
