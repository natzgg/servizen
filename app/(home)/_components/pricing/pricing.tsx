import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center mx-auto px-6 mt-20 lg:px-20">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold text-3xl">Start your journey today</h1>
        <h2 className="text-basetext">Choose your plan and start now!</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full min-h-full">
        <PricingCard
          label="Flex"
          price="299"
          features={[
            "Access to 10X Conference recordings",
            "Access to all previous content",
          ]}
          recommended={false}
        />
        <PricingCard
          recommended={true}
          label="Flex"
          price="299"
          features={["test", "test2"]}
        />
        <PricingCard
          label="Flex"
          price="299"
          features={[
            "test",
            "test2",
            "test",
            "test2",
            "test",
            "test2",
            "test",
            "test2",
          ]}
          recommended={false}
        />
      </div>
    </div>
  );
};

export default Pricing;
