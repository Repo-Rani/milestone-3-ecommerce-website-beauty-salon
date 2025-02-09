import React from "react";
import { bestSellerData } from "../../data/data";
import BestSeller from "./BestSeller";
const BestSellerCard = () => {
  return (
    <>
      <div
        className="relative top-[-350px] md:top-[-220px] grid grid-cols-1  md:grid-cols-3 xl:grid-cols-5 xxxl:grid-col-6 xxxl:gap-[3px] md:gap-y-[4rem]  lg:gap-y-[3.5rem] sm:gap-y-[1rem]
    "
      >
        {bestSellerData.map((item) => (
          <BestSeller
            key={item.id}
            id={item.id}
            image={item.image}
            img={item.img}
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

export default BestSellerCard;
