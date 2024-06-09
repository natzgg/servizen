"use client";

import HeaderButton from "./header-button";

import Extras from "./extras";
import CompanySlider from "./company-slider";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative mb-20">
      {/* <Extras /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 100,
          transition: { delay: 0.2, duration: 1 },
        }}
        className="flex justify-center items-center mt-32 lg:mt-48"
      >
        <div className="flex flex-col items-center">
          <div className="mt-5 space-y-4 flex flex-col items-center justify-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-wrap text-center p-6 text-blue-500">
              Tax Pro Accelerator
            </h1>
            <p className="text-basetext px-8 max-w-[700px] lg:p-0 text-center text-lg">
              Software is <b className="text-white">NOT</b> the business, People
              is <b className="text-white">OUR</b> business. We will help you
              grow your tax business and provide you all the resources you need
              to success.
            </p>
          </div>
          <HeaderButton />
        </div>
      </motion.div>
      <CompanySlider />
    </div>
  );
};

export default Header;
