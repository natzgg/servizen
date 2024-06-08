import { motion } from "framer-motion";
import {
  IoLogoAndroid,
  IoLogoPlaystation,
  IoLogoGithub,
  IoLogoChrome,
  IoLogoIonitron,
  IoLogoLinkedin,
  IoLogoDribbble,
  IoLogoTwitter,
} from "react-icons/io";

const slides = [
  { icon: <IoLogoAndroid /> },
  { icon: <IoLogoPlaystation /> },
  { icon: <IoLogoGithub /> },
  { icon: <IoLogoChrome /> },
  { icon: <IoLogoIonitron /> },
  { icon: <IoLogoLinkedin /> },
  { icon: <IoLogoDribbble /> },
  { icon: <IoLogoTwitter /> },
];

const Slider = () => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative h-full overflow-hidden py-6 mx-auto w-[80%] lg:w-[50%] xl:w-[30%]">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full after:filter after:blur-3"></div>

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full text-basetext">
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
