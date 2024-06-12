import { Button } from "@/components/ui/button";
import { Products } from "@/types";
import Link from "next/link";
import React from "react";

const BuyButton = ({ item }: { item: Products }) => {
  // const name = item.title;
  const whatsapp =
    "https://wa.me/00963947749499?text=" +
    "hey i saw your product so i'd like to buy it, there is the detiles, " +
    "\n" +
    "Name of product: " +
    item.title +
    "%0a" +
    " the price is " +
    item.price +
    "$";
  return (
    <Button className='bg-main-1 flex-1 rounded-full'>
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
