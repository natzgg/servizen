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
          label="Starter"
          price="299"
          regular_price="699"
          features={[
            "Cloud app",
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
          href="product/starter"
        />
        <PricingCard
          label="Flex"
          price="1499"
          regular_price="2499"
          features={[
            "Everything in Starter and:",
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
          href="product/flex"
        />
        <PricingCard
          recommended={false}
          label="Pro"
          price="3499"
          regular_price="4999"
          features={[
            "Same as Flex and:",
            "Software Reseller Cloud App",
            "Build your own network",
            "Advanced recruiting",
            "Advance Mentorship & Marketing",
            "Buy now PAY LATER!",
            "Financing available",
            "As low as 0% APR",
          ]}
          index={3}
          href="product/pro"
        />
      </div>
    </div>
  );
};

export default Pricing;
