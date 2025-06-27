"use client"
import {motion} from "framer-motion"

import React from "react"


interface button {
    name : string
}


export const Button = (props : button) : React.ReactNode=> {
return (
    <motion.button 
    whileHover={{
        y: -2,
        scale : 1.01
    }}
    
    className="border-2 border-slate-500 cursor-pointer rounded-3xl px-4 py-2 hover:border-[#c73b0f]">{props.name}</motion.button>
)
}