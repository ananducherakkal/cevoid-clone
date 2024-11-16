"use client";
import React, { useState } from "react";
import HamburgerIcon from "../icons/hamburgerIcon";
import { cn } from "@/utils/shadcn";
import CircleCrossIcon from "../icons/circleCrossIcon";
import TopNavbarMenuItem from "./topNavbarMenuItem";
import { Button } from "../ui/button";

const TopNavbarMobileMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevValue) => !prevValue);
  };

  return (
    <div className="flex lg:hidden ml-auto">
      <button className="" onClick={toggleMenu}>
        <HamburgerIcon className="w-6 h-6" />
      </button>
      <div
        className={cn(
          "bg-primary z-40 h-screen w-screen fixed top-0 -right-full transition-transform",
          active ? "-translate-x-full" : "translate-x-10"
        )}
      >
        <div className="w-full h-full p-6 flex flex-col">
          <button className="ml-auto" onClick={toggleMenu}>
            <CircleCrossIcon className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center space-y-4 my-auto">
            <TopNavbarMenuItem>Product</TopNavbarMenuItem>
            <TopNavbarMenuItem newTag>Engage</TopNavbarMenuItem>
            <TopNavbarMenuItem>Customers</TopNavbarMenuItem>
            <TopNavbarMenuItem>Pricing</TopNavbarMenuItem>
          </div>
          <div className="flex items-center space-x-2 mx-auto">
            <button>Log in</button>
            <Button>Start now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbarMobileMenu;
