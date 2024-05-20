"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const AuthCarousel = () => {
  return (
    <Carousel
      className='  max-w-[400px]'
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className=' w-[500px] '>
        <CarouselItem className='w-[400px] '>
          <div
            className=' w-[400px] h-[600px]  rounded-l-md '
            style={{
              backgroundImage: `url(/assets/images/1.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </CarouselItem>
        <CarouselItem className='w-[400px]  '>
          <div
            className=' w-[400px] h-[600px]   rounded-l-md '
            style={{
              backgroundImage: `url(/assets/images/3.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </CarouselItem>
        <CarouselItem className='w-[400px]  '>
          <div
            className=' w-[400px] h-[600px] rounded-l-md   '
            style={{
              backgroundImage: `url(/assets/images/2.png)`,
              backgroundSize: "cover",
            }}
          ></div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default AuthCarousel;
