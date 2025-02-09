import React from "react";
import { followData } from "../../data/data";
import HomeCardSlider from "./HomeCardSlider";

const HomeCardSlidersItems = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {followData.map((item) => (
          <div key={item.id} className="slider-item">
            <HomeCardSlider image={item.image} id={item.id} />
          </div>
        ))}
        {followData.map((item) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            <HomeCardSlider image={item.image} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSlidersItems;
