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
          label="TaxPro Incubator"
          price="299"
          regular_price="699"
          features={[
            "Tax company cloud app",
            "Free training academy",
            "Branded taxes to go app",
            "Mentorship and marketing training",
            "Top tier tech support",
          ]}
          recommended={false}
        />
        <PricingCard
          label="TaxPro Accelerator"
          price="1499"
          regular_price="2499"
          features={[
            "Everything in TaxPro Incubator and:",
            "Advanced recruiting",
            "Website & Hosting plan",
            "Stripe checkout",
            "Jotform and Calendly",
          ]}
          recommended={true}
        />
        <PricingCard
          recommended={false}
          label="Service Incubator"
          price="3499"
          regular_price="4999"
          features={[
            "Same as TaxPro Accelerator and:",
            "Software Reseller Cloud App",
            "Build your own network",
            "Advanced recruiting",
            "Advance Mentorship & Marketing",
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
