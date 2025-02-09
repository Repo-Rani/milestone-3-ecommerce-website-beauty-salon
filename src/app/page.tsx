'use client'
import React from 'react'
import Hero from '@/components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className=''>
      <Hero/>
    </div>
  )
}

export default Home;