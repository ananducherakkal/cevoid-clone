"use client";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

type Props = {
  className?: string;
  imageList: {
    id: number;
    name: string;
    profession: string;
    image: string;
  }[];
};

const ImageSlider = (props: Props) => {
  const { imageList, className } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "w-full md:w-[550px] max-w-full bg-gray-30 flex justify-center overflow-hidden py-10 rounded-xl transition-opacity duration-700 h-fit",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="w-[900px] max-w-[200vw]">
        <Slide
          duration={2000}
          arrows
          autoplay
          slidesToShow={3}
          slidesToScroll={1}
        >
          {imageList.map((image) => (
            <div key={image.id} className="w-full px-5">
              <div
                className="w-full h-full rounded-lg shadow-xl overflow-hidden relative"
                style={{ paddingTop: "140%" }}
              >
                <div className="w-full h-full absolute top-0 left-0 p-3 flex flex-col justify-end items-start">
                  <Image
                    width={250}
                    height={350}
                    src={image.image}
                    alt={image.name}
                    className="w-full h-full object-cover absolute top-0 left-0 -z-10"
                  />
                  <div className="text-gray-10">
                    <div className="text-xs font-medium">@{image.name}</div>
                    <div className="text-xxs">{image.profession}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ImageSlider;
