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
    <div className=''>
      <div className=' md:h-screen w-screen md:w-40  border-b md:border-r border-gray-200  pb-2 md:pb-0  items-center gap-3'>
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
                    <Link
                      href={`/products/${category}`}
                      className={`${
                        isActive ? "text-red-600" : "text-blue-300"
                      } capitalize w-fit`}
                    >
                        {category}
                    </Link>
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
                  className='  flex  items-center justify-center   mt-3'
                  key={index}
                >
                  <Link
                    href={`/products/${category}`}
                    className={`${
                      isActive ? "text-red-600" : "text-blue-300"
                    } capitalize w-fit`}
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
