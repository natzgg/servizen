import { IconType } from "react-icons";
import ProductTitle from "./title";
import Features from "./features";
import { Feature } from "@/lib/types";
import PurchaseButton from "./purchase-button";

type ProductProps = {
  title: string;
  subtitle: string;
  features?: Feature[];
};

const Product = ({ title, subtitle, features }: ProductProps) => {
  return (
    <div>
      <ProductTitle title={title} subtitle={subtitle} />
      {/*Features */}
      <Features features={features} />
      <PurchaseButton />
    </div>
  );
};

export default Product;
