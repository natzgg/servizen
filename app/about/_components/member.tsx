import Image from "next/image";

type MemberProps = {
  name: string;
  imgUrl: string;
  position: string;
};

const Member = ({ name, imgUrl, position }: MemberProps) => {
  return (
    <div className="p-2">
      <div className="rounded-lg w-full text-white">
        <div className="flex flex-col gap-2 items-center justify-center p-4">
          <Image
            src={imgUrl}
            alt={name}
            height={160}
            width={200}
            className="rounded-lg"
          />

          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-center text-baseblue text-lg">
              {name}
            </h1>
            <h2 className="font-semibold text-sm">{position}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
