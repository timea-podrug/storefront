import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src="/p1s.jpg"
          width={200}
          height={300}
          alt="product image"
        ></Image>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Product Title
          </div>
          {/* product subtitle */}
          <div className="text-sm md:text-md font-semibold text-black/[0.5] block md:hidden">
            Product Subtitle
          </div>
          {/* product price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            120 €
          </div>
        </div>
        {/* product subtitle */}
        <div className="text-MD font-medium text-black/[0.5] hidden md:block">
          Product Subtitle
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">XS</option>
                <option value="2">S</option>
                <option value="3">M</option>
                <option value="4">L</option>
                <option value="5">XL</option>
              </select>
            </div>

            <div className="font-semibold">Quantity:</div>
            <select className="hover:text-black">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
