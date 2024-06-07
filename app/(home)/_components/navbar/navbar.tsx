import Logo from "./logo";
import Navigation from "./navigation";
import TrainingButton from "./training-button";

const Navbar = () => {
  return (
    <nav className="fixed bg-black top-0 h-20 p-2 w-full lg:p-12 flex items-center justify-center z-10 text-white">
      <div className="flex items-center justify-between w-full lg:max-w-[80%] px-2 lg:p-0">
        <Logo />
        <Navigation />
        <TrainingButton />
      </div>
    </nav>
  );
};

export default Navbar;
