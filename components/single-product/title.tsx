const ProductTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 mx-auto text-pretty px-6 md:px-0">
      <h1 className="font-bold text-5xl text-baseblue text-center">{title}</h1>
      <h2 className="tracking-wide text-basetext text-center text-sm">
        {subtitle}
      </h2>
    </div>
  );
};

export default ProductTitle;
