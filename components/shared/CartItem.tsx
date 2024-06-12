import { Products } from "@/types";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import QtyBtn from "./QtyBtn";
import { decrement, increment } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
const CartItem = ({ item, qty }: { item: Products; qty: number }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=' flex flex-row  items-center  gap-2 '>
        <div className=' flex flex-row  gap-2'>
          <Image
            src={item.image}
            width={100}
            height={100}
            alt='prodcut image'
            className=' object-cover  '
          />
        </div>
        <div className=' flex flex-col gap-2'>
          <span className=' text-main-1 text-lg'>{item.title}</span>
          <span className=' text-slate-600 text-xl'>${item.price}</span>
        </div>
        <div className=''>
          <QtyBtn
            qty={qty}
            onDecrease={() => dispatch(decrement(item))}
            onIncrease={() => dispatch(increment(item))}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
