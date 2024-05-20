import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBar";
import { getData } from "@/data";
import { Products } from "@/types";


const page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const data = (await getData()) as Products[];

  return (
    <div className=' flex flex-col md:flex-row  '>
      <SideBar data={data} />
      <div className=' md:flex-1 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1  mt-2 '>
        {/* <div className=' flex flex-wrap mt-12  justify-center  '> */}
        {data?.map((item: Products) => {
          return (
            <div
              className=' mb-[1px]  mx-auto   '
              key={item._id}
            >
              {item.category === category.replace("%20", " ") ? (
                <Card item={item} />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
