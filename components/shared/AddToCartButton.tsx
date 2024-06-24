"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { Products } from "@/types";
import { increment, productQty } from "@/redux/features/cartSlice";

const AddToCartButton = ({ item }: { item: Products }) => {
  const qty = useAppSelector((state) => productQty(state, item._id));
  const dispatch = useAppDispatch();
  if (qty) {
    return (
      <div className=''>
        <Button className='bg-main-1'> Added</Button>
      </div>
    );
  }
  return (
    <Button
      className='  bg-main-1   text-[10px] md:text-base w-full flex-1   '
      onClick={() => dispatch(increment(item))}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
