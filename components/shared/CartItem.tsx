import { Products, ProductsProps } from "@/types";
import Image from "next/image";
import QtyBtn from "./QtyBtn";
import { decrement, increment } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
import BuyButton from "./BuyButton";
const CartItem = ({ item, qty }: { item: ProductsProps; qty: number }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=' flex flex-row  items-center  gap-2 my-5  '>
        <div className=' flex flex-row  gap-z'>
          <Image
            src={item.image1}
            width={200}
            height={200}
            alt='prodcut image'
            className=' object-cover'
          />
        </div>
        <div className=' flex flex-col gap-2'>
          <span className=' text-main-1 text-lg'>{item.name}</span>
          <span className=' text-slate-600 text-xl'>${qty * item.price}</span>
        </div>
        <div className=''>
          <QtyBtn
            qty={qty}
            onDecrease={() => dispatch(decrement(item))}
            onIncrease={() => dispatch(increment(item))}
          />
        </div>
      </div>
      <div className=' flex items-center justify-center'>
        <BuyButton
          item={item}
          qty={qty}
        />
      </div>
    </>
  );
};

export default CartItem;
