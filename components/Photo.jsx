"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative"
      >
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          className="w-[220px] h-[220px] sm:w-[298px] sm:h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten relative z-10"
        >
          <Image
            src="/assets/photo.png"
            width={400}
            height={400}
            priority
            quality={100}
            alt="Rachit Pal's profile photo"
            className="object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* Animated Circular Stroke */}
        <motion.svg
          className="absolute inset-0 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px]"
          viewBox="0 0 510 510"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="255"
            cy="255"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 1000", rotate: 0 }}
            animate={{
              strokeDasharray: ["50 800", "100 700", "150 600"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
