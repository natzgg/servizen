"use client";

const PricingButton = ({ title }: { title: string }) => {
  return (
    <div className="px-4 w-full">
      <button className="py-2 ring-1 ring-white rounded-lg w-full">
        <span className="font-semibold">Choose {title} plan</span>
      </button>
    </div>
  );
};

export default PricingButton;
