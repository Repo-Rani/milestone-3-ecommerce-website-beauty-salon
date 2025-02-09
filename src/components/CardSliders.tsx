import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { shopallData } from "../../data/data";

import CardSlider from "./CardSlider";

const CardSliders = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-full md:left-0 left-[35px]  ">
      <Slider {...settings}>
        {shopallData.map((item) => (
          <CardSlider
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            ratingNum={item.ratingNum}
            reviews={item.reviews}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardSliders;
