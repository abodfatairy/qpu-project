import { ProductsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";
import BuyButton from "./BuyButton";
import AddToCartButton from "./AddToCartButton";
// import { CiEdit } from "react-icons/ci";
import { userToken } from "@/auth";
import DeleteButton from "./DeleteButton";
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};

const RealCard = ({ item, index }: { item: ProductsProps; index: number }) => {
  // @ts-ignore
  const { data, user } = userToken();
  const auth = user ? true : false;
  let CanBey;
  auth ? (CanBey = true) : (CanBey = false);
  let isMe;

  data && item.userId! === parseInt(data.ID) ? (isMe = true) : (isMe = false);

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
      className='  flex flex-col   w-40 md:w-96 h-64 md:h-auto   max-w-[450px] shadow-sm rounded-xl  bg-yellow-50/10 dark:bg-dark-2 relative border-slate-200 border'
    >
      <Link
        href={`/products/product/${item?.id}`}
        className='w-40 h-32 md:w-96 md:h-72  md:max-h-[300px] select-none overflow-hidden  '
      >
        <div className='absolute w-40 h-40 md:w-96 md:h-72  '>
          <Image
            src={item?.image1}
            alt=''
            fill
            className=' object-cover object-center rounded-t-xl '
          />
        </div>
      </Link>
      <div className=' flex-col flex gap-1 p-2 mt-10  justify-between'>
        <div className=' flex  items-center justify-around md:items-start     '>
          <h1 className='  font-semibold text-blue-800 dark:text-dark-4 tracking-[-1px] text-[13px]  text-center  md:text-2xl mb-1 mt-5 md:mb-4 '>
            {item?.name}
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
              ${item?.discount}
            </p>
            <p className='  font-black text-main-1 dark:text-dark-4 text-[13px] md:text-base'>
              <span className=' '>$</span>
              {item?.price}
            </p>
          </div>
          {CanBey && (
            <div className=' flex items-center justify-between   gap-1   '>
              <AddToCartButton item={item} />
              <BuyButton
                item={item}
                qty={1}
              />
            </div>
          )}
        </div>
      </div>
      {isMe && (
        <div className='absolute top-5 right-6 flex  gap-5 '>
          {/* <Link
            href={`/products/product/${item?.id}/update`}
            className='  bg-dark-2 p-2 rounded-full'
          >
            <CiEdit className=' text-white text-lg#020617  md:text-3xl' />
          </Link> */}

          <DeleteButton
            user={user}
            item={item.id}
          />
        </div>
      )}
    </MotionDiv>
  );
};

export default RealCard;
