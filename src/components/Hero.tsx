import React from "react";
import ShopLips from "./HeroShopLips";
import DiscoverMore from "./DiscoverMore";
import Banner from "./Banner";
import HeroBestSeller from "./HeroBestSeller";
import HeroTrending from "./HeroTrending";
import FollowUs from "./FollowUs";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[6900px] min-h-screen sm:h-[6940px] xsm:h-[6955px] md:h-[4940px] xl:h-[4450px] lg:h-[5090px] xxxl:h-[4625px]">
        {/* Banner */}
        <div>
          <Banner />
        </div>
        {/* Best sellers */}
        <div>
          <HeroBestSeller />
        </div>
        {/* Shop List */}
        <div>
          <ShopLips />
        </div>

        {/* Trending product */}
        <div>
          <HeroTrending />
        </div>
        {/* DiscoverMore */}
        <div>
          <DiscoverMore />
        </div>

        {/* Foloow Us */}

        <div>
          <FollowUs />
        </div>
      </div>
    </>
  );
};

export default Hero;
