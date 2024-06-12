"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const AuthCarousel = () => {
  return (
    <Carousel
      className='  h-screen'
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className=' w-[420px] h-screen '>
        <CarouselItem className=''>
          <div className=' w-[400px] h-screen  rounded-l-md absolute '>
            <Image
              src={"/assets/images/1.jpg"}
              alt=''
              fill
              className=' object-center object-cover'
            />
          </div>
        </CarouselItem>
        <CarouselItem className=''>
          <div className=' w-[400px] h-screen  rounded-l-md absolute '>
            <Image
              src={"/assets/images/3.jpg"}
              alt=''
              fill
              className=' object-center object-cover'
            />
          </div>
        </CarouselItem>
        <CarouselItem className=''>
          <div className=' w-[400px] h-screen  rounded-l-md absolute '>
            <Image
              src={"/assets/images/2.png"}
              alt=''
              fill
              className=' object-center object-cover'
            />
          </div>
        </CarouselItem>

      </CarouselContent>
    </Carousel>
  );
};

export default AuthCarousel;
