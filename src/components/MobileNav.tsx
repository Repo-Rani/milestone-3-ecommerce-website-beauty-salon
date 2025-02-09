import React, { useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { MobileNavPropsType } from "../../types/type";

export const MobileNav = ({ showNav, closeNav }: MobileNavPropsType) => {
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/shopall", name: "Shop All" },
    { href: "/bestseller", name: "Best Seller" },
    { href: "/new", name: "New" },
    { href: "/shopall", name: "Shop All" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-white opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex flex-col h-full w-[80%] mx-auto sm:w-[60%] bg-[#735555] space-x-6 z-[10000]`}
      >
        <div className="flex items-center space-x-10 mt-20">
          <ul className="flex flex-col items-center justify-center gap-5 text-white">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-[14px] ml-24 font-medium transition-all duration-200 hover:scale-105 relative"
              >
                <Link href={link.href}>{link.name}</Link>
                {link.name === "Shop All" && (
                  <div
                    className="absolute left-0 w-full bg-[#735555] text-white p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300"
                    onClick={() => setIsAllProductsOpen(!isAllProductsOpen)}
                  >
                    {isAllProductsOpen && (
                      <div className="flex flex-col items-center mt-2">
                        <Link
                          href="/face"
                          className="py-2 px-4 hover:bg-gray-600"
                        >
                          Face
                        </Link>
                        <Link
                          href="/eyes"
                          className="py-2 px-4 hover:bg-gray-600"
                        >
                          Eyes
                        </Link>
                        <Link
                          href="/lips"
                          className="py-2 px-4 hover:bg-gray-600"
                        >
                          Lips
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-4 w-5 h-5 text-white"
          />
        </div>
      </div>
    </div>
  );
};
