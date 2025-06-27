"use client"

import { motion , useScroll, useTransform } from "framer-motion"

export const Navbar = () => {


  const { scrollY  } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, .1])

  

  return (
    <div
      className={`w-full flex justify-center items-center z-50 transition-all duration-300 fixed  `}
    >
      <motion.div
      style={{opacity}}

      whileHover={{
        scale: 1.01,
        y : -2
      }}

      transition={{
        duration : .1,
        ease : "easeInOut"
      }}
        className={`w-[90%] h-14 rounded-2xl m-2 py-2 px-4 transition-all duration-300 bg-[#c73b0f] flex items-center `}
      >
        hello
      </motion.div>
    </div>
  );
};