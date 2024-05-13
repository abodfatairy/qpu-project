import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBar";
import { getData } from "@/data";
import { Products } from "@/types";
import React from "react";

const page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const data = (await getData()) as Products[];

  return (
    <div className=' flex flex-col md:flex-row gap-2 '>
      <SideBar data={data} />
      <div className=' overflow-y-scroll md:flex-1 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto'>
        {data?.map((item: Products) => {
          return (
            <div
              className=''
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
