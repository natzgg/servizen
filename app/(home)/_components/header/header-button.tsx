import Link from "next/link";

const HeaderButton = () => {
  return (
    <div className="pt-4">
      <div className="relative inline-flex group hover:scale-110 transition duration-300">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="#"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Start your journey
        </Link>
      </div>
    </div>
  );
};

export default HeaderButton;
