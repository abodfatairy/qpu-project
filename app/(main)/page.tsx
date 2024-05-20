import Banner from "@/components/shared/Banner";
import HomeCard from "@/components/shared/HomeCard";
import { CategorysNames } from "@/constent";

export default function Home() {
  return (
    <main className='flex   flex-col mt-8     '>
      <Banner />
      <div className=' grid md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-4  mt-3'>
        {CategorysNames.map((item) => (
          <div
            className=' '
            key={item.name}
          >
            <HomeCard item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
