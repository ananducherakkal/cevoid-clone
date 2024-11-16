import React from "react";
import OnePlatformCard from "./onePlatformCard";
import OnePlatformConnetion from "./onePlatformConnetion";
import OnePlatformChannels from "./onePlatformChannels";

const cardData = [
  {
    id: 1,
    image: "/images/one-platform/card-1.png",
    title: "Direct uploads",
    description:
      "Invite your customers and employees to upload content to your UGC hub",
  },
  {
    id: 2,
    image: "/images/one-platform/card-2.png",
    title: "Social media",
    description:
      "Automatically access user-generated content from your brand community when they tag you on social media",
  },
  {
    id: 3,
    image: "/images/one-platform/card-3.png",
    title: "Influencers",
    description:
      "Give your existing creators a better way to share their content with you",
  },
];

const SectionFour = () => {
  return (
    <section className="container-max-w flex flex-col items-center">
      <div className="flex flex-col items-center py-14">
        <h2 className="text-2xl lg:text-5xl font-semibold text-gray-80 text-center">
          One platform for all your UGC needs
        </h2>
        <p className="text-sm lg:text-base text-gray-60 mt-2 text-center">
          Collect, store, and showcase your user-generated content in a matter
          of clicks
        </p>
      </div>
      <div className="flex w-full flex-col md:flex-row md:space-x-6">
        {cardData.map((card) => (
          <OnePlatformCard
            key={card.id}
            data={card}
            className="flex-1 mb-10 md:mb-0"
          />
        ))}
      </div>
      <OnePlatformConnetion />
      <OnePlatformChannels />
    </section>
  );
};

export default SectionFour;
