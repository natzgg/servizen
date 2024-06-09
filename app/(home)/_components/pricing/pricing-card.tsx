import { GoPlus } from "react-icons/go";
import { cn } from "@/lib/utils";
import PricingButton from "./pricing-button";
const PricingCard = ({
  label,
  price,
  features,
  recommended,
}: {
  label: string;
  price: string;
  features: String[];
  recommended: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-lg bg-basedarker flex flex-col items-center justify-between",
        recommended && "bg-blue-600"
      )}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center items-center p-2 border-white border-b-2 space-y-2 pb-6">
          <h2 className="text-xl font-semibold">{label}</h2>
          <h1 className="text-5xl font-bold">${price}</h1>
          <h3 className="text-basetext">Per year</h3>
        </div>
        <div className="flex flex-col gap-2 py-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="text-xs font-semibold flex items-center gap-2"
            >
              <GoPlus className="w-5 h-5" />
              {feature}
            </div>
          ))}
        </div>
      </div>
      <PricingButton title={label} />
    </div>
  );
};

export default PricingCard;
