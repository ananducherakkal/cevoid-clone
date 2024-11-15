import React from "react";
import Logo from "../icons/logo";
import LogoText from "../icons/logoText";

const TopNavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Logo className="w-6 h-6 lg:w-8 lg:h-8 text-primary mr-3" />
      <LogoText className="w-auto h-4 lg:h-6 text-gray-90" />
    </div>
  );
};

export default TopNavbarLogo;
