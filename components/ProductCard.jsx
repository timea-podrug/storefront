import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        src="/p1s.jpg"
        alt="Product image"
        className="w-full"
        width={400}
        height={200}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold ">120€</p>
          <p className="text-base font-medium line-through">150€</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
