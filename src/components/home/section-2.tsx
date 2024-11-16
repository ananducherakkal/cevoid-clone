import Image from "next/image";
import Link from "next/link";
import React from "react";

const brandList = [
  {
    id: 1,
    name: "Nordic Nest",
    url: "https://www.nordicnest.com/",
    image: "/images/brands/brand-3.png",
  },
  {
    id: 2,
    name: "Lo&sons",
    url: "https://loandsons.com/",
    image: "/images/brands/brand-2.png",
  },
  {
    id: 3,
    name: "Photowall",
    url: "https://photowall.com/",
    image: "/images/brands/brand-5.png",
  },
  {
    id: 4,
    name: "Lenonisa",
    url: "https://leonisa.com/",
    image: "/images/brands/brand-1.png",
  },
  {
    id: 5,
    name: "safira",
    url: "https://www.safira.com/",
    image: "/images/brands/brand-6.png",
  },
  {
    id: 6,
    name: "Pen store",
    url: "https://www.penstore.se/",
    image: "/images/brands/brand-4.png",
  },
];
const SectionTwo = () => {
  return (
    <section className="container-max-w grid grid-cols-3 gap-3 md:flex items-center justify-between py-14">
      {brandList.map((brand) => (
        <div key={brand.id} className="h-20 w-full max-w-44">
          <Link href={brand.url}>
            <Image
              height={75}
              width={175}
              src={brand.image}
              alt={brand.name}
              className="h-full w-full object-contain"
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SectionTwo;
