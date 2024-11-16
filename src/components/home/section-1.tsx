import React from "react";
import ImageGallery from "../common/imageGallery";
import { Button } from "../ui/button";

const SectionOne = () => {
  return (
    <div className="w-full lg:min-h-screen relative overflow-hidden pt-36">
      <div className="container-max-w">
        <div className="flex flex-col pt-10 pb-[28vw] max-w-[60vw] md:max-w-none">
          <h1 className="text-4xl lg:text-6xl text-gray-80 font-semibold">
            All-in one UGC platform
            <br /> for e-commerce brands
          </h1>
          <h2 className="text-lg lg:text-xl text-gray-60 mt-1">
            Empower your brand community to tell your story
            <br />
            through user-generated content
          </h2>
          <div className="mt-4 flex space-x-2 justify-start items-center">
            <Button size="md">Start free trial</Button>
            <Button variant="secondary" size="md">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
      <ImageGallery className="absolute w-[105%] -bottom-2 left-1/2 -translate-x-1/2 -z-10 hidden md:flex" />
    </div>
  );
};

export default SectionOne;
