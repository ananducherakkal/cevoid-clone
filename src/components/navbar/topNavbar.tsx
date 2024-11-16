import React from "react";
import HeaderLogo from "./topNavbarLogo";
import TopNavbarMenu from "./topNavbarMenu";
import TopNavbarAuthSection from "./topNavbarAuthSection";
import TopNavbarMobileMenu from "./topNavbarMobileMenu";

const TopNavbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-30">
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
