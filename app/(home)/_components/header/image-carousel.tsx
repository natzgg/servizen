"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ImageCarousel = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 items-center">
      <motion.ul
        initial={{ translateX: -100 }}
        whileInView={{
          translateX: 0,
          transition: { delay: 0.1, duration: 1.7 },
        }}
        viewport={{ amount: "some" }}
        className={cn(
          "flex gap-4 justify-center items-center w-48 h-48 lg:h-96 lg:w-96"
        )}
      >
        <img
          src="https://assets-global.website-files.com/63afa405041e026d00a2a8f5/63afa405041e02e531a2aa61_1tech3-p-500.png"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://assets-global.website-files.com/63afa405041e026d00a2a8f5/63afa405041e020f40a2aa5c_1tech-p-500.png"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://assets-global.website-files.com/63afa405041e026d00a2a8f5/63afa405041e021407a2aa51_slideriamge-p-500.png"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://assets-global.website-files.com/63afa405041e026d00a2a8f5/63afa405041e0241a4a2aa63_1tech6-p-500.png"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://picsum.photos/id/7/600"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
      </motion.ul>

      <motion.ul
        initial={{ translateX: 100 }}
        whileInView={{
          translateX: 0,
          transition: { delay: 0.2, duration: 1 },
        }}
        className={cn(
          "flex gap-4 justify-center items-center w-48 h-48 lg:h-96 lg:w-96"
        )}
      >
        <img
          src="https://assets-global.website-files.com/63afa405041e026d00a2a8f5/63afa405041e0212f5a2aa64_1tech5-p-500.png"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://picsum.photos/id/175/600"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
        <img
          src="https://picsum.photos/id/9/600"
          className="rounded-xl object-cover hover:scale-[1.03] duration-500"
        />
      </motion.ul>
    </div>
  );
};

export default ImageCarousel;
