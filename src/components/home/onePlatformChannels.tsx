"use client";
import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React, { useState } from "react";

const channelList = [
  {
    id: 1,
    title: "Website",
    description: "Inspire new vistors with shoppable UGC widgets",
    image: "/images/channels/website-display.png",
  },
  {
    id: 2,
    title: "Emails",
    description:
      "Build trust by including UGC with real customers in your email flows",
    image: "/images/channels/email-display.png",
  },
  {
    id: 3,
    title: "Ads",
    description:
      "Ditch boring product pictures and choose authentic UGC that converts",
    image: "/images/channels/marketing-display.png",
  },
];

const OnePlatformChannels = () => {
  const [selectedItem, setSelectedItem] = useState(channelList[0]);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center mb-24">
      <div className="flex flex-col flex-1 md:mr-5 my-10">
        <h2 className="text-gray-90 text-2xl md:text-5xl font-semibold">
          Showcase UGC in your marketing channels
        </h2>
        <p className="text-gray-60 text-sm md:text-base mt-2">
          Fuel your marketing efforts with authentic content that builds trust
          within your brand community
        </p>
        <div className="flex flex-col space-y-4 mt-8">
          {channelList.map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex flex-col bg-transparent p-5 rounded-xl border text-start",
                item.id == selectedItem.id ? "border-primary" : "border-border"
              )}
              onClick={() => setSelectedItem(item)}
            >
              <span className="text-md font-medium text-gray-80">
                {item.title}
              </span>
              <span className="text-gray-60 text-sm">{item.description}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 md:ml-5 w-full md:h-[650px] md:min-h-full rounded-3xl p-6 flex lg:p-10 bg-gray-30">
        <Image
          width={400}
          height={650}
          src={selectedItem.image}
          alt={selectedItem.title}
          className="w-full h-full max-h-[500px] object-contain mt-auto"
        />
      </div>
    </div>
  );
};

export default OnePlatformChannels;
