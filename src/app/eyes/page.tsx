'use client'
import React from 'react'
import Image from 'next/image';
import Eyes from '@/components/Eyes';
import MenuSidebar from '@/components/MenuSidebar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const EyesPage = () => {

   useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-bottom",
        });
      }, []);
    
  return (
    <>
      <section className="h-[4000px] md:h-[2900px]  xsm:h-[4250px] lg:h-[2150px] xl:h-[2320px] w-full">
      <MenuSidebar/>
   
   <div className=' absolute xl:left-[320px] xl:top-[182px] lg:top-[180px] left-[250px] hidden lg:flex '>

   
<Image src='/eyes route.webp' alt='best seller' quality={100}  priority height={400} width={1100} className='h-[400px] w-[1100px]'/>


 </div>
   <div className=' relative   md:top-[160px] top-[100px] lg:hidden '>

   
   <Image src='/eyes route.webp' alt='best seller' 
    quality={100}  priority height={400} width={1400} className=' md:w-[550px] h-[250px] relative  md:left-[200px] '/>


    </div>
    
    <div className='absolute top-[420px] md:top-[650px] md:left-[380px] left-[20px] '>

   

    <div className='lg:relative lg:w-full w-0'>
  <h2  data-aos="fade-right"
        data-aos-delay="200"  className='relative xl:top-0 w-[250px] xxxl:left-[-60px] xxxl:top-[-50px] xl:left-[40px] md:left-[-170px] md:top-[-210px] lg:left-[-120px] lg:top-[-60px] lg:text-[48px] xsm:top-0 sm:top-[-50px] top-[-50px] xsm:text-[32px] text-[30px] text-black font-bold font-playfair xsm:top-[-70px]whitespace-nowrap'>Eyes</h2>
  <div className="flex justify-between relative xl:top-[30px] lg:top-[-40px] xxxl:top-[-20px] xxxl:left-[-80px] xl:left-0 lg:left-[-80px] md:top-[-180px] xsm:top-0 sm:top-[-30px]  md:left-[-160px] top-[-30px] lg:space-x-[450px] whitespace-nowrap xl:space-x-[300px]  md:space-x-[300px] xsm:space-x-[200px] sm:space-x-[120px] space-x-[90px]">
    <div className=' relative xl:left-[50px] font-lato text-black text-[14px]'>6 Products</div>
    <div className='font-lato text-black text-[14px] flex flex-row md:items-start items-center gap-[10px]'><span>Sort By: Recommended</span>
    <Image src='/DropDownvector.svg' alt='side-vector' width={14} height={14}
    className='w-[14px] h-[14px] rotate-90' /></div>
    
  </div>
</div>

<div className="relative xxxl:top-[-70px] xl:top-[-80px]  xl:left-[-85px] xxxl:left-[-80px] lg:top-[-30px] md:top-[-180px] xsm:top-[-150px] top-[-150px] sm:top-[-140px] md:left-0 xsm:left-[50px] sm:left-[20px]">
<Eyes/>
</div>
    </div>
  
   </section>
    </>
   
  )
}

export default EyesPage;