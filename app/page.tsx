import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Cart } from "@/components/cart";
import { Navbar } from "@/components/Navbar";
import { cards } from "@/data/product";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Layout */}
      <div className="grid grid-cols-12 bg-[#fcf8f5] w-full pt-30 px-6 gap-4 ">
        {/* Product Section */}
        <div className="col-span-12 lg:col-span-8 pl-6 ">
          <div className="searchbarcomponent mb-4 text-lg font-semibold text-slate-600 flex justify-around">
           <input type="text"  className="rounded-3xl h-12 w-[50%] border-2 px-4 border-slate-500" placeholder="Enter Product ID (e.g., EAT002)"/>
           <Button name="Grocery"/>
           <Button name="Fashion"/>
          <Button name="Electronics"/>
          </div>
  <h1 className="text-black font-bold text-3xl p-2">Available Products</h1>
          <div className="productItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           
          {cards.map((s) => ( <Card  key={s.productCode} imageLink={s.imageLink} productCode={s.productCode} productName={s.productName} productPrice={s.productPrice} productDescrptions={s.productDescrptions}/> ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="col-span-12 lg:col-span-4 flex justify-center sticky top-20 h-fit">
          <Cart />
        </div>
      </div>
    </>
  );
}