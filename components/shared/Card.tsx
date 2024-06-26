import { Products } from "@/types";
import Image from "next/image";
import Link from "next/link";
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
      className='  flex flex-col   w-40 md:w-96 h-64 md:h-auto   max-w-[450px] shadow-sm rounded-xl  bg-yellow-50/10 dark:bg-dark-1 relative border-slate-200 border'
    >
      <Link
        href={`/products/product/${item?._id}`}
        className='w-40 h-32 md:w-96 md:h-72  md:max-h-[300px] select-none overflow-hidden  '
      >
        <div className='absolute w-40 h-40 md:w-96 md:h-72  '>
          <Image
            src={item?.image}
            alt=''
            fill
            className=' object-cover object-center rounded-t-xl '
          />
        </div>
      </Link>
      <div className=' flex-col flex gap-1 p-2  justify-between'>
        <div className=' flex  items-center justify-between md:items-start     '>
          <h1 className='  font-semibold text-blue-800 dark:text-dark-4 tracking-[-1px] text-[13px]  text-center  md:text-2xl mb-1 mt-5 md:mb-4 '>
            {item?.title}
          </h1>
          {/* stars rate */}
          <div className=' flex gap-1  mt-5'>
            <FaStar className=' text-yellow-400 text-[10px] md:text-base' />
            <FaStar className=' text-yellow-400 text-[10px] md:text-base' />
            <FaStar className=' text-yellow-400 text-[10px] md:text-base' />
            <FaStar className=' text-yellow-400 text-[10px] md:text-base' />
            <CiStar className=' text-yellow-400 text-[10px] md:text-base' />
          </div>
        </div>
        <div className=' flex flex-col md:flex-row   justify-between   items-center md:p-2 '>
          <div className='  md:p-2 flex flex-row  items-center md:flex-col gap-2 '>
            <p className=' line-through text-gray-400 text-[13px] md:text-base'>
              ${item?.previousPrice}
            </p>
            <p className='  font-black text-main-1 dark:text-dark-4 text-[13px] md:text-base'>
              <span className=' '>$</span>
              {item?.price}
            </p>
          </div>
          <div className=' flex items-center justify-center gap-2  w-5 md:w-auto'>
            <AddToCartButton item={item} />
            <BuyButton item={item} />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Card;
