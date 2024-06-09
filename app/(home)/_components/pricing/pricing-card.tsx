import { GoPlus } from "react-icons/go";
import { cn } from "@/lib/utils";
import PricingButton from "./pricing-button";
import { FaRegStar } from "react-icons/fa";

const PricingCard = ({
  label,
  price,
  features,
  recommended,
  regular_price,
}: {
  label: string;
  price: string;
  regular_price: string;
  features: String[];
  recommended: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative p-8 rounded-lg bg-basedarker flex flex-col items-center justify-between",
        recommended && "bg-blue-600"
      )}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center border-white border-b-2 gap-2">
          <span className="line-through text-basetext font-semibold">
            ${regular_price}
          </span>
          <div className="flex flex-col justify-center items-center p-2 space-y-2 pb-6">
            <h2 className="text-lg font-semibold text-center">{label}</h2>
            <h1 className="text-5xl font-bold">${price}</h1>
            <h3 className="text-basetext">Per year</h3>
          </div>
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
      {recommended && (
        <div className="absolute p-2 rounded-full bg-blue-800 rotate-45 -right-7 top-2 font-semibold">
          Recommended
        </div>
      )}
      <PricingButton title={label} recommended={recommended} />
    </div>
  );
};

export default PricingCard;
