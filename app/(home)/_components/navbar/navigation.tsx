"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FaHandshake, FaDev } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { GrPersonalComputer } from "react-icons/gr";
import { FaMoneyBill } from "react-icons/fa6";

const Navigation = () => {
  const pathname = usePathname();
  const routes = [
    { label: "About Us", href: "/about", icon: MdGroups },
    { label: "Contact", href: "/contact", icon: GrContact },
  ];

  const services = [
    {
      label: "Software Development",
      href: "/dev",
      icon: FaDev,
    },
    {
      label: "Staffing Agency",
      href: "/staff",
      icon: IoIosPeople,
    },
    {
      label: "Hackatons",
      href: "/hackatons",
      icon: GrPersonalComputer,
    },
    {
      label: "Non Profit",
      href: "/nonprofit",
      icon: FaMoneyBill,
    },
  ];
  return (
    <div className="">
      <ul className="flex gap-6 font-medium text-[17px]">
        <button className="group relative">
          <div className="flex items-center space-x-2 group">
            <FaHandshake className="h-5 w-5" />
            <span>Services</span>
            <IoIosArrowDown className="group-hover:rotate-180 transition duration-300" />
          </div>
          <div className="absolute rounded-md opacity-0 group-hover:opacity-100 duration-300 transition p-4 bg-gray-700 w-[250px] -translate-x-7">
            <ul className="flex text-md flex-col gap-2">
              {services.map((service) => (
                <li key={service.href}>
                  <div className="flex gap-2 items-center">
                    <service.icon className="w-5 h-5" />
                    {service.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </button>
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
      {/* <div className="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
        Hello
      </div> */}
    </div>
  );
};

export default Navigation;
