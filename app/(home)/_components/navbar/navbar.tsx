import Logo from "./logo";
import Navigation from "./navigation";
import TrainingButton from "./training-button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 lg:top-10 h-20 w-full p-12 flex items-center justify-center z-10 text-white">
      <div className="flex bg-basedarker items-center justify-between w-full p-2 md:rounded-full lg:w-2/3">
        <Logo />
        <Navigation />
        <TrainingButton />
      </div>
    </nav>
  );
};

export default Navbar;
