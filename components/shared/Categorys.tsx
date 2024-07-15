"use client";

import { links } from "@/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
 
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
          className={`${isActive ? " text-blue-200" : " dark:text-slate-200 text-main-4"} text-xl `}
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
