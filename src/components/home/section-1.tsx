"use client";
import React from "react";
import ImageGallery from "../common/imageGallery";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <section className="w-full lg:min-h-screen relative overflow-hidden pt-36">
      <div className="container-max-w">
        <motion.div
          className="flex flex-col pt-10 pb-[28vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[7vw] leading-[7.2vw] sm:text-2xl lg:text-5xl text-gray-80 font-semibold">
            All-in one UGC platform
            <br /> for e-commerce brands
          </h1>
          <h2 className="text-[3vw] sm:text-lg lg:text-xl text-gray-60 mt-1">
            Empower your brand community to tell your story
            <br />
            through user-generated content
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-start items-center">
            <Button size="md" className="w-full sm:w-fit">
              Start free trial
            </Button>
            <Button variant="secondary" size="md" className="w-full sm:w-fit">
              Contact sales
            </Button>
          </div>
        </motion.div>
      </div>
      <ImageGallery className="absolute w-[105%] -bottom-2 left-1/2 -translate-x-1/2 -z-10 hidden md:flex" />
    </section>
  );
};

export default SectionOne;
