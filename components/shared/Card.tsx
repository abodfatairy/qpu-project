import { Products } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import { IoBagAddOutline } from "react-icons/io5";
const Card = ({ item }: { item: Products }) => {
  return (
    <div className=' flex flex-col  max-w-[250px] shadow-sm rounded-xl overflow-hidden  border border-gray-200 bg-main-5 dark:bg-dark-2 h-[420px] relative'>
      <Link
        href={`/products/product/${item?._id}`}
        className=' max-h-[300px] border border-slate-500 overflow-y-hidden'
      >
        <Image
          src={item?.image}
          width={250}
          height={250}
          alt=''
      
        />
      </Link>
      <div className=' flex-col flex gap-1 p-2 '>
        <div className=' flex justify-between items-center '>
          <h1 className=' text-xl font-semibold text-blue-800 dark:text-dark-4 tracking-[-1px]' >
            {item?.title}
          </h1>
          {/* stars rate */}
          <div className=' flex gap-1'>
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <CiStar className=' text-yellow-400' />
          </div>
        </div>
        <div className=' flex    '>
          <div className='absolute bottom-0'>
            <p className=' line-through text-gray-400'>
              ${item?.previousPrice}
            </p>
            <p className=' font-semibold dark:text-dark-4'> ${item?.price}</p>
          </div>
          <Button className=' bg-main-1 absolute bottom-1 right-1 '>
            <IoBagAddOutline className=' text-white text-2xl' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
