import React from "react";
import Image from "next/image";
import { FollowProps } from "../../types/type";

const HomeCardSlider = ({  image }: FollowProps) => {
  return (
    <div className="relative  group">
      {/* Image */}
      <Image
        src={image}
        alt="images"
        height={361}
        width={361}
        className="object-cover h-[361px] w-[361px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-gray-200 text-base font-bold text-center flex flex-col justify-between items-start flex-wrap">
          <span>#wix</span> <span>#BeautySalon</span>{" "}
          <span>#beautyProduct</span> <span>#makeup</span>
        </p>
      </div>
    </div>
  );
};

export default HomeCardSlider;
