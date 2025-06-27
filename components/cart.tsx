import Image from "next/image";
import React from "react";
import { CardType } from "./card";
import Link from "next/link";

interface CartProps {
  items: CardType[];
  setItems: React.Dispatch<React.SetStateAction<CardType[]>>;
}
export const Cart = (props: CartProps): React.ReactNode => {
  const { items } = props;

  const getGroupedItems = () => {
    const map = new Map<string, CardType>();
    for (const item of items) {
      if (map.has(item.productCode)) {
        const existing = map.get(item.productCode)!;
        map.set(item.productCode, {
          ...existing,
          quantity: existing.quantity + item.quantity,
        });
      } else {
        map.set(item.productCode, { ...item });
      }
    }
    // Remove items with quantity <= 0
    return Array.from(map.values()).filter(item => item.quantity > 0);
  };

  const groupedItems = getGroupedItems();
  const totalItemCount = groupedItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleRemove = (productCode: string) => {
    props.setItems((prevItems) =>
      prevItems.filter((item) => item.productCode !== productCode)
    );
  };

  return (
    <>

      {totalItemCount === 0 && (
       <div className="w-80 max-h-[75vh] bg-white p-4  rounded-2xl overflow-y-auto">
          <div className="text-[#c73b0f] font-bold text-3xl mb-4">
            Your Cart (0)
          </div>
          <Image
            className="rounded-2xl"
            src="/empty1.svg"
            alt="empty Bin"
            height={300}
            width={300}
          />
          <p className="text-center text-slate-500 mt-2">Your cart is empty </p>
        </div>
      )}





      {totalItemCount > 0 && (
  <div className="w-80 bg-white p-4 rounded-xl overflow-y-auto max-h-[100vh]">
    <div className="text-[#c73b0f] font-bold text-3xl mb-4">
      Your Cart ({totalItemCount})
    </div>

    {/* Total + Confirm Button */}
    <div className="flex flex-col gap-3 mb-4">
      <div className="text-lg font-semibold text-gray-800">
        Total: ₹
        {groupedItems
          .reduce((acc, item) => acc + item.productPrice * item.quantity, 0)
          .toFixed(2)}
      </div>
      <button
        className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-md w-full"
        onClick={() =>{
        {  alert("Order confirmed!")}
          
 } } 
      >
       <a href="/">Confirm Order</a>
      </button>
    </div>

    {/* Cart Items List */}
    <div className="cartItems space-y-4">
      {groupedItems.map((item) => (
        <div
          key={item.productCode}
          className="flex justify-between items-start gap-2 border-b p-4"
        >
          <div className="left w-full space-y-2">
            <div className="top text-black font-medium text-base">
              {item.productName}
            </div>
            <div className="bottom text-sm">
              <ul className="flex gap-4 text-slate-600">
                <li className="text-[#c73b0f]">{item.quantity}x</li>
                <li>@₹{item.productPrice.toFixed(2)}</li>
                <li className="text-green-500 font-semibold">
                  ₹{(item.productPrice * item.quantity).toFixed(2)}
                </li>
              </ul>
            </div>
          </div>
          <button
            className="text-red-500 font-bold text-lg hover:scale-110 transition"
            title="Remove from cart"
            onClick={() => handleRemove(item.productCode)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
)}
    </>
  );
};