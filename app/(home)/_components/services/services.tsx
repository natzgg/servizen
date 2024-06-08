const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 gap-10">
      {/* Title */}
      <div className="flex flex-col gap-5 items-center">
        <h1 className="font-semibold text-3xl">Our Services</h1>
        <h2 className="text-basetext text-center">
          All the tools & support you need for your personal & business growth
        </h2>
      </div>

      {/* Services Card */}
      <div className="flex flex-col">
        <div className="p-4">
          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGElMjBsb2NrfGVufDB8fDB8fHww"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
