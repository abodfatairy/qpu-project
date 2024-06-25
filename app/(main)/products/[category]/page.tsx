import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBar";
import { getData, getDataByCategory } from "@/data";
import { Products } from "@/types";

const page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const data = (await getDataByCategory(category)) as Products[];


  const Sidedata = (await getData()) as Products[];


  return (
    <div className=' flex flex-col md:flex-row   '>
      <SideBar data={Sidedata} />
      <div className=' md:flex-1 grid mt-9  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-10 p-4 mx-auto grid-cols-2'>
        {/* <div className=' flex flex-wrap mt-12  justify-center  '> */}
        {data.map((item: Products, index) => {
          return (
            <div
              className=' mb-[1px]  mx-auto   '
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
    </div>
  );
};

export default page;
