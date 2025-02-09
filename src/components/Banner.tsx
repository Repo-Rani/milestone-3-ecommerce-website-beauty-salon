import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="relative  md:w-full min-h-screen xs:h-[80vh] sm:h-screen xxl:top-[115px] xl:top-[108px]  md:top-[105px] ">
        <div className="hidden md:block ">
          <Image
            src="/hero-image.avif"
            alt="hero-image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="w-full"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/hero-image.avif"
            alt="hero-image"
            width={425}
            height={300}
            quality={100}
            priority
            className="w-full h-[300px] relative top-[108px]"
          />
        </div>
      </div>

      <span 
      
        data-aos="fade-right"
        data-aos-delay="200"
      className="relative xs:left-[15px] xs:top-[-440px] sm:left-[20px] sm:top-[-430px]  xxl:left-[230px] lg:left-[110px]  md:left-[100px] md:top-[-410px] xxxl:left-[220px] xxxl:top-[-480px] xxl:top-[-460px] xl:top-[-400px] xl:left-[240px] lg:top-[-420px] tracking-wide font-lato xs:text-[12px] xsm:text-[14px] md:text-[16px] text-white">
        NEW RELEASE
      </span>
      <h1
       data-aos="fade-right"
        data-aos-delay="200"
      className=" relative md:w-[300px] xs:left-[-150px] sm:left-[-145px] top-[-440px] sm:top-[-430px] md:top-[-400px] xl:top-[-390px] xxl:top-[-445px] xxl:left-[50px] lg:left-[-60px]  lg:top-[-410px] md:left-[-70px] xl:left-[70px] tracking-normal text-white text-[28px] xsm:text-[32px] md:text-[48px] lg:text-[65px] xxxl:left-[50px] xxxl:top-[-470px] ml-[165px] font-playfair font-bold lg:leading-[80px]">
        Metallics <br />
        <span className=" font-normal italic">Shine</span> on{" "}
      </h1>
      <p 
       data-aos="fade-right"
        data-aos-delay="300"
      className="md:text-[16px] sm:text-[12px] text-[10px] lg:text-[18px] font-lato text-white relative md:left-[95px] lg:left-[105px] xxxl:left-[215px] xxxl:top-[-450px] xl:left-[235px] xxl:top-[-420px] xl:top-[-375px] md:top-[-390px] lg:top-[-390px] lg:leading-[30px] xxl:left-[210px] md:w-[280px] lg:w-[305px] sm:w-[178px] xs:w-[160px] h-[84px] left-[15px] sm:left-[20px] xs:top-[-435px] sm:top-[-425px] ">
        Get to know our new eyeshadow palettes with a glossy finish, smooth
        lightweight feel and 10 hour stay-on.
      </p>
      <button
       data-aos="fade-right"
        data-aos-delay="300"
      className="md:w-[130px] md:h-[45px] w-[65px] h-[25px] relative xs:left-[20px]  sm:left-[20px] sm:top-[-440px] xs:top-[-455px] md:left-[95px] xxxl:left-[220px] xxxl:top-[-420px] xxl:left-[210px] xxl:top-[-380px] xl:top-[-345px] xl:left-[235px] md:text-[18px] text-[12px]  lg:left-[108px]  md:top-[-380px] lg:top-[-360px] hover:bg-white hover:text-[#735555] hover:scale-105 duration-300 transition-all ease-in-out border-[2px] border-white  bg-transparent text-white rounded-sm">
        <Link href="/shopall"> Shop</Link>
      </button>
    </>
  );
};

export default Banner;