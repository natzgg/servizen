import { IoIosArrowDown } from "react-icons/io";
import { FaHandshake, FaDev } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GrPersonalComputer } from "react-icons/gr";
import { FaMoneyBill } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
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
    <button className="group relative">
      <div className="flex items-center space-x-2 group">
        <FaHandshake className="h-5 w-5" />
        <span>Services</span>
        <IoIosArrowDown className="group-hover:rotate-180 transition duration-300" />
      </div>
      <div className="absolute rounded-md opacity-0 group-hover:opacity-100 duration-300 transition p-4 bg-basedarker w-[250px] -translate-x-7">
        <ul className="flex text-md flex-col gap-2">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <li key={service.href}>
                <div className="flex gap-2 items-center">
                  <service.icon className="w-5 h-5" />
                  {service.label}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default Services;
