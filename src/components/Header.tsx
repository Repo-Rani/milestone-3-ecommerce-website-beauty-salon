import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative mx-auto  ">
      <div className="w-full h-[50px] fixed top-0 z-20 bg-black flex  justify-between items-center">
        <div className=" w-[480px] h-[40px] md:flex hidden">
          <div className=" w-[250px] lg:w-[320px] h-[40px] flex justify-center gap-[20px] items-center ">
            {/* Search Icon */}
            <IoSearchOutline className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] text-[#735555] transition-transform duration-300 hover:scale-110 ease-in-out cursor-pointer" />

            {/* Input Field */}
            <div className="relative w-[200px] group">
              {/* Input Field */}
              <input
                type="text"
                placeholder="What are you searching for?"
                className="w-[130px] h-[25px] lg:w-[180px] lg:h-[35px] bg-transparent placeholder-white text-[12px] lg:text-[14px] text-white focus:outline-none "
              />

              {/* Hover Underline */}
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-[170px] group-focus:w-[170px]"></span>
            </div>
          </div>
        </div>
        <div className=" w-[480px] h-[40px]">
          <p className="text-[12px] md:text-[14px] lg:text-[16px]  flex justify-center items-center whitespace-nowrap  font-lato pt-2 text-white">
            <span className="font-bold">15%sitewide!</span>use promo code Love15
          </p>
        </div>
        <div className="  justify-end items-center w-[480px] h-[40px] pr-8 ms:flex hidden">
          <div className="flex justify-between items-center cursor-pointer w-[90px] lg:w-[120px] h-[25px]">
            <FaInstagram className="lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] text-white transition-all hover:scale-125 duration-300 ease-in-out " />
            <FaFacebookF className="lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] text-white transition-all hover:scale-125 duration-300 ease-in-out " />
            <FaYoutube className="lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] text-white transition-all hover:scale-125 duration-300 ease-in-out " />
            <FaTwitter className="lg:w-[20px] lg:h-[20px] w-[16px] h-[16px] text-white transition-all hover:scale-125 duration-300 ease-in-out " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
