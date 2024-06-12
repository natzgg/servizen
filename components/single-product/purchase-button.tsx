"use client";
import { motion } from "framer-motion";

const PurchaseButton = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <motion.button
        /* @ts-ignore */
        initial={{ "--x": "100%", scale: 1 }}
        /* @ts-ignore */
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="py-3 px-6 rounded-lg relative radial-gradient bg-blue-700"
      >
        <div className="flex flex-col items-start text-neutral-100 h-full w-full relative linear-mask">
          <span className="font-bold text-lg">Purchase Now!</span>
        </div>

        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </div>
  );
};

export default PurchaseButton;
