import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscoverMore = () => {
  return (
    <>
      <section className=" xsm:h-[1575px] md:h-[1500px]">
        <div className="bg-white flex flex-col items-center justify-center relative top-[-590px] xsm:top-[-590px] md:top-[-150px] py-[50px]">
          <span data-aos="fade-down"
        data-aos-delay="100" className="text-center font-lato text-[16px] text-black tracking-wider">
            Must Visit
          </span>

          <h2 data-aos="fade-down"
        data-aos-delay="100" className="text-center text-black text-[32px] lg:text-[48px] font-bold font-playfair">
            Discover <span className="font-normal italic"></span>More
          </h2>
        </div>

        <div className="bg-black w-full h-[300px] md:relative absolute flex justify-between md:top-[130px] top-[5900px] ">
          <div className=" h-[500px] w-full flex justify-evenly  absolute ">
            <div className="relative">
              <Image
                src="/eyes.avif"
                alt="eye-image"
                height={450}
                width={400}
                className="relative xl:h-[450px] xl:w-[400px] lg:w-[300px] lg:h-[350px] md:w-[230px] md:h-[300px] w-[180px] h-[200px] md:top-[-300px]  lg:top-[-320px]"
              />
              <div  className="absolute  top-[38%] lg:top-0  md:top-[-10px] xxxl:top-[25%] xl:top-[23%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span data-aos="fade-up"  data-aos-delay="200" className="text-white md:text-[18px] text-[16px] font-bold font-lato">
                  Shop
                </span>
                <h2  data-aos="fade-up"  data-aos-delay="200" className="text-white xsm:text-[32px] md:text-[48px]  lg:text-[75px] font-semibold  tracking-normal font-playfair">
                  Eyes
                </h2>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/face.avif"
                alt="face-image"
                height={450}
                width={400}
                className="relative xl:h-[450px] xl:w-[400px] lg:w-[300px]  w-[180px] h-[200px] lg:h-[350px] md:w-[230px] md:h-[300px] md:top-[-300px]  lg:top-[-320px]"
              />
              <div  className="absolute  top-[38%] lg:top-0  md:top-[-10px] xxxl:top-[25%]  xl:top-[23%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span  data-aos="fade-up"  data-aos-delay="200" className="text-white md:text-[18px] text-[16px]  font-bold font-lato">
                  Shop
                </span>
                <h2  data-aos="fade-up"  data-aos-delay="200" className="text-white xsm:text-[32px] md:text-[48px]  lg:text-[75px] font-semibold  tracking-normal font-playfair">
                  Face
                </h2>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/lips.avif"
                alt="lips-image"
                height={450}
                width={400}
                className="relative xl:h-[450px] xl:w-[400px] lg:w-[300px] lg:h-[350px] md:w-[230px] md:h-[300px] w-[180px] h-[200px] md:top-[-300px]  lg:top-[-320px]"
              />
              <div  className="absolute top-[38%] lg:top-0 md:top-[-10px] xxxl:top-[25%]  xl:top-[23%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span data-aos="fade-up"  data-aos-delay="200" className="text-white md:text-[18px] text-[16px]  font-bold font-lato">
                  Shop
                </span>
                <h2  data-aos="fade-up"  data-aos-delay="200" className="text-white xsm:text-[32px] md:text-[48px] lg:text-[75px] font-semibold  tracking-normal font-playfair">
                  Lips
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[450px] md:relative absolute top-[6150px] md:top-0  lg:top-[50px] xl:top-[100px]">
          <Image
            src="/new-image.webp?updated=1"
            alt="makeup-image"
            quality={100}
            height={450}
            width={400}
            className="h-[450px]  w-full  "
          />

          <div className="flex md:flex-row flex-col justify-center  lg:gap-[50px] xl:gap-[150px] relative md:top-0 xsm:top-[50px] top-[20px] md:left-0 left[30px] ">
            <span data-aos="fade-right" data-aos-delay="200" className="relative w-[200px] left-[60px] md:left-[50px] lg:left-[90px] top-[-420px]  md:top-[-420px]  xl:top-[-400px] tracking-wider font-lato text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">
              we believe
            </span>
            <h1 data-aos="fade-right" data-aos-delay="200" className=" relative w-[200px]  left-[60px] xl:left-[-260px] lg:left-[-180px] xsm:top-[-415px] md:left-[-120px]  top-[-400px]  md:top-[-370px] tracking-normal text-white md:text-[48px] text-[24px]  font-playfair font-bold leading-[30px] md:leading-[60px] whitespace-nowrap">
              Your <span className=" font-normal italic">Skin</span>
              <br /> Comes First{" "}
            </h1>

            <div className="relative md:top-[-420px] xl:top-[-440px] md:left-0 top-[-380px] xsm:top-[-400px]  flex flex-col  justify-between md:px-0 px-14 ">
              <p data-aos="fade-left" data-aos-delay="300" className=" font-lato text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] tracking-normal text-white w-[200px] md:w-[400px] lg:w-[500px] h-[180px] relative lg:px-0 md:px-10">
                I am a paragraph. Click here to add your own text and edit me. It
                is easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I am a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p data-aos="fade-left" data-aos-delay="300" className="font-lato text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] tracking-normal text-white md:w-[400px] lg:w-[500px] h-[180px] lg:px-0 md:px-10 md:flex hidden">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
              <span>
                <Link
                  href="/contact" data-aos="fade-up"  data-aos-delay="300"
                  className="font-lato text-white text-[18px] font-normal underline relative xl:top-[20px] lg:px-0 md:px-10"
                >
                  Join Us
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverMore;
