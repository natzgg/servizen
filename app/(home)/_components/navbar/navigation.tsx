"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { MdGroups } from "react-icons/md";
import { PiListBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { IoIosHome } from "react-icons/io";

import Services from "./services";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const routes = [
    { label: "Home", href: "/", icon: IoIosHome },
    { label: "About Us", href: "/about", icon: MdGroups },
  ];

  const buttonClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="hidden xl:block">
        <ul className="flex gap-6 font-medium text-[17px]">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <li key={route.href}>
                <div className="flex gap-2 items-center">
                  <route.icon className="w-5 h-5" />
                  {route.label}
                </div>
              </li>
            </Link>
          ))}
          <Services />
        </ul>
      </div>
      <button onClick={buttonClick} className="">
        <div className="lg:hidden relative flex items-center justify-center">
          <IoMdClose
            className={cn(
              "absolute right-0 w-10 h-10 opacity-0 duration-300 transition",
              active && "opacity-100 rotate-180"
            )}
          />
          <PiListBold
            className={cn(
              "absolute right-0 w-10 h-10 opacity-0 duration-300 transition",
              !active && "opacity-100 rotate-180"
            )}
          />
        </div>
        <div
          className={cn(
            "absolute pointer-events-none cursor-default p-4 opacity-0 transition w-full h-full right-0 -bottom-20 duration-300",
            active && "pointer-events-auto cursor-pointer opacity-100"
          )}
        >
          <ul className="bg-basedarker flex flex-col rounded-lg p-4 gap-2 font-semibold">
            {routes.map((route) => (
              <li key={route.href} className="self-start">
                <Link href={route.href}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
};

export default Navigation;
