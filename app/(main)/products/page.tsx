import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBar";
import { getData } from "@/data";
import { Products } from "@/types";

const ProductsPage = async () => {
  const data = (await getData()) as Products[];

  return (
    <div className=' flex    flex-col md:flex-row     pb-3'>
      <SideBar data={data} />
      <div className=' md:flex-1 grid  ml md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-auto '>
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
