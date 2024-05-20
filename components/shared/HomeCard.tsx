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
    <div
      className=' relative cursor-pointer rounded-md overflow-hidden shadow-lg'
      onClick={() => router.push(`/products/${item.name}`)}
    >
      <Image
        src={item.image}
        alt=''
        width={400}
        height={400}
        className=''
      />
      <p className=' text-red-200 absolute top-0 left-3 z-10 font-semibold capitalize text-2xl'>{item.name}</p>
    </div>
  );
};

export default HomeCard;
