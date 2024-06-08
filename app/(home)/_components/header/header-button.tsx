const HeaderButton = () => {
  return (
    <div className="ring-2 ring-offset-0 ring-blue-400 rounded-md bg-basenormal mt-10 cursor-pointer">
      <input
        placeholder="Enter your email"
        className="p-4 focus:outline-none text-black border border-r-0 rounded rounded-r-none"
      ></input>
      <button className="h-full px-4 font-semibold hover:scale-110 transition">
        Subscribe
      </button>
    </div>
  );
};

export default HeaderButton;
