"use client";
import React from "react";
import ImageGalleryCard from "./imageGalleryCard";

const cardConfig = [
  [
    {
      id: 1,
      name: "Maxine",
      profession: "Creator",
      images: ["/images/gallery/gallery-1.jpg"],
      ratio: 129,
    },
  ],
  [
    {
      id: 2,
      name: "Liam",
      profession: "Developer",
      images: ["/images/gallery/gallery-2.jpg"],
      ratio: 100,
    },
  ],
  [
    {
      id: 3,
      name: "Olivia",
      profession: "Designer",
      images: ["/images/gallery/gallery-3.jpg"],
      ratio: 129,
    },
  ],
  [
    {
      id: 4,
      name: "Noah",
      profession: "Engineer",
      images: ["/images/gallery/gallery-4.jpg"],
      ratio: 120,
    },
    {
      id: 5,
      name: "Emma",
      profession: "Writer",
      images: ["/images/gallery/gallery-5.jpg"],
      ratio: 40,
    },
  ],
  [
    {
      id: 6,
      name: "Oliver",
      profession: "Photographer",
      images: ["/images/gallery/gallery-6.jpg"],
      ratio: 140,
    },
    {
      id: 7,
      name: "Ava",
      profession: "Artist",
      images: ["/images/gallery/gallery-7.jpg"],
      ratio: 110,
    },
  ],
  [
    {
      id: 8,
      name: "Elijah",
      profession: "Producer",
      images: [
        "/images/gallery/gallery-8.jpg",
        "/images/gallery/gallery-10.jpg",
      ],
      ratio: 140,
    },
    {
      id: 10,
      name: "Sophia",
      profession: "Director",
      images: [
        "/images/gallery/gallery-9.jpg",
        "/images/gallery/gallery-10.jpg",
      ],
      ratio: 140,
    },
  ],
  [
    {
      id: 11,
      name: "James",
      profession: "Musician",
      images: [
        "/images/gallery/gallery-10.jpg",
        "/images/gallery/gallery-12.jpg",
      ],
      ratio: 140,
    },
    {
      id: 12,
      name: "Isabella",
      profession: "Editor",
      images: ["/images/gallery/gallery-11.jpg"],
      ratio: 110,
    },
  ],
];

const ImageGallery = () => {
  return (
    <div className="w-screen flex justify-center items-end overflow-x-hidden">
      <div className="min-w-[105%] flex items-end space-x-7">
        {cardConfig.map((section, index) => (
          <div key={index} className="flex-1 relative green space-y-7">
            {section.map((card) => (
              <div
                key={card.id}
                className="w-full relative rounded-xl overflow-hidden"
                style={{ paddingTop: `${card.ratio}%` }}
              >
                <ImageGalleryCard
                  name={card.name}
                  profession={card.profession}
                  images={card.images}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
