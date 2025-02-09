"use client";
import React, { useState } from "react";
import { PrevArrowsProps } from "../../types/type";
import { GoArrowLeft } from "react-icons/go";

const PrevArrow = ({ onClick }: PrevArrowsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`md:w-[46px] w-[30px] h-[30px] md:h-[46px] rounded-full ${
        isActive ? "bg-[#735555]" : "bg-gray-300"
      } flex items-center justify-center cursor-pointer absolute sm:top-[-77px] top-[-45px] xsm:left-[360px] sm:left-[300px]  md:left-[610px] lg:left-[870px] xl:left-[1250px]  left-[250px]  transition-colors duration-300`}
    >
      <GoArrowLeft className="h-[16px] md:h-[24px] w-[16px] md:w-[24px] text-white" />
    </div>
  );
};

export default PrevArrow;
