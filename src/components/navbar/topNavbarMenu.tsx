import React from "react";
import TopNavbarMenuItem from "./topNavbarMenuItem";

const TopNavbarMenu = () => {
  return (
    <div className="hidden lg:flex items-center mx-11">
      <TopNavbarMenuItem>Product</TopNavbarMenuItem>
      <TopNavbarMenuItem newTag>Engage</TopNavbarMenuItem>
      <TopNavbarMenuItem>Customers</TopNavbarMenuItem>
      <TopNavbarMenuItem>Pricing</TopNavbarMenuItem>
    </div>
  );
};

export default TopNavbarMenu;
