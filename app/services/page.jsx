"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = [
  {
    num: '01',
    title: "Web development",
    description: "Full-Stack Development – Combining both frontend and backend skills to build complete web applications.",
    href: ""
  },
  {
    num: '02',
    title: "UI/UX",
    description: "UI/UX (User Interface & User Experience) Design focuses on creating visually appealing and user-friendly web applications.",
    href: ""
  },
  {
    num: '03',
    title: "Logo",
    description: "A good logo is simple, memorable, versatile, and relevant to the brand's identity.",
    href: ""
  },
]



const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: .4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {Services.map((key, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-center items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{key.num}</div>
                <Link href={key.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{key.title}</h2>
              <p className="text-white/60">{key.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Service;