import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
  };
  className?: string;
};
const OnePlatformCard = (props: Props) => {
  const { data, className } = props;

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="w-full pt-[70%] rounded-xl relative overflow-hidden border border-border">
        <Image
          width={700}
          height={400}
          src={data.image}
          alt={data.title}
          className="w-full h-full absolute -top-1 -left-1 object-cover scale-105"
        />
      </div>
      <div className="w-3/4 mx-auto">
        <h3 className="text-lg md:text-xl font-medium text-center mt-5">
          {data.title}
        </h3>
        <p className="text-sm md:text-base text-gray-60 text-center mt-2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default OnePlatformCard;
