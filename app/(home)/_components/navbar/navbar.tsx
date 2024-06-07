import Logo from "./logo";
import Navigation from "./navigation";
import TrainingButton from "./training-button";

const Navbar = () => {
  return (
    <nav className="p-2 bg-transparent w-full lg:p-12 flex items-center justify-center">
      <div className="flex items-center justify-between w-full lg:max-w-[80%] px-2 lg:p-0">
        <Logo />
        <Navigation />
        <TrainingButton />
      </div>
    </nav>
  );
};

export default Navbar;
