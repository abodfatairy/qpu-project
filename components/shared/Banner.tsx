"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
const Banner = () => {
  return (
    <div className=' h-[80vh] w-screen'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div
              className='  w-screen h-[80vh]'
              style={{
                backgroundImage: `url(/assets/images/1.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className='  w-screen  h-[80vh]'
              style={{
                backgroundImage: `url(/assets/images/2.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className='  w-screen  h-[80vh]'
              style={{
                backgroundImage: `url(/assets/images/3.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
