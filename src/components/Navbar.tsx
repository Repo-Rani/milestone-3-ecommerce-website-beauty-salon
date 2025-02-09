"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavbarPropsType } from "../../types/type";
import { NavbarLinksType } from "../../types/type";
import { FiHeart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";

const Navbar = ({ openNav }: NavbarPropsType) => {
  const navLinks: NavbarLinksType[] = [
    { href: "/", name: "Home" },
    { href: "/bestseller", name: "Best Seller" },
    { href: "/new", name: "New" },
    { href: "/shopall", name: "Shop All" },
    { href: "/contact", name: "Contact" },
  ];

  const [navBg, setNavBg] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeSearchMode = () => setIsSearchActive(false);

  return (
    <nav
      className={`w-full fixed top-[2.5rem] z-10 transition-all duration-200 ${
        navBg ? "bg-black " : "bg-[#735555] "
      }`}
    >
      <div className="flex items-center justify-between w-[90%] md:w-[95%] mx-auto h-[12vh]">
        {isSearchActive ? (
          <div className="flex w-full items-center justify-between bg-[#735555] text-white p-2">
            <div className="flex items-center justify-center">
              <FaSearch size={24} />
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                placeholder="Search..."
              />
            </div>
            <IoClose
              size={30}
              className="cursor-pointer"
              onClick={closeSearchMode}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center text-white space-x-2 ">
              <span className="text-[17px] font-greatvibes xl:text-[1.4rem] md:text-[20px]  font-extrabold italic tracking-wider text-white whitespace-nowrap">
                <Link href="/">Beauty Salon</Link>
              </span>
            </div>
            <div className="flex lg:justify-between justify-center gap-0 md:gap-[235px]   md:w-[70%]  lg:gap-0 lg:w-[65%] space-x-10 lg:space-x-8">
              <div className="hidden  lg:flex items-center  xl:space-x-8 lg:space-x-6 md:space-x-3 text-white whitespace-nowrap md:text-[10px] relative lg:left-[-60px] xl:left-[-50px] lg:text-[14px] xl:text-[16px] uppercase">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative group flex items-center"
                    onMouseEnter={() => setIsContactHovered(true)}
                    onMouseLeave={() => setIsContactHovered(false)}
                  >
                    <Link
                      href={link.href}
                      className="transition-all font-normal text-[16px] font-lato duration-200 hover:scale-105 cursor-pointer flex items-center"
                    >
                      {link.name}
                    </Link>
                    {link.name === "Shop All" && (
                      <div className="absolute top-[100%] left-0 bg-[#735555] text-white p-2 rounded-md shadow-lg w-40 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                        <Link
                          href="/face"
                          className="block py-2 px-4 hover:bg-gray-600"
                        >
                          Face
                        </Link>
                        <Link
                          href="eyes"
                          className="block py-2 px-4 hover:bg-gray-600"
                        >
                          Eyes
                        </Link>
                        <Link
                          href="/lips"
                          className="block py-2 px-4 hover:bg-gray-600"
                        >
                          Lips
                        </Link>
                      </div>
                    )}
                    {link.name === "Shop All" && (
                      <IoMdArrowDropdown
                        className={`ml-2 transition-transform duration-300 ${
                          isContactHovered ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="relative md:left-[225px] lg:left-0 flex items-center justify-end gap-[15px] lg:gap-[20px]">
                <Link
                  href="/signup"
                  className="relative flex items-center justify-center"
                >
                  <IoMdContact className=" text-white hover:scale-110 cursor-pointer transition-all duration-300 ease-linear md:h-[24px] md:w-[24px] xl:h-[29px] xl:w-[29px] h-[19px] w-[19px]" />
                </Link>
                <div className="relative flex items-center">
                  <Link
                    href="/cart"
                    className="relative flex items-center justify-center"
                  >
                    <FaCartArrowDown className="text-white hover:scale-110 cursor-pointer transition-all duration-300 ease-linear md:h-[24px] md:w-[24px] xl:h-[27px] xl:w-[27px] h-[19px] w-[19px]" />
                  </Link>
                  <div className="absolute -top-[10px] -right-[10px] md:-top-[7px] xl:h-5 xl:w-5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-[10px] text-white">1</span>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <Link
                    href="/wishlist"
                    className="relative flex items-center justify-center"
                  >
                    <FiHeart className="text-white hover:scale-110 cursor-pointer transition-all duration-300 ease-linear md:h-[24px] md:w-[24px] xl:h-[27px] xl:w-[27px] h-[19px] w-[19px]" />
                  </Link>

                  <div className="absolute -top-[10px] -right-[10px] md:-top-[7px] xl:h-5 xl:w-5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-[10px] text-white">2</span>
                  </div>
                </div>
              </div>

              <HiBars3BottomRight
                onClick={openNav}
                className="h-6 w-6 cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-linear lg:hidden"
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
