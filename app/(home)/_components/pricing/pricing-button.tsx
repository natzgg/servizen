"use client";

import { cn } from "@/lib/utils";

const PricingButton = ({
  title,
  recommended,
}: {
  title: string;
  recommended: boolean;
}) => {
  return (
    <div className="w-full mt-5">
      <button
        className={cn(
          "py-3 rounded-lg w-full",
          recommended
            ? "bg-basedarker"
            : "ring-1 ring-white hover:ring-white/70 duration-300"
        )}
      >
        <span className="font-semibold text-sm">Choose {title} plan</span>
      </button>
    </div>
  );
};

export default PricingButton;
