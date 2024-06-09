import ServicesCard from "./services-card";

const Services = () => {
  const services = [
    {
      href: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGElMjBsb2NrfGVufDB8fDB8fHww",
      title: "Encrypted Data",
      description:
        "Work remotely and enjoy peace of mind knowing that your information is protected with high level encryption.",
    },
    {
      href: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxlYXJufGVufDB8fDB8fHww",
      title: "Learn & Grow",
      description:
        "Our proven training and marketing program will help you close more clients and allow you to focus on growing.",
    },
    {
      href: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Taxes To Go!",
      description:
        "Reach more clients and prepare tax returns in less time. Chat with your clients in real time from within the app.",
    },
    {
      href: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mentorship",
      description:
        "Schedule individual advanced Marketing and Hiring Strategies (eg: email, social media, job-websites).",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 gap-10">
      {/* Title */}
      <div className="flex flex-col gap-5 items-center p-4">
        <h1 className="font-semibold text-3xl">Our Services</h1>
        <h2 className="text-basetext text-center">
          All the tools & support you need for your personal & business growth
        </h2>
      </div>

      {/* Services Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full justify-items-center">
        {services.map((service) => (
          <ServicesCard
            key={service.href}
            href={service.href}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
