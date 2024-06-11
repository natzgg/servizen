"use client";
import { motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";

const ShinyButton = () => {
  return (
    <div className="fixed h-12 bottom-5 right-5 z-30">
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
        className="py-1 px-3 rounded-lg relative radial-gradient bg-blue-600 shadow-sm shadow-white"
      >
        <div className="flex items-center gap-2 text-white">
          <FcCalendar className="w-6 h-6" />
          <div className="flex flex-col items-start text-neutral-100 h-full w-full relative linear-mask">
            <span className="font-bold text-sm">Book an appointment!</span>
            <span className="italic text-[10px] font-semibold">
              Powered by Calendly
            </span>
          </div>
        </div>

        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.button>
    </div>
  );
};

export default ShinyButton;
