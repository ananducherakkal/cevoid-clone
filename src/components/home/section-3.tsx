"use client";
import React from "react";
import ImageSlider from "./imageSlider";

const imageList = [
  {
    id: 1,
    name: "Maxine",
    profession: "Creator",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    id: 2,
    name: "Liam",
    profession: "Developer",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    id: 3,
    name: "Olivia",
    profession: "Designer",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    id: 4,
    name: "Noah",
    profession: "Engineer",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    id: 5,
    name: "Emma",
    profession: "Writer",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    id: 6,
    name: "Oliver",
    profession: "Photographer",
    image: "/images/gallery/gallery-6.jpg",
  },
  {
    id: 7,
    name: "Ava",
    profession: "Artist",
    image: "/images/gallery/gallery-7.jpg",
  },
  {
    id: 8,
    name: "Elijah",
    profession: "Producer",
    image: "/images/gallery/gallery-8.jpg",
  },
  {
    id: 10,
    name: "Sophia",
    profession: "Director",
    image: "/images/gallery/gallery-9.jpg",
  },
  {
    id: 11,
    name: "James",
    profession: "Musician",
    image: "/images/gallery/gallery-10.jpg",
  },
  {
    id: 12,
    name: "Isabella",
    profession: "Editor",
    image: "/images/gallery/gallery-11.jpg",
  },
];

const SectionThree = () => {
  return (
    <section className="container-max-w min-h-[650px] py-10 flex flex-col  lg:flex-row items-center">
      <div className="flex-1 mb-16 lg:mr-16 min-h-full flex flex-col justify-center">
        <h2 className="text-gray-80 text-2xl lg:text-5xl font-semibold">
          Build your brand story with your community
        </h2>
        <p className="text-gray-60 lg:text-lg mt-4">
          Your community consists of thousands of potential creators: customers,
          influencers, and even your own team! Empower them to create authentic
          photos and videos with your product to inspire new shoppers and drive
          social proof.
        </p>
      </div>
      <ImageSlider imageList={imageList} className="flex-1" />
    </section>
  );
};

export default SectionThree;
