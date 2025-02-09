import React from "react";
import { trendingData } from "../../data/data";
import Trending from "./Trending";
const TrendingCards = () => {
  return (
    <>
      <div
        className="relative top-[-625px] md:top-[-230px]  grid grid-cols-1  md:grid-cols-3 xl:grid-cols-5 xxxl:grid-col-6 xxxl:gap-[3px] md:gap-y-[4rem]  lg:gap-y-[3.5rem]
    "
      >
        {trendingData.map((item) => (
          <Trending
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            ratingNum={item.ratingNum}
            reviews={item.reviews}
          />
        ))}
      </div>
    </>
  );
};

export default TrendingCards;
