import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        thumbWidth={60}
        showIndicators={false}
        showStatus={false}
        className="productCarousel"
      >
        <img src="/p1.jpg" />
        <img src="/p2.jpg" />
        <img src="/p3.jpg" />
        <img src="/p4.jpg" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
