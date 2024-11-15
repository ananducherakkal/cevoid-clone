import React from "react";
import HeaderLogo from "./topNavbarLogo";
import TopNavbarMenu from "./topNavbarMenu";
import TopNavbarAuthSection from "./topNavbarAuthSection";
import TopNavbarMobileMenu from "./topNavbarMobileMenu";

const TopNavbar = () => {
  return (
    <nav className="w-full px-4 lg:px-10">
      <div className="max-w-[1204px] w-full py-4 h-16 lg:h-20 mx-auto flex items-center">
        <HeaderLogo />
        <TopNavbarMenu />
        <TopNavbarAuthSection />
        <TopNavbarMobileMenu />
      </div>
    </nav>
  );
};

export default TopNavbar;
