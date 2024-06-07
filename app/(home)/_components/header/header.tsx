import HeaderButton from "./header-button";

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-32 lg:mt-48 z-[-1]">
      <div className="flex flex-col items-center">
        <h2 className="text-red-500 font-medium">
          Welcome to TaxPro Accelerator
        </h2>
        <div className="mt-5 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Grow your tax business
          </h1>
          <p className="text-[#808080] font-medium lg:w-[65%] text-center">
            Software is NOT the business, People is OUR business. We will help
            you grow your tax business.
          </p>
          <HeaderButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
