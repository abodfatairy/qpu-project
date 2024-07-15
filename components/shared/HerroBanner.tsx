import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../ui/CustomButton";

const HeroBanner = async () => {
  return (
    <div className=' py-[100px] px-[40px] bg-white relative  md:h-[500px] leading-[0.9] w-screen md:w-full container dark:bg-dark-2 border border-slate-700 rounded-md'>
      <div className=' '>
        <div className=" absolute top-2 flex flex-col gap-2 ">
          
        <p className=' md:text-xl   text-red-200'>New</p>
        <h3 className=' text-2xl md:text-6xl dark:text-white'>Black HeadPhone</h3>
          <h1 className=' text-lg md:text-3xl  md:mt-3 md: ml-3 dark:text-white'>50
            <span className=" text-sm md:text-xl">
            $
            </span>
          </h1>
        </div>
        <div className=' absolute top-0 right-0 md:right-[20%] w-40 h-40 md:w-[450px] md:h-[450px]'>
          <Image
            src='/assets/images/4.webp'
            alt='headphones'
            className=''
            fill
          />
        </div>
        <div className=' h-full'>
          <Link
            href={``}
            className=' absolute bottom-[10%] '
          >
            <CustomButton title='Buy now' />
          </Link>
          <div className=' absolute right-[10%] bottom-[10%] w-[300px] flex flex-col text-black'>
            <p className=' text-end dark:text-white'>Best in the market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
