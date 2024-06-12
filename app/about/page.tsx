import Member from "./_components/member";
import AboutTitle from "./_components/title";

const About = () => {
  const members = [
    {
      name: "Raymond Stuart",
      imgUrl: "/ceo.avif",
      position: "Founder & CEO, Software Engineer",
    },
    {
      name: "Reyn Sandy",
      imgUrl: "/raymond.avif",
      position: "Co-Founder, CTO",
    },
    {
      name: "Dendi Rakiburk",
      imgUrl: "/dendi.avif",
      position: "Head of Sales and Marketing",
    },
  ];
  return (
    <div className="h-full w-full mt-36">
      <AboutTitle />
      <div className="grid grid-cols-1 lg:flex items-center justify-center gap-5">
        {members.map((member) => (
          <Member
            key={member.imgUrl}
            name={member.name}
            imgUrl={member.imgUrl}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
