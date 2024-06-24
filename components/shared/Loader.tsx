"use client";
import { getData } from "@/data";
import { Products } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Image from "next/image";
const Loader = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<Products[]>([]);
  const [end, setend] = useState(10);
  const [loading, setloading] = useState(true);

  const start = 10;

  // const end = start + Number(per_page); // 5, 10, 15 ...
  // let end = 20; // 5, 10, 15 ...
  // const filtere = Array.isArray(data);
  // const entries = filtere.slice(start, end);
  useEffect(() => {
    if (inView) {
      getData().then((res) => {
        setData([data, ...res]);
      });
      setend(end + 10);
      
      setloading(false);
      // alert(end);
    }
    // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div className=' mt-3'>
      <div className=' md:flex-1 grid   md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-10   grid-cols-2 mr-5 '>
        {data.slice(start, end)?.map((item: Products, index) => {
          return (
            <div
              className=' mx-auto'
              key={item._id}
            >
              <Card
                item={item}
                index={index}
              />
            </div>
          );
        })}
      </div>
      <div
        ref={ref}
        className=''
      >
        {loading && (
          <Image
            src={"assets/images/bouncing-circles.svg"}
            width={60}
            height={60}
            alt='loading'
          />
        )}
      </div>
    </div>
  );
};

export default Loader;
