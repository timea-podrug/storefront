import React from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* start of left column */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* end of left column */}
          {/* start of right column */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* subtitle */}
            <div className="text-lg font-semibold mb-5">Men's Golf Shoes</div>
            {/* price */}
            <div className="text-lg font-semibold">PRICE : 110€</div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              incl. of taxes
            </div>
            {/* product size start*/}
            <div className="mb-10">
              {/* heading start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading end */}
              {/* size start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  XS
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  S
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  M
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  L
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  XL
                </div>
              </div>
              {/* size end */}
              {/* required message start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* required message end */}
            </div>
            {/* product size end*/}
            {/* add to cart button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* add to cart button end */}
            {/* whishlist button start */}
            <button className="w-full py-4 rounded-full  border  border-black  text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 flex items-center justify-center gap-2">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* whishlist button end */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Introducing the "SoleMotion" Sneakers - where style meets
                comfort in a single pair. Designed with meticulous attention to
                detail, these sneakers are the epitome of modern footwear. The
                premium craftsmanship and quality materials ensure durability
                and long-lasting wear.
              </div>
              <div className="text-md mb-5">
                Step into the world of effortless style with the sleek
                silhouette and versatile color options. From casual outings to
                urban adventures, the "SoleMotion" Sneakers are your go-to
                choice for both fashion-forward looks and all-day comfort.
                Elevate your shoe game and make a statement with every step you
                take.
              </div>
            </div>
          </div>
          {/* end of right column */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
