const ServicesCard = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="relative flex items-center justify-center">
        <h1 className="absolute bottom-5 text-white/90 font-semibold text-2xl drop-shadow-2xl bg-transparent/5">
          {title}
        </h1>
        <img src={href} className="rounded-t-lg" />
      </div>
      <p className="text-center text-basetext bg-basedarker rounded-b-lg p-4">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
