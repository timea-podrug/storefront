import Banner from "@/components/Banner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import React from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Wrapper>
        {/* title start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Elevating Fashion, Embracing Style.
          </div>
          <div className="text-md md:text-xl">
            Where fashion meets individuality, explore a world of limitless
            style on our clothing website
          </div>
        </div>
        {/* title end */}

        {/* product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* product grid end */}
      </Wrapper>
    </main>
  );
}
