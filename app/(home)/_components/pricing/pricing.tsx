import PricingCard from "./pricing-card";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center mx-auto px-6 lg:px-16 my-20">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h1 className="font-bold text-3xl">Start your journey today</h1>
        <h2 className="text-basetext">Choose your plan and start now!</h2>
        <h2 className="text-basetext mt-5 font-semibold">
          Software and Training in English or Spanish
        </h2>
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
            "Buy now PAY LATER!",
            "Financing available",
            "As low as 0% APR",
          ]}
          recommended={false}
          index={1}
          href="product/taxproincubator"
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
            "Buy now PAY LATER!",
            "Financing available",
            "As low as 0% APR",
          ]}
          recommended={true}
          index={2}
          href="product/taxproaccelerator"
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
            "Buy now PAY LATER!",
            "Financing available",
            "As low as 0% APR",
          ]}
          index={3}
          href="product/serviceincubator"
        />
      </div>
    </div>
  );
};

export default Pricing;
