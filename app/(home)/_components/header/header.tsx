"use client";

import HeaderButton from "./header-button";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Extras from "./extras";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative mb-20">
      <Extras />
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="2000"
        className="flex justify-center items-center mt-32 lg:mt-48"
      >
        <div className="flex flex-col items-center">
          <div className="mt-5 space-y-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-7xl font-bold">
              Tax Pro Accelerator
            </h1>
            <p className="text-[#c0c0c8] px-8 max-w-[700px] lg:p-0 text-center text-lg">
              Software is <b className="text-white">NOT</b> the business, People
              is <b className="text-white">OUR</b> business. We will help you
              grow your tax business and provide you all the resources you need
              to success.
            </p>
          </div>
          <HeaderButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
