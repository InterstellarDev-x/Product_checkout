"use client"

import { motion , useScroll, useTransform } from "framer-motion"
import Image from "next/image";

export const Navbar = () => {


  const { scrollY  } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, .1])

  

  return (
    <div
      className={`w-full flex justify-center items-center z-50 transition-all duration-300 fixed  `}
    >
      <motion.div
        style={{ opacity }}
        whileHover={{ scale: 1.01, y: -2 }}
        transition={{ duration: 0.05, ease: "easeInOut" }}
        className="w-[90%] h-14 rounded-2xl m-2 py-2 px-4 transition-all duration-300 bg-[#c73b0f] flex items-center justify-between"
      >
        {/* Left side: Logo and Brand */}
        <div className="flex items-center space-x-3 ">
          <Image src="/logo2.svg" alt="Logo"   height={40} width={40}/>
          <span className="text-white font-semibold text-lg">ProductKart</span>
        </div>

        {/* Right side: Navigation buttons */}
        <div className="flex space-x-6 text-white font-medium">
          <button className="hover:underline cursor-pointer">Home</button>
          <button className="hover:underline cursor-pointer">Orders</button>
          <button className="hover:underline cursor-pointer">Logout</button>
        </div>
      </motion.div>
    </div>
  );
};