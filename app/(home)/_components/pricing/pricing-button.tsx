"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const PricingButton = ({
  title,
  recommended,
  href,
}: {
  title: string;
  recommended: boolean;
  href: string;
}) => {
  return (
    <Link href={href} className="w-full mt-5">
      <button
        className={cn(
          "py-3 px-2 rounded-lg w-full",
          recommended
            ? "bg-basedarker"
            : "ring-1 ring-white hover:ring-white/70 duration-300"
        )}
      >
        <span className="font-bold uppercase">Choose {title}</span>
      </button>
    </Link>
  );
};

export default PricingButton;
