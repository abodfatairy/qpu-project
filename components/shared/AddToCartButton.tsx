"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { Products, ProductsProps } from "@/types";
import { increment, productQty } from "@/redux/features/cartSlice";

const AddToCartButton = ({ item }: { item: ProductsProps }) => {
  const qty = useAppSelector((state) => productQty(state, item.id));
  const dispatch = useAppDispatch();
  return (
    <Button
      className=' relative inline-flex md:h-12 overflow-hidden rounded-full p-[1px]  w-full '
      onClick={() => dispatch(increment(item))}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1    text-[10px] md:text-sm font-medium text-white backdrop-blur-3xl'>
        {qty ? "Added" : "Add to cart"}
      </span>
    </Button>
  );
};

export default AddToCartButton;
