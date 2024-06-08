"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { MdGroups } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { PiListBold } from "react-icons/pi";

import Services from "./services";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const routes = [
    { label: "About Us", href: "/about", icon: MdGroups },
    { label: "Contact", href: "/contact", icon: GrContact },
  ];

  const buttonClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
      <div className="hidden xl:block">
        <ul className="flex gap-6 font-medium text-[17px]">
          <Services />
          {routes.map((route) => (
            <Link href={route.href}>
              <li key={route.href}>
                <div className="flex gap-2 items-center">
                  <route.icon className="w-5 h-5" />
                  {route.label}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <button onClick={buttonClick} className="lg:hidden relative">
        <PiListBold className="w-10 h-10" />
        {active && <div className="absolute">Testing</div>}
      </button>
    </>
  );
};

export default Navigation;
