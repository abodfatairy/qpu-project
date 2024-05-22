"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
export type HomeCardType = {
  item: {
    name: string;
    image: string;
  };
};
const HomeCard = ({ item }: HomeCardType) => {
  const router = useRouter();
  return (
    // <div
    //   className=' relative cursor-pointer rounded-md overflow-hidden shadow-lg max-w-[700px] '
    //   onClick={() => router.push(`/products/${item.name}`)}
    // >
    <div
      onClick={() => router.push(`/products/${item.name}`)}
      className=' rounded-lg overflow-hidden'
    >
      <Image
        src={item.image}
        alt=''
        fill
        priority
        sizes='(max-width: 768px) 100vw, 33vw'
        className=' cursor-pointer  rounded-lg'
        objectFit='cover'
        objectPosition='center'
      />
      <p className=' text-white  absolute top-0 left-3 z-10 font-semibold capitalize md:text-2xl'>
        {item.name}
      </p>
    </div>
  );
};

export default HomeCard;
