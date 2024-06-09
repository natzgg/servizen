import Image from "next/image";

const Extras = () => {
  return (
    <div className="hidden lg:block z-[-1]">
      <Image
        className="absolute left-56 brightness-200 -top-10 filter"
        height={150}
        width={150}
        alt="extra_1"
        src="/extra_1.avif"
      />
      <Image
        className="absolute brightness-100 top-24 left-10"
        height={250}
        width={250}
        alt="extra_2"
        src="/extra_2.avif"
      />
      <Image
        className="absolute brightness-100 -left-24"
        height={170}
        width={170}
        alt="extra_3"
        src="/extra_3.avif"
      />
      <Image
        className="absolute brightness-100 -left-36 rotate-12 top-48"
        height={170}
        width={180}
        alt="extra_4"
        src="/extra_4.avif"
      />
      <Image
        className="absolute brightness-100 left-52 rotate-24 top-52"
        height={250}
        width={250}
        alt="extra_5"
        src="/extra_5.avif"
      />
      <Image
        className="absolute brightness-100 right-52 rotate-24 top-52"
        height={250}
        width={250}
        alt="extra_6"
        src="/extra_6.avif"
      />
      <Image
        className="absolute brightness-200 right-52 -top-10 rotate-12"
        height={140}
        width={140}
        alt="extra_7"
        src="/extra_7.avif"
      />
      <Image
        className="absolute brightness-150 right-12 top-12 rotate-6"
        height={210}
        width={210}
        alt="extra_8"
        src="/extra_8.avif"
      />
      <Image
        className="absolute brightness-150 -right-36 top-48 rotate-6"
        height={210}
        width={210}
        alt="extra_9"
        src="/extra_9.avif"
      />
    </div>
  );
};

export default Extras;
