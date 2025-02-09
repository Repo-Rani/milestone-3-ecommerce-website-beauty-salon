import React from "react";
import BestSellerCard from "./BestSellerCard";
import Link from "next/link";

const HeroBestSeller = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center relative top-[-350px] md:top-[-210px] py-[50px] ">
        <span  data-aos="fade-down"
        data-aos-delay="100" className="text-center font-lato text-[16px] text-black tracking-wider">
          Must Have
        </span>
        <h2  data-aos="fade-down"
        data-aos-delay="100" className="text-center text-black md:text-[48px] text-[32px] font-bold font-playfair">
          Best <span className="font-normal italic">Sellers</span>
        </h2>
      </div>

      <div className="">
        <BestSellerCard />
      </div>

      <button data-aos="fade-up"  data-aos-delay="300"
        className="lg:w-[200px] md:w-[160px] md:h-[50px] w-[120px] h-[45px] relative xl:top-[-170px]  md:top-[-150px] md:left-[325px] sm:left-[142px]  xsm:left-[155px] xsm:top-[-305px] top-[-310px] left-[105px]
    sm:top-[-305px] lg:left-[420px]  lg:top-[-150px] xl:left-[620px] xxxl:left-[660px] lg:px-9 lg:py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all whitespace-nowrap ease-in-out duration-300 md:text-[17px] text-[13px] "
      >
        <Link href="/bestsellers">Shop Best Sellers</Link>
      </button>
    </>
  );
};

export default HeroBestSeller;
