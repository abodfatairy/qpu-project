import AddButton from "@/components/shared/AddButton";
import Card from "@/components/shared/Card";
import Loader from "@/components/shared/Loader";
import SideBar from "@/components/shared/SideBar";
import { getData } from "@/data";
import { Products } from "@/types";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const searchInput = searchParams?.search || "";
  const data = (await getData()) as Products[];
  const searchQ = data.filter((item) => {
    if (item.title.toLocaleLowerCase().includes(searchInput)) {
      return item.title.toLocaleLowerCase().includes(searchInput);
    }
  });
  const filtere = Array.isArray(data) ? searchQ : [];
  const start = 0;
  const end = 9;
  const entries = filtere.slice(start, end);
  return (
    <div className=' flex relative    flex-col md:flex-row  pb-3 '>
      <SideBar data={data} />
      <div className=' flex flex-col container justify-center items-center md:mt-4 p-5'>
        <div className=' md:flex-1 grid mt-9 grid-cols-2  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-10 mr-5'>
          {entries?.map((item: Products, index) => {
            return (
              <div
                className=' mx-auto'
                key={item._id}
              >
                <Card
                  item={item}
                  index={index}
                />
              </div>
            );
          })}
          {/* add */}
          <AddButton />
        </div>
        {!searchInput && <Loader />}
      </div>
    </div>
  );
};

export default ProductsPage;
