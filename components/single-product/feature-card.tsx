import { Feature } from "@/lib/types";
import { FaGlobe } from "react-icons/fa";

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="p-2">
      <div className="p-4 flex gap-2">
        <div className="rounded-lg bg-blue-700 p-4 h-1/2">
          <feature.icon className="w-7 h-7" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-lg">{feature.name}</h1>
          <p className="text-left text-pretty text-basetext text-sm">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
