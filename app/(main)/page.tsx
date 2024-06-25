import Banner from "@/components/shared/Banner";
import HomeCard from "@/components/shared/HomeCard";
import { CategorysNames } from "@/constent";

export default function Home({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) {


  return (
    <main className='flex   flex-col mt-8  h-full w-full   '>
      <Banner />
      <div className=" h-screen">
        
      <div className=' container grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3     mt-3  xl:ml-auto  gap-3 h-40 md:h-auto'>
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
    </main>
  );
}
