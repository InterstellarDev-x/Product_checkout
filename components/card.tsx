"use client";

import Image from "next/image";
import React, { useState } from "react";


interface Card {
    imageLink : string,
    productName : string,
    productCode : string,
    productPrice : number,
    productDescrptions? : string
}




export const Card = (props : Card) : React.ReactNode => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-96 w-60 p-2 bg-[#fcf8f5] text-black">
      <div
        className={`image h-[55%] rounded-2xl border-2 ${
          count !== 0 ? "border-[#c73b0f]" : "border-slate-300"
        } overflow-hidden`}
      >
        <Image
          src={
            props.imageLink
          }
          alt="Product image"
          width={300}
          height={300}
        />
      </div>
      <div className="cart w-[70%] rounded-4xl relative bottom-8 left-8 text-center h-14 flex">
        {count === 0 ? (
          <div className="flex justify-evenly items-center w-[100%] h-[100%] font-bold cursor-pointer border-2 rounded-4xl bg-white border-slate-500 hover:border-[#c73b0f]">
            +
            <button onClick={() => setCount(count + 1)}>Add to cart</button>
          </div>
        ) : (
          <div className="flex rounded-4xl border-2 border-slate-300 hover:border-[#c73b0f] justify-around items-center w-[100%] h-[100%] text-white bg-[#c73b0f]">
            <button
              className="rounded-full border-2 border-white h-7 w-7 active:scale-90 cursor-pointer"
              onClick={() => setCount(c => c + 1)}
            >
              +
            </button>
            <div className="count">{count}</div>
            <button
              className="rounded-full border-2 border-white h-7 w-7 active:scale-90 cursor-pointer"
              onClick={() => setCount(c => Math.max(0, c - 1))}
            >
              -
            </button>
          </div>
        )}
      </div>
      <ul className="details list-none flex justify-center items-start flex-col">
        <li className="text-slate-500">{props.productName}</li>
        <li className="font-bold">{props.productDescrptions}</li>
        <li className="text-[#c73b0f]">${props.productPrice}</li>
      </ul>
    </div>
  );
};