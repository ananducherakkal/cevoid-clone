import React from "react";
import { Button } from "../ui/button";

const TopNavbarAuthSection = () => {
  return (
    <div className="hidden lg:flex items-center space-x-2 ml-auto">
      <button>Log in</button>
      <Button>Start now</Button>
    </div>
  );
};

export default TopNavbarAuthSection;
