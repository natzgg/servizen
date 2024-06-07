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
    <div className="relative h-full">
      <Extras />
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="2000"
        className="flex justify-center items-center mt-32 lg:mt-48"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-red-500 font-medium">
            Welcome to TaxPro Accelerator
          </h2>
          <div className="mt-5 space-y-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Grow your tax business
            </h1>
            <p className="text-[#808080] font-medium px-8 md:w-[65%] lg:p-0 text-center text-sm">
              Software is NOT the business, People is OUR business. We will help
              you grow your tax business.
            </p>
            <HeaderButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
