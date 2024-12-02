import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  images: string[];
  profession: string;
};
const ImageGalleryCard = (props: Props) => {
  const { name, images, profession } = props;
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length > 1) {
        const randomChance = Math.floor(Math.random() * 5) + 1;
        if (randomChance === 1) {
          setIsLoaded(false);
          setTimeout(() => {
            setIsLoaded(true);
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 500);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full absolute top-0 left-0 p-3 flex flex-col justify-end items-start">
      <Image
        width={300}
        height={450}
        className={cn(
          "absolute top-0 left-0 min-w-full min-h-full max-w-full -z-10 object-cover transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        alt={name}
        src={images[imageIndex]}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="text-gray-10">
        <div className="text-xs font-medium">@{name}</div>
        <div className="text-xxs">{profession}</div>
      </div>
    </div>
  );
};

export default ImageGalleryCard;
