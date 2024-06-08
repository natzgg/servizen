import Slider from "@/components/slider";

const CompanySlider = () => {
  return (
    <div className="flex items-center flex-col mt-20 lg:mt-48">
      <p className="text-basetext text-sm">
        We help businesses from top companies.
      </p>
      <Slider />
    </div>
  );
};

export default CompanySlider;
