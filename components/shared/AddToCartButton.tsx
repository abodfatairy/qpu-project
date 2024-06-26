"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { Products } from "@/types";
import { increment, productQty } from "@/redux/features/cartSlice";

const AddToCartButton = ({ item }: { item: Products }) => {
  const qty = useAppSelector((state) => productQty(state, item._id));
  const dispatch = useAppDispatch();
  return (
    <Button
      className='  bg-main-1 px-2 py-1 h-8   md:h-10 md:px-4   text-[10px] md:text-base    '
      onClick={() => dispatch(increment(item))}
    >
      {qty?'Added':'Add to cart'}
    </Button>
  );
};

export default AddToCartButton;
