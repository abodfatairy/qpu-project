import HeroBanner from "@/components/shared/HerroBanner";
import HomeCard from "@/components/shared/HomeCard";
import { SpotlightPreview } from "@/components/ui/Light";
import { CategorysNames } from "@/constent";
export default async function Home() {
  return (
    <main className=' mt-11  md:mt-52 h-screen  '>
      <SpotlightPreview>
        <div className=' flex flex-col'>
          <HeroBanner />
          <div className=' '>
            <div className=' container grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3   h-screen   mt-3  xl:ml-auto  gap-3  md:h-auto'>
              {CategorysNames.map((item) => (
                <div
                  className='  xl:odd:row-span-2    xl:odd:max-w-[400px] xl:odd:h-[500px] w-[150px]  md:w-[400px] h-[150px] md:h-60 relative max-w-[400px]   '
                  key={item.name}
                >
                  <HomeCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SpotlightPreview>
    </main>
  );
}
