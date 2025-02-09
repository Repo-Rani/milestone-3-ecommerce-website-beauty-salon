import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <footer className="font-sans tracking-wide bg-black px-8 py-12 z-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
          <div>
            <span className="text-[16px] md:text-[1.4rem] font-extrabold italic text-white flex items-center font-greatVibes">
              BeautySalon
            </span>
          </div>
          <div>
            <h4 className="text-white font-semibold font-lato text-lg relative max-sm:cursor-pointer">
              Shop
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400">
              {[
                "All Products",
                "New",
                "Best Sellers",
                "Lips",
                "Eyes ",
                "Face",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[14px] hover:text-white font-lato"
                    key={index}
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold font-lato text-lg relative max-sm:cursor-pointer">
              Our Store
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              {[
                "500 Terry Francine Street",
                "San francisco, CA 94158",
                "Monday-Friday : 11am-10pm",
                "Saturday-Sunday: 11am-12pm",
                "Tel: 123-456-7890",
                "Email: info@mysite.com",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[14px] hover:text-white font-lato"
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold font-lato text-lg relative max-sm:cursor-pointer">
              Policy
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              {[
                "Shipping & Returns ",
                "Store Policy ",
                "Blog",
                "Payment Methods ",
                "FAQ",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-[14px] hover:text-white font-lato"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold font-lato text-lg relative max-sm:cursor-pointer">
              Customer Service
            </h4>

            <ul className="mt-6 space-y-3 text-gray-400">
              {["Tel: 123-456-7890", "Email: info@mysite.com"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-[14px] hover:text-white font-lato"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <ul className="mt-10 flex space-x-5">
              <li>
                <FaFacebookSquare className="md:h-[24px] h-[20px] w-[20px] md:w-[24px] text-gray-300 hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#735555] cursor-pointer" />
              </li>

              <li>
                <FaLinkedin className="md:h-[24px] h-[20px] w-[20px] md:w-[24px] text-gray-300 hover:text-[#735555] cursor-pointer" />
              </li>
              <li>
                <LuInstagram className="md:h-[25px] h-[21px] w-[21px] md:w-[25px] text-gray-300 hover:text-[#735555] cursor-pointer" />
              </li>
              <li>
                <FaTwitter className="md:h-[25px] h-[21px] w-[21px] md:w-[25px] text-gray-300 hover:text-[#735555] cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 border-gray-400" />
        <div className="flex flex-wrap max-md:flex-col gap-4">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-white font-lato text-gray-400 text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-lato text-gray-400 text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white font-lato text-gray-400 text-sm"
              >
                Security
              </Link>
            </li>
          </ul>
          <p className="text-gray-400 text-sm md:ml-auto font-lato">
            © BeautySalon. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
