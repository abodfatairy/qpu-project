import HeroBanner from "@/components/shared/HerroBanner";
import HomeCard from "@/components/shared/HomeCard";
import { SpotlightPreview } from "@/components/ui/Light";
import { CategorysNames } from "@/constent";
import Image from "next/image";
export default async function Home() {
  return (
    <main className=' mt-11  md:mt-52  md:h-screen  '>
      <SpotlightPreview>
        <div className=' flex flex-col md:mt-96   '>
          <HeroBanner />
          <div className=' flex items-center flex-col  '>
            <div className=' container grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3      mt-3  xl:ml-auto  gap-3  md:h-auto'>
              {CategorysNames.map((item) => (
                <div
                  className='  xl:odd:row-span-2    xl:odd:max-w-[400px] xl:odd:h-[500px] w-[150px]  md:w-[400px] h-[150px] md:h-60 relative max-w-[400px]   '
                  key={item.name}
                >
                  <HomeCard item={item} />
                </div>
              ))}
            </div>
          
          <Image
            src={"/assets/images/mobile.png"}
            alt='mobile app'
            width={1100}
            height={1100}
            />
            </div>
        </div>
        
      </SpotlightPreview>
    </main>
  );
}
