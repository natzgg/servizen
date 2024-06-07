import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-3 px-2">
      <Link href="/">
        <Image
          className="hover:scale-110 hover:opacity-85 transition duration-300"
          src="/taxpro_logo.webp"
          objectFit="cover"
          width={150}
          height={150}
          alt="jappy logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
