'use client';
import React, { useState,} from 'react';
import Image from 'next/image';
import { BestSellerProps } from '../../types/type';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import Link from 'next/link';

import { useCart } from "@/context/CartContext";

 const BestSeller = ({
  id,
  image,
  img,
  title,
  ratingNum,
  price,
  reviews,
  latest,
}: BestSellerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, image, quantity: 1 },
    });

    // Show popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); 
  };



 
  return (
    <div className="best-seller relative mx-auto   ">
      
      <div data-aos="flip-left" data-aos-delay="200"

        className="xxxl:w-[300px] md:w-[255px] sm:w-[375px] w-[320px]  lg:w-[330px] xl:w-[285px] md:h-[350px]  h-[425px] flex flex-col justify-center items-center  px-10 cursor-pointer relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <Link href={`bestsellers/${id}`} passHref>
          <Image
            src={isHovered ? img : image}
            alt="product-image"
            width={300}
            height={300}
            className=" w-[300px] md:h-[210px] h-[300px] transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Latest Badge */}
        {latest && (
          <div className="absolute top-4 bg-black px-6 py-5">
            <span className="font-lato text-[16px] text-white">{latest}</span>
          </div>
        )}

        {/* Product Details */}
        <h3 className="text-[18px] font-lato  font-medium text-black whitespace-nowrap">{title}</h3>
        <span className="font-lato text-[14px] text-[#5e5e5e]">${price}</span>
        <div className="flex justify-between w-[135px] h-[14px]">
          <div className="flex justify-between w-[80px] h-[14px]">
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStarHalf className="w-[14px] h-[14px] text-[#735555]" />
          </div>
          <div className="flex justify-between w-[40px] relative top-[-5px]">
            <p className="text-[14px] font-lato text-[#5e5e5e]">{ratingNum}</p>
            <p className="text-[14px] font-lato text-[#5e5e5e]">{reviews}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        {isHovered && (
          <button
          onClick={handleAddToCart}

            className="relative top-[40px]  md:top-[50px] md:text-[16px] text-[12px]  md:px-6 px-5 py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all ease-in-out duration-300"
          >
            Add to Cart
          </button>
        )}

{showPopup && (
  <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#735555] to-[#6b3a3a] text-white px-4 py-2 rounded-2xl shadow-2xl animate__animated animate__fadeIn animate__delay-2s max-w-[300px] w-full transition-all duration-500 z-[9999]">
    <div className="flex flex-col items-center">
      <div className="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-lg font-semibold mb-3">Item added to cart!</p>
      <Link href="/cart">
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#735555] hover:text-white transition-all duration-300 shadow-md transform hover:scale-105">
          View Cart
        </button>
      </Link>
    </div>
  </div>
)}
  </div>
</div>

  );
};


export default BestSeller;
