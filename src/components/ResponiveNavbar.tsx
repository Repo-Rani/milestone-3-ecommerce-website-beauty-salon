"use client";
import React from "react";
import Navbar from "./Navbar";
import { MobileNav } from "./MobileNav";
import { useState } from "react";

export const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};
