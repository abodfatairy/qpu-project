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
    <Button className=' bg-main-1 px-2 py-1 h-8   md:h-10 md:px-4   text-[10px] md:text-base flex-1   '>
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
