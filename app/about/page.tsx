import Member from "./_components/member";
import AboutTitle from "./_components/title";

const About = () => {
  const members = [
    {
      name: "Jose Tollinchi",
      imgUrl: "/jose.webp",
      position: "Founder & CEO, Software Engineer",
    },
    {
      name: "Lucy Tollinchi",
      imgUrl: "/lucy.jpg",
      position: "Founder & CEO, Trainer",
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
