import React from "react";
import Logo from "../icons/logo";

const footerList = [
  {
    title: "Cevoid",
    items: [
      { title: "Pricing" },
      { title: "Company" },
      { title: "Careers" },
      { title: "Customers" },
      { title: "Blog" },
    ],
  },
  {
    title: "Product",
    items: [{ title: "Collect" }, { title: "Showcase" }, { title: "Engage" }],
  },
  {
    title: "Resources",
    items: [
      { title: "Integrations" },
      { title: "Partners" },
      { title: "API Docs" },
      { title: "Changelog" },
    ],
  },
  {
    title: "Help & support",
    items: [
      { title: "FAQ" },
      { title: "Contact sales" },
      { title: "Help center" },
      { title: "Service status" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full relative border-t border-border">
      <div className="container-max-w py-16 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerList.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center sm:items-start"
            >
              <div className="font-medium text-lg text-gray-90 mb-4">
                {section.title}
              </div>
              <div className="flex flex-col space-y-4 text-base text-gray-60 items-center sm:items-start">
                {section.items.map((item) => (
                  <div key={item.title}>{item.title}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center mt-10 sm:mt-24 text-gray-80 text-sm  flex-col sm:flex-row">
          <Logo className="w-9 h-9 text-primary sm:mr-7" />
          <div className="flex sm:space-x-7 items-center flex-col sm:flex-row mt-4 sm:mt-0 space-y-4 sm:space-y-0">
            <div>&copy; 2024 Cevoid copy</div>
            <div>Cookies</div>
            <div>Cookie settings</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
