"use client";

import Image from "next/image";

const ShopLips = () => {
  return (
    <section className="w-full h-[810px]  relative top-[-470px] md:top-[-190px] lg:top-[-110px] xxxl:top-[-70px] flex   justify-between items-center ">
      {/* Left side */}
      <div className="bg-black h-[370px] md:h-[550px] lg:h-[650px] xl:h-[810px] w-1/2">
        <div className="w-[300px] h-[480px]   relative left-[-65px] md:left-[50px] top-[50px] md:top-[100px] lg:left-[130px] lg:top-[120px] xl:left-[220px] xl:top-[200px] flex flex-col justify-between md:px-0 px-20 ">
          <span data-aos="fade-right"
        data-aos-delay="200" className=" text-[14px] md:text-[16px] font-lato text-white tracking-[2px] uppercase relative ">
            Hot & Spicy
          </span>
          <h1 data-aos="fade-right"
        data-aos-delay="200" className=" relative top-[-55px] md:top-[-50px] font-playfair font-bold text-[24px] md:text-[35px] lg:text-[48px] text-white w-[285px] h-[129px] whitespace-nowrap">
            Most <span className="italic font-normal">Vibrant</span> <br /> Lips
            in Town{" "}
          </h1>
          <p  data-aos="fade-right"
        data-aos-delay="200" className="relative top-[-165px] md:top-[-100px] lg:top-[-65px] text-[12px] md:text-[18px] font-lato text-white">
            I am a paragraph. Click here to add your own text and edit me. I am a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <button data-aos="fade-up"  data-aos-delay="300" className="lg:w-[150px] w-[80px] h-[32px] md:w-[120px] md:h-[40px] lg:h-[50px] relative top-[-215px] md:top-[-130px] lg:top-[-90px] md:left-[5px] lg:px-4 lg:py-2 bg-white text-black  rounded-sm hover:bg-black hover:text-white hover:border-[1px] hover:border-white hover:scale-105 transition-all whitespace-nowrap ease-in-out duration-300 font-lato ">
            shop Lips
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className=" h-[500px] xl:h-[600px] w-1/2  xl:top-[-10px] relative overflow-hidden flex items-center justify-center">
        <Image
          src="/lipstickbigimage.webp"
          alt="lipstick-image"
          height={579}
          width={400}
          quality={100}
          className=" h-[250px] md:h-[400px] xl:h-[450px] w-auto"
        />
      </div>
    </section>
  );
};

export default ShopLips;
