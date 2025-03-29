"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// 🔹 Project Data
const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Project One",
    description: "A cool project built with modern technologies.",
    stack: ["Php(Laravel)", "CSS3", "JavaScript"],
    image: "/assets/work/project1.png",
    github: "https://github.com/rachit-18/tech_forum",
  },
  {
    num: "02",
    category: "Machine Learning",
    title: "AI Model",
    description: "An advanced AI model built using TensorFlow.",
    stack: ["Python", "TensorFlow", "Flask"],
    image: "/project2.png",
    live: "https://example-ai.com",
    github: "https://github.com/example-ai",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  // 🔹 Update Project on Slide Change
  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          {/* 🔹 Left Content */}
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px]">
              <div className="text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>

              {/* 🔹 Tech Stack */}
              <ul className="flex gap-3">
                {project.stack.map((tech, index) => (
                  <li key={index} className="text-lg text-accent">
                    {tech}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20 my-4"></div>
            </div>
          </div>

          {/* 🔹 Right Content */}
          <div className="w-full xl:w-[50%] flex justify-center items-center">
            <Image
              src={project.image || "/default-image.png"}
              width={400}
              height={300}
              alt={project.title}
              className="rounded-lg object-cover"
            />
          </div>

          {/* 🔹 Buttons */}
          <div className="flex items-center gap-4">
            {project.live && (
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )}

            {project.github && (
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )}
          </div>

          {/* 🔹 Swiper Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="xl:h-[520px] mb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-black/20 rounded-lg">
                  <Image
                    src={project.image || "/default-image.png"}
                    fill
                    className="object-cover rounded-lg"
                    alt={project.title}
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* 🔹 Navigation Buttons */}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
