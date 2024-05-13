"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
 export const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
];
const Categorys = () => {
  const pathname = usePathname();
  return (
    <div className=' flex gap-2 flex-row'>
      {links.map((link, index) => {
        const isActive = link.link === pathname;
        return (
          <div className=" p-2"
          key={index}
          >
          <Link
          href={link.link}
          className={`${isActive ? "text-red-600" : "text-white"} text-xl font-serif`}
          >
            {link.label}
          </Link>
            </div>
        );
      })}
    </div>
  );
};

export default Categorys;
