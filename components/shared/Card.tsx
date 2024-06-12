import { Products } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";
import BuyButton from "./BuyButton";
import AddToCartButton from "./AddToCartButton";
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};
const Card = ({ item, index }: { item: Products; index: number }) => {
  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * 0.05,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className=' flex flex-col    w-96  max-w-[450px] shadow-sm rounded-xl overflow-hidden bg-yellow-50/10 dark:bg-dark-2 relative border-slate-200 border'
    >
      <Link
        href={`/products/product/${item?._id}`}
        className=' w-96 h-72 max-h-[300px] select-none   '
      >
        <div className='absolute w-96 h-72  '>
          <Image
            src={item?.image}
            // src={"/assets/images/1.jpg"}
            // width={250}
            // height={250}
            alt=''
            fill
            className=' object-cover object-center'
          />
        </div>
      </Link>
      <div className=' flex-col flex gap-1 p-2  justify-between'>
        <div className=' flex  flex-col  p-2    '>
          <h1 className='  font-semibold text-blue-800 dark:text-dark-4 tracking-[-1px] text-2xl mb-4 '>
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
        <div className=' flex  justify-between   items-center p-2  '>
          <div className=' p-2 '>
            <p className=' line-through text-gray-400'>
              ${item?.previousPrice}
            </p>
            <p className='  font-black text-main-1 dark:text-dark-4 text-xl'>
              {" "}
              <span className=' text-base'>$</span>
              {item?.price}
            </p>
          </div>
          <div className=' flex items-center justify-center gap-2'>
            <AddToCartButton item={item} />
            <BuyButton item={item} />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Card;
