"use client";

import { motion } from "framer-motion";

const ServicesCard = ({
  href,
  title,
  description,
  index,
}: {
  href: string;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 + index / 8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center p-4"
    >
      <div className="relative flex items-center justify-center">
        <h1 className="absolute bottom-5 text-white/90 font-semibold text-2xl drop-shadow-2xl bg-transparent/5">
          {title}
        </h1>
        <img src={href} className="rounded-t-lg" />
      </div>
      <p className="text-center text-basetext bg-basedarker rounded-b-lg p-4">
        {description}
      </p>
    </motion.div>
  );
};

export default ServicesCard;
