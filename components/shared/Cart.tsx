"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { TotalPrice, totalCartItemsQty } from "@/redux/features/cartSlice";
import CartItem from "./CartItem";
import { Separator } from "../ui/separator";
// import { usePathname } from "next/navigation";
const Cart = () => {
  // number of Products in Cart
  const qty = useAppSelector(totalCartItemsQty);
  // products inside Card
  const cartItems = useAppSelector((state) => state.cart.cartItems);
 

  const Router = useRouter();
  const totalPrice = useAppSelector(TotalPrice);
  return (
    <div className='dark:bg-dark-2'>
      <Sheet>
        <SheetTrigger className=' dark:bg-main-2  pb-2'>
          <div className='relative mr-5   '>
            <LiaShoppingBagSolid className=' text-white  text-5xl' />
            <span className=' bg-red-500 text-sm w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center absolute top-0 right-0 text-white'>
              {qty}
            </span>
          </div>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className=' dark:bg-dark-2 w-screen overflow-y-scroll '
        >
          <SheetHeader>
            <SheetTitle className=' text-center'>Logo</SheetTitle>
            <SheetDescription className=' '>
              {cartItems.length > 0 ? (
                <div className=''>
                  {cartItems?.map((item) => (
                    <div
                      className=' '
                      key={item.product._id}
                    >
                      <CartItem
                        item={item.product}
                        qty={item.qty}
                      />
                    </div>
                  ))}
                  <Separator />
                  <div className=' flex items-center justify-between'>
                    <p className=' text-main-1 text-xl'>Total Price is:</p>
                    <p className='text-red-400'>
                      $
                      <span className=' text-lg text-red-400 font-bold'>
                        {totalPrice}
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col gap-5 items-center justify-center h-screen'>
                  <h1 className=' text-2xl'> Your Card is Empty</h1>
                  <Image
                    src={"/assets/images/shopping_cart_next.svg"}
                    alt=''
                    width={150}
                    height={60}
                    className=''
                  />
                  <Button
                    className=' bg-main-1'
                    onClick={() => Router.push("/products")}
                  >
                    <SheetTrigger>Continue Shopping </SheetTrigger>
                  </Button>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
