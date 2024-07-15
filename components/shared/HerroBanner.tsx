import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../ui/CustomButton";

const HeroBanner = async () => {
  return (
    <div className=' py-[100px] px-[40px] bg-white relative h-[500px] leading-[0.9] w-full container dark:bg-dark-2 border border-slate-700 rounded-md hidden md:block'>
      <div className=''>
        <p className=' text-xl dark:text-white'>New</p>
        <h3 className=' text-6xl dark:text-white'>Black HeadPhone</h3>
        <h1 className=' text-3xl  mt-3 ml-3 dark:text-white'>50$</h1>
        <div className=' absolute top-0 right-[20%] w-[450px] h-[450px]'>
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
            {/* <h5 className=' mb-3 font-semibold  self-end dark:text-white'>
              Description
            </h5> */}
            <p className=' text-end dark:text-white'>Best in the market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
