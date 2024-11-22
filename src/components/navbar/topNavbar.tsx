"use client";
import React, { useEffect, useState } from "react";
import HeaderLogo from "./topNavbarLogo";
import TopNavbarMenu from "./topNavbarMenu";
import TopNavbarAuthSection from "./topNavbarAuthSection";
import TopNavbarMobileMenu from "./topNavbarMobileMenu";
import { cn } from "@/utils/shadcn";

const TopNavbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full fixed top-0 left-0 border-b z-30 bg-gray-10 transition-all duration-200",
        navbarScroll ? "border-border" : "border-transparent"
      )}
    >
      <div className="container-max-w py-4 h-16 lg:h-20 mx-auto flex items-center">
        <HeaderLogo />
        <TopNavbarMenu />
        <TopNavbarAuthSection />
        <TopNavbarMobileMenu />
      </div>
    </nav>
  );
};

export default TopNavbar;
