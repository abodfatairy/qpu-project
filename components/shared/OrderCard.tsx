"use client";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

type OrderCardProps = {
  price: number;
  image: string;
  user: string;
  productName: string;
};
const OrderCard = ({ price, image, user, productName }: OrderCardProps) => {
  return (
   
      <BackgroundGradient className='rounded-[22px]  p-4 bg-white dark:bg-slate-900 '>

              <Image
                src={image}
                alt='jordans'
                height='400'
                width='400'
                className='object-contain'
              />
           
          {/* details */}
          <div className='  '>
            <p className=' text-center capitalize text-slate-400 font-semibold tracking-wider'>
              {productName}
            </p>
            <div className=' flex flex-col gap-3 p-5'>
              {/* owner */}
              <div className=' flex justify-between items-center md:text-xl'>
                <p className=' text-slate-400 '>From:</p>
                <h2 className=' text-main-2'>{user}</h2>
              </div>
              {/* price */}
              <div className=' flex justify-between items-center md:text-xl'>
                <p className=' text-slate-400'>price:</p>
                <h2 className=' text-main-2'>
                  <span className='text-sm'>$</span>
                  {price}
                </h2>
              </div>
            </div>
          </div>
      
      </BackgroundGradient>

  );
};

export default OrderCard;
