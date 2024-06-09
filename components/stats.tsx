import Counter from "@/components/counter";

const Stats = () => {
  return (
    <div className="p-4 flex items-center justify-center my-20">
      <div className="flex flex-col gap-6 w-full p-4 items-center justify-center">
        <h1 className="font-semibold text-2xl text-center">
          Trusted by different businesses!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <div className="p-8 rounded-lg bg-basedarker flex flex-col items-center">
            <span className="font-bold text-7xl">
              <Counter value={9} direction="up" />+
            </span>
            <span className="text-white font-semibold">
              Years in Tax Business
            </span>
          </div>

          <div className="p-8 rounded-lg bg-basedarker flex flex-col items-center">
            <span className="font-bold text-7xl">
              <Counter value={500} direction="up" />+
            </span>
            <span className="text-white font-semibold">Business Partners</span>
          </div>

          <div className="p-8 rounded-lg bg-basedarker flex flex-col items-center">
            <span className="font-bold text-7xl">
              <Counter value={7000} direction="up" />+
            </span>
            <span className="text-white font-semibold">Clients Served</span>
          </div>

          <div className="p-8 rounded-lg bg-basedarker flex flex-col items-center">
            <span className="font-bold text-7xl">
              <Counter value={95} direction="up" />%
            </span>
            <span className="text-white font-semibold">Funding Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
