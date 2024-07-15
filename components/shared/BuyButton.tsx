import { Button } from "@/components/ui/button";
import { Products } from "@/types";
import Link from "next/link";

const BuyButton = ({ item, qty }: { item: Products; qty?: number }) => {
  const whatsapp =
    "https://wa.me/963947749499?text=" +
    "Hello i saw your product so i'd like to buy it, there is the detiles, " +
    "\n" +
    "Name of product: " +
    item.title +
    "%0a" +
    "The qty is: " +
    qty +
    "%0a" +
    " The price is " +
    qty! * item.price +
    "$";
  return (
      <Link
        href={whatsapp}
      target='_blank'
      className="w-full"
      >
    <Button className=' relative inline-flex md:h-12 overflow-hidden rounded-full p-[1px]  w-full   '>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1    text-[10px] md:text-sm font-medium text-white backdrop-blur-3xl'>
          Buy Now
        </span>
    </Button>
      </Link>
  );
};

export default BuyButton;
