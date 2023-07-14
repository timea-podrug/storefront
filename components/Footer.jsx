import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                get help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About us
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="https://facebook.com"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}

        {/* LEFT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
