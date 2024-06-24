"use client";
import { Products } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const SideBar = ({ data }: any) => {
  const pathname = usePathname();
  const isproActive = "/products" === pathname;

  const uniqueCategories = new Set();
  return (
    <div className=' md:w-[250px] mt-[45px] md:mt-12  dark:bg-dark-2 z-20 mr-6   '>
      <div className=' md:h-screen md:pl-5  md:w-30      bg-main-2 dark:bg-dark-2  pb-2 md:pb-0  items-center gap-3 fixed '>
        <div className=''>
          {data?.map((item: Products) => {
            uniqueCategories.add(item.category);

            return null; // Prevent rendering individual category divs here
          })}
          {/* return category filter names */}

          {/* mobile  sideBar --------------------------------------------------------------- */}

          <Carousel className=' flex  md:hidden dark:bg-main-2 border-t border-t-white w-screen'>
            <CarouselContent className=' '>
              {Array.from(uniqueCategories).map((category: any, index) => {
                const isActive =
                  `/products/${category}` === pathname.replace(" ", "");
                return (
                  <CarouselContent
                    className='  py-2 ml-4'
                    key={index}
                  >
                    <CarouselItem className=' w-auto'>
                      <Link
                        className={`${
                          isActive ? " font-semibold" : ""
                        } text-white`}
                        href={`/products/${category.replace(" ", "")}`}
                      >
                        {category}
                      </Link>
                    </CarouselItem>
                  </CarouselContent>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* desktop sideBar */}
          <div className=' hidden md:flex   flex-col  ml-2   md: w-[250px]  '>
            <div className=' py-10 text-white font-bold tracking-widest '>
              Products
            </div>
            <Link
              href={`/products`}
              className={`${
                isproActive
                  ? " relative bg-main-6 rounded-br-lg rounded-l-[20px] before:absolute before:bg-transparent before:top-[47px] before:right-[0px] before:h-[35px] before:w-[35px] before:rounded-tr-[18px] before:shadow-5xl ......  after:absolute   after:bg-transparent after:bottom-[47px] after:right-0 after:h-[35px] after:w-[35px] after:rounded-tl-[18px] after:rotate-180   after:shadow-5xl text-main-1  "
                  : " text-white"
              }  flex   p-3 pl-8  items-center capitalize w-[250]`}
            >
              ALL
            </Link>
            {Array.from(uniqueCategories).map((category: any, index) => {
              const isActive =
                `/products/${category.replace(" ", "")}` ===
                pathname.replace(" ", "");
              return (
                <div
                  className='  flex  items-center justify-center     '
                  key={index}
                >
                  <Link
                    href={`/products/${category.replace(" ", "")}`}
                    className={`${
                      isActive
                        ? " relative bg-main-6 rounded-br-lg rounded-l-[20px] before:absolute before:bg-transparent before:top-[47px] before:right-[0px] before:h-[35px] before:w-[35px] before:rounded-tr-[18px] before:shadow-5xl ......  after:absolute   after:bg-transparent after:bottom-[47px] after:right-0 after:h-[35px] after:w-[35px] after:rounded-tl-[18px] after:rotate-180   after:shadow-5xl text-main-1  "
                        : " text-white"
                    }  flex w-screen  p-3 pl-8  items-center capitalize`}
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
