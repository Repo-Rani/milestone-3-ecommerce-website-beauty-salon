import React from "react";
import TrendingCards from "./TrendingCards";

const HeroTrending = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center relative lg:top-[-190px] md:top-[-260px] top-[-650px] py-[50px]">
        <span data-aos="fade-down"
        data-aos-delay="100" className="text-center font-lato text-[14px] md:text-[16px] text-black tracking-widest">
          Dont Miss Out
        </span>
        <h2 data-aos="fade-down"
        data-aos-delay="100" className="text-center text-black text-[32px] md:text-[48px] font-bold font-playfair">
          Now <span className="font-normal italic">Trending</span>
        </h2>
      </div>

      <div className="">
        <TrendingCards />
      </div>
    </>
  );
};

export default HeroTrending;
