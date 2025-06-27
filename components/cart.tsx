import Image from "next/image"
import React from "react"

export const  Cart = () : React.ReactNode=> {

    return (
        <div className="fixed">
            <div className="text-[#c73b0f] font-bold text-4xl relative top-20 left-10">Your Cart ({"0"})</div>
            <div>
<Image  className="rounded-2xl" src={"/empty1.svg"} alt="empty Bin" height={300} width={300}/> 
            </div>
            
        </div>
    )
}