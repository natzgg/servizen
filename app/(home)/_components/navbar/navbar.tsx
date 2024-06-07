import Logo from "./logo";
import Navigation from "./navigation";
import TrainingButton from "./training-button";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full p-12 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-[80%]">
        <Logo />
        <Navigation />
        <TrainingButton />
      </div>
    </nav>
  );
};

export default Navbar;
