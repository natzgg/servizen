import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-3 px-2">
        <Image
          className="hover:scale-110 hover:opacity-85 transition duration-300"
          src="/taxpro_logo.webp"
          height={170}
          width={170}
          alt="jappy logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
