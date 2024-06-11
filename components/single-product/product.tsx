import { IconType } from "react-icons";
import ProductTitle from "./title";

type Feature = {
  icon: IconType;
  name: string;
  description: string;
};

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
    </div>
  );
};

export default Product;
