import Product from "@/components/single-product/product";
import { FaGlobe } from "react-icons/fa";
import { BiSolidCool } from "react-icons/bi";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";

const ProPage = () => {
  return (
    <div className="mb-20 text-white mt-36">
      <Product
        title="Pro"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima est nesciunt mollitia a magni maiores minus at, libero impedit"
        features={[
          {
            icon: FaGlobe,
            name: "Scalable",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus enim hic provident dignissimos assumenda in accusantium nemo, ab nam officiis perferendis vero illum maiores delectus! Ducimus pariatur sequi tempore minima",
          },
          {
            icon: BiSolidCool,
            name: "Super Cool",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus enim hic provident dignissimos assumenda in accusantium nemo, ab nam officiis perferendis vero illum maiores delectus! Ducimus pariatur sequi tempore minima",
          },
          {
            icon: FaBoltLightning,
            name: "Super Easy",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus enim hic provident dignissimos assumenda in accusantium nemo, ab nam officiis perferendis vero illum maiores delectus! Ducimus pariatur sequi tempore minima",
          },
          {
            icon: IoMdChatbubbles,
            name: "24/7 Support",
            description:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus enim hic provident dignissimos assumenda in accusantium nemo, ab nam officiis perferendis vero illum maiores delectus! Ducimus pariatur sequi tempore minima",
          },
        ]}
      />
    </div>
  );
};

export default ProPage;
