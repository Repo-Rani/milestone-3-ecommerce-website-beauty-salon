import React from "react";
import HomeCardSlidersItems from "./HomeCardSlidersItems";

const FollowUs = () => {
  return (
    <div className="w-full  relative md:top-[-495px] lg:top-[-500px] xl:top-[-340px]  xsm:top-[-1240px] sm:top-[160px] top-[200px]">
      <h2 data-aos="fade-down"
        data-aos-delay="200" className="text-[24px] sm:text-[32px] md:text-[48px] text-black font-playfair relative left-[90px] sm:left-[100px] xsm:left-[130px] md:left-[290px] lg:left-[400px] xl:left-[620px] top-[-10px] w-[220px] sm:w-[250px] md:w-[300px]">
        Follow Us
      </h2>
      <span data-aos="fade-down"
        data-aos-delay="200" className="font-lato text-[16px]  md:text-[20px] text-black opacity-25 relative top-[-15px] sm:left-[120px] left-[90px] xsm:left-[145px] md:left-[320px] lg:left-[430px] xl:left-[650px] w-[200px]">
        @beauty.store
      </span>
      <HomeCardSlidersItems />
    </div>
  );
};

export default FollowUs;
