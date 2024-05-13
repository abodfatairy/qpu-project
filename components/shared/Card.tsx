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
    <div className=' flex flex-col max-w-[350px] shadow-sm rounded-xl overflow-hidden gap-y-3 border border-gray-200 '>
      <Link href={`/${item?._id}`}>
        <Image
          src={item?.image}
          width={350}
          height={350}
          alt=''
        />
      </Link>
      <div className=' flex-col flex gap-2 p-2'>
        <div className=' flex justify-between items-center' >
          <h1 className=" text-xl font-semibold text-blue-800">{item?.title}</h1>
          {/* stars rate */}
          <div className=' flex gap-1'>
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <FaStar className=' text-yellow-400' />
            <CiStar className=' text-yellow-400' />
          </div>
        </div>
        <div className=' flex justify-between items-center'>
          <div className=''>
            <p className=' line-through text-gray-400'>${item?.previousPrice}</p>
            <p className=' font-semibold'> ${item?.price}</p>
          </div>
          <Button className=' bg-blue-700'>
            <IoBagAddOutline className=' text-white' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
