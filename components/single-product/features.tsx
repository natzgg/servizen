import FeatureCard from "./feature-card";
import { Feature } from "@/lib/types";

const Features = ({ features }: { features?: Feature[] }) => {
  return (
    <div className="lg:max-w-[80%] lg:mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {features?.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
