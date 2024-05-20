"use client";
import { Products } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const SideBar = ({ data }: any) => {
  const pathname = usePathname();

  const uniqueCategories = new Set();
  return (
    <div className=' md:min-w-40 mt-[45px]  dark:bg-dark-2 z-20 '>
      <div className=' md:h-screen  md:w-30   border-b md:border-r  bg-main-6 dark:bg-dark-2  pb-2 md:pb-0  items-center gap-3 fixed '>
        <div className=''>
          {data?.map((item: Products) => {
            uniqueCategories.add(item.category);

            return null; // Prevent rendering individual category divs here
          })}
          {/* return category filter names */}
          <Carousel className=' flex  md:hidden'>
            <CarouselContent className=' w-screen'>
              {Array.from(uniqueCategories).map((category: any, index) => {
                const isActive =
                  `/products/${category}` === pathname.replace("%20", " ");
                return (
                  <CarouselContent
                    className=' w-screen p-2 ml-4'
                    key={index}
                  >
                    <CarouselItem className='basis-1/3'>
                      <Link href={`/products/${category}`}>{category}</Link>
                    </CarouselItem>
                  </CarouselContent>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className=' hidden md:flex  flex-col  ml-2   md:w-40 '>
            {Array.from(uniqueCategories).map((category: any, index) => {
              const isActive =
                `/products/${category}` === pathname.replace("%20", " ");
              return (
                <div
                  className='  flex  items-center justify-center   mt-3 border-b border-main-4 last:border-none'
                  key={index}
                >
                  <Link
                    href={`/products/${category}`}
                    className={`${
                      isActive ? " text-main-1  dark:text-main-1" : ""
                    } capitalize w-fit font-medium dark:text-dark-4 pb-3`}
                  >
                    {category}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
