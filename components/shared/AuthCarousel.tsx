"use client";
// import bz from '/1.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const AuthCarousel = () => {
  return (
    <Carousel
      className='  w-[500px]'
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className=' w-[400px] '>
        <CarouselItem className='w-[400px] '>
          <div
            className=' w-[400px] h-[635px]  rounded-l-md '
            style={{
              backgroundImage: `url(/assets/images/1.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </CarouselItem>
        <CarouselItem className='w-[400px]  '>
          <div
            className=' w-[400px] h-[635px]   rounded-l-md '
            style={{
              backgroundImage: `url(/assets/images/3.jpg)`,
              backgroundSize: "cover",
            }}
          ></div>
        </CarouselItem>
        <CarouselItem className='w-[400px]  '>
          <div
            className=' w-[400px] h-[635px] rounded-l-md   '
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
