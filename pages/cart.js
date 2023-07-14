import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Title start*/}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* Title end*/}
        {/* Cart start*/}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart items start*/}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart items end*/}
          {/* Summary start*/}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  100 €
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                Please note that the displayed subtotal reflects the total value
                of the items in your cart and does not include taxes, shipping
                fees, or any additional charges. Once you proceed to checkout,
                applicable taxes, delivery fees, and any other relevant costs
                will be calculated and added to your total.{" "}
              </div>
            </div>
            {/* button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            {/* button end */}
          </div>
          {/* Summary end*/}
          {/* Cart end*/}
        </div>

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
          <Image
            src="/empty-cart.png"
            width={300}
            height={300}
            alt="empty cart"
            className="w-[300px] md:w-[400px]"
          />
          <span>Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have nothing in your cart. <br /> Search for
            something you like.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
