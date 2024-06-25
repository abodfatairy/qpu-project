"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export type HomeCardType = {
  item: {
    name: string;
    image: string;
  };
};
const HomeCard = ({ item }: HomeCardType) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${item.name.replace(' ','')}`)}
      className=' rounded-lg overflow-hidden'
    >
      <Image
        src={item.image}
        alt=''
        fill
        priority
        sizes='(max-width: 768px) 100vw, 33vw'
        className=' cursor-pointer  rounded-lg object-cover '
      />
      <p className=' text-white  absolute top-0 left-3 z-10 font-semibold capitalize md:text-2xl'>
        {item.name}
      </p>
    </div>
  );
};

export default HomeCard;
