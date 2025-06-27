"use client";

import Image from "next/image";
import React, { useState } from "react";

// Type for product/card
export interface CardType {
  imageLink: string;
  productName: string;
  productCode: string;
  productPrice: number;
  productDescrptions?: string;
  quantity?: number;
}

// Props for Card component
interface CardProps extends CardType {
  onAddToCart: (item: CardType) => void;
}

// Card component
export const Card = (props: CardProps): React.ReactNode => {
  const [count, setCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCount(1);
    props.onAddToCart({
      imageLink: props.imageLink,
      productName: props.productName,
      productCode: props.productCode,
      productPrice: props.productPrice,
      productDescrptions: props.productDescrptions,
      quantity: 1,
    });
  };

  const handleIncrement = () => {
    setCount(c => c + 1);

    props.onAddToCart({
      imageLink: props.imageLink,
      productName: props.productName,
      productCode: props.productCode,
      productPrice: props.productPrice,
      productDescrptions: props.productDescrptions,
      quantity: 1,
    });
  };

  return (
    <div className="h-96 w-60 p-2 bg-[#fcf8f5] text-black rounded-xl hover:-translate-y-1 transition-transform duration-200">
      {/* Image */}
      <div
        className={`image h-[55%] rounded-2xl border-2 ${
          count !== 0 ? "border-[#c73b0f]" : "border-slate-300"
        } overflow-hidden`}
      >
        <Image
          src={props.imageLink}
          alt="Product image"
          width={300}
          height={300}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Cart control */}
      <div className="cart w-[70%] rounded-4xl relative bottom-8 left-8 text-center h-14 flex">
        {count === 0 ? (
          <div className="flex justify-evenly items-center w-full h-full font-bold cursor-pointer border-2 rounded-4xl bg-white border-slate-500 hover:border-[#c73b0f]">
            +
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        ) : (
          <div className="flex rounded-4xl border-2 border-slate-300 hover:border-[#c73b0f] justify-around items-center w-full h-full text-white bg-[#c73b0f]">
            <button
              className="rounded-full border-2 border-white h-7 w-7 active:scale-90 cursor-pointer"
              onClick={handleIncrement}
            >
              +
            </button>
            <div className="count">{count}</div>
            <button
              className="rounded-full border-2 border-white h-7 w-7 active:scale-90 cursor-pointer"
              onClick={() => {
                const newCount = Math.max(0, count - 1);
                setCount(newCount);
                props.onAddToCart({
                  imageLink: props.imageLink,
                  productName: props.productName,
                  productCode: props.productCode,
                  productPrice: props.productPrice,
                  productDescrptions: props.productDescrptions,
                  quantity: -1,
                });
              }}
            >
              -
            </button>
          </div>
        )}
      </div>

      {/* Product details */}
      <ul className="details list-none flex justify-center items-start flex-col px-2">
        <li className="text-slate-500 text-sm">{props.productName}</li>
        <li className="font-bold text-md">{props.productDescrptions}</li>
        <li className="text-[#c73b0f] font-semibold">${props.productPrice}</li>
      </ul>
    </div>
  );
};