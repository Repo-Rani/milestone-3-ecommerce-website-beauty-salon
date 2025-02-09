import React from "react";
import { BsFillSendFill } from "react-icons/bs";
const NewsLetter = () => {
  return (
    <>
      <div className="w-full lg:h-[230px] h-[170px]  xl:px-20 px-6 lg:py-16 py-6 bg-[#735555]">
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <div className="flex flex-col gap-[10px]">
            <h1 className="relative md:top-[-5px] lg:top-[-30px] xxxl:left-[480px]  xl:left-[400px] lg:left-[280px] md:left-[30px] xl:text-[38px] lg:text-[35px] md:text-[28px] text-[18px] leading-[20px] whitespace-nowrap text-white font-medium uppercase font-greatVibes">
              Are you on{" "}
              <span className="font-extrabold font-greatVibes">the list?</span>
            </h1>
            <p className="lg:text-[15px] md:top-[5px] lg:top-[-25px] md:text-[14px] text-[12px] text-white text-center  relative md:left-[10px] lg:left-[280px]  xl:left-[380px] xl:top-[-15px] xxxl:left-[450px] font-normal font-lato">
              Join to get exclusive offers & discounts.
            </p>
          </div>
          <div className="flex justify-center md:w-[600px] w-[300px] sm:w-0 relative xl:left-[-320px] xxxl:left-[-330px] lg:top-[50px]  md:left-[40px] lg:left-[-200px] gap-[10px] md:px-0 px-8 mt-6">
            <input
              type="text"
              className="lg:w-[400px] lg:h-[60px] md:w-[250px] w-[180px] h-[40px] bg-white rounded-[7px] text-black/65 xl:text-[15px] text-[12px] font-normal  px-6 md:py-2 md:px-10 outline-none border-none font-lato"
              placeholder="Email"
            />
            <button className="xl:w-[200px]  lg:w-[140px] lg:h-[60px] xl:h-[60px] w-[110px] whitespace-nowrap h-[40px] px-2 py-3 md:px-4 md:py-4 rounded-[7px] text-white bg-[#735555] border-white border-[1px] lg:text-[14px] xl:text-[17px] text-[10px] font-normal flex items-center justify-center gap-[10px] hover:bg-gray-900 transition-all duration-300 ease-linear font-roboto">
              <BsFillSendFill className="h-[20px] w-[20px] text-white" />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
