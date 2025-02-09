import React from "react";
import Link from "next/link";

const MenuSidebar = () => {
  const sidebarItems = [
    { href: "/shopall", label: "All Products" },
    { href: "/bestseller", label: "Best Seller" },
    { href: "/eyes", label: "Eyes" },
    { href: "/face", label: "Face" },
    { href: "/lips", label: "Lips" },
    { href: "/new", label: "New" },
  ];
  return (
    <>
      <aside className="w-[271px] xl:h-[344px] lg:h-[344px] absolute left-[40px] lg:left-[20px] xl:left-[80px] xl:top-[182px] md:top-[160px] md:w-[60px] md:h-[280px] md:flex flex-col gap-4 xl:px-0 lg:px-3 hidden">
        <div className="flex flex-row items-start gap-[51px] w-[217px] h-[24px]">
          <span data-aos="fade-right"  data-aos-delay="200" className="font-playfair font-bold text-[24px] lg:text-[26px]  text-center text-black ">
            Brows By
          </span>
          <div  className="w-[1px] h-[250px] lg:h-[200px] md:h-[130px]  absolute xl:top-[-50px] lg:top-[-50px] lg:left-[100px] xl:left-[100px] md:top-[-20px] md:left-[60px]  rotate-90 border-black  border-[0.5px] opacity-50   "></div>
        </div>

        <div data-aos="fade-right"  data-aos-delay="200" className="w-[100px] h-[400px] flex justify-between flex-col relative top-[30px]">
          {sidebarItems.map((item, index) => (
            <span key={index}>
              <Link
                href={item.href}
                className="font-lato font-normal text-[14px] lg:text-[18px] text-black hover:underline hover:scale-110 transition-all duration-300 ease-in-out"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </aside>
    </>
  );
};

export default MenuSidebar;
