import { Button } from "@/components/ui/button";
import { Products } from "@/types";
import Link from "next/link";
import React from "react";

const BuyButton = ({ item, qty }: { item: Products; qty?: number }) => {
  // const name = item.title;
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
    <Button className='bg-main-1 flex-1  text-[10px] md:text-base'>
      <Link
        href={whatsapp}
        target='_blank'
      >
        Buy Now
      </Link>
    </Button>
  );
};

export default BuyButton;
