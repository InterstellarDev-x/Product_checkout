"use client"
import { Button } from "@/components/button";
import { Card, CardType } from "@/components/card";
import { Cart } from "@/components/cart";
import { Navbar } from "@/components/Navbar";
import { cards } from "@/data/product";
import { useState, useEffect } from "react";


export default function Home() {

  const [cartItems, setCartItems] = useState<CardType[]>([]);

  const handleAddToCart = (newItem: CardType) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(p => p.productCode === newItem.productCode);
      if (existing) {
        const updated = prevItems.map(p =>
          p.productCode === newItem.productCode
            ? { ...p, quantity: Math.max(0, p.quantity as number + (newItem.quantity as number) ) }
            : p
        );
        return updated.filter(item => item.quantity as number > 0);
      } else {
        return newItem.quantity as number > 0 ? [...prevItems, { ...newItem }] : prevItems;
      }
    });
  };

  const [searchCode, setSearchCode] = useState<string | undefined>("");
  const [filteredCards, setFilteredCards] = useState< CardType[]>(cards);

  useEffect(() => {
    if (!(searchCode as string).trim()) {
      setFilteredCards(cards);
    } else {
      const result = cards.filter(p =>
        p.productCode.toLowerCase().includes((searchCode as string).toLowerCase())
      );
      setFilteredCards(result);
    }
  }, [searchCode]);

  return (
    <>
      <Navbar />

      {/* Main Layout */}
      <div className="grid grid-cols-12 bg-[#fcf8f5] w-full pt-30 px-6 gap-4 ">
        {/* Product Section */}
        <div className="col-span-12 lg:col-span-8 pl-6 ">
          <div className="searchbarcomponent mb-4 text-lg font-semibold text-slate-600 flex justify-around">
            <input
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="rounded-3xl h-12 w-[50%] border-2 px-4 border-slate-500"
              placeholder="Enter Product ID (e.g., EAT002)"
            />
            <Button name="Grocery" />
            <Button name={`Fashion`}  />
            <Button name="Electronics" />
          </div>
          <h1 className="text-black font-bold text-3xl p-2">Available Products</h1>
          {filteredCards.length === 0 ? (
            <p className="text-center text-slate-500 text-lg py-10">Product not available</p>
          ) : (
            <div className="productItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {filteredCards.map((s) => (
                <Card
                  key={s.productCode}
                  imageLink={s.imageLink}
                  productCode={s.productCode}
                  productName={s.productName}
                  productPrice={s.productPrice}
                  productDescrptions={s.productDescrptions}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>


        <div className="col-span-12 lg:col-span-4 flex justify-center sticky top-20 h-fit">
          <Cart items={cartItems}  setItems={setCartItems}/>
        </div>
      </div>
    </>
  );
}