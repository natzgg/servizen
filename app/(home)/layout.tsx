import Navbar from "./_components/navbar/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
