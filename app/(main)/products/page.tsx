import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBar";
import { getData } from "@/data";
import { Products } from "@/types";

const ProductsPage = async () => {
  const data = (await getData()) as Products[]

  return (
    <div className=' flex w-screen h-screen  flex-col md:flex-row gap-3  bg-gray-300'>
      <SideBar data={data} />
      <div className=' overflow-y-scroll md:flex-1 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto '>
        {data?.map((item: Products) => {
          return (
            <div
              className=''
              key={item._id}
            >
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
