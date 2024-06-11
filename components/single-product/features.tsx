import { IconType } from "react-icons";
import FeatureCard from "./feature-card";

type Feature = {
  icon: IconType;
  name: string;
  description: string;
};

const Features = ({ features }: { features?: Feature[] }) => {
  return (
    <div>
      <FeatureCard />
    </div>
  );
};

export default Features;
