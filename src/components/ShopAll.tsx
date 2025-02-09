import React from "react";
import ShopAllCard from "./ShopAllCard";
import { shopallData } from "../../data/data";
const ShopAll = () => {
  return (
    <>
      <div
        className="relative lg:left-[-175px] lg:top-[20px] xl:top-[120px] xl:left-0  md:left-[-300px] md:top-[30px] top-[180px]   grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-x-[80px] xl:gap-0 md:gap-y-[10px] md:gap-x-[280px]  lg-gap-y-0  gap-y-[100px]
    "
      >
        {shopallData.map((item) => (
          <ShopAllCard
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

export default ShopAll;
