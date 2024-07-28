import AddButton from "@/components/shared/AddButton";
import Card from "@/components/shared/Card";
import Loader from "@/components/shared/Loader";
import RealCard from "@/components/shared/RealCard";
import Search from "@/components/shared/Search";
import SideBar from "@/components/shared/SideBar";
import { AuroraBackgroundDemo } from "@/components/ui/teeest";
import { getData } from "@/data";
import { GetAllProducts } from "@/data/data";
import { Products, ProductsProps } from "@/types";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const searchInput = searchParams?.search || "";
  const data = (await getData()) as Products[];
  const Products = (await GetAllProducts()) as ProductsProps[];
  if (!Products) return;
  const searchQ = data.filter((item) => {
    if (item.title.toLocaleLowerCase().includes(searchInput)) {
      return item.title.toLocaleLowerCase().includes(searchInput);
    }
  });
  const filtere = Array.isArray(data) ? searchQ : [];
  const start = 0;
  const end = 9;
  const entries = filtere.slice(start, end);
  if (entries.length === 0) console.log(entries);
  // console.log(Products);

  return (
    <div className=' flex relative    flex-col md:flex-row  pb-3 '>
      <SideBar data={data} />
      <div className=' flex flex-col container justify-center items-center md:mt-4 p-5'>
        <AuroraBackgroundDemo>
          <div className=' absolute top-0 right-[200px]'>
            <Search />
          </div>
          {/* REAL data */}
          <div className=' md:flex-1 grid mt-9 grid-cols-2  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-10 '>
            {Products.length > 0 &&
              Products.reverse().map((item: ProductsProps, index: any) => {
                return (
                  <div
                    className=''
                    key={item.id}
                  >
                    <RealCard
                      item={Products[index]}
                      index={index}
                    />
                  </div>
                );
              })}
            {entries.length === 0 ? (
              <div className=' w-screen h-screen flex items-center justify-center'>
                <div className=' w-96  h-96 border border-slate-800 flex items-center justify-center text-3xl text-white rounded '>
                  {" "}
                  No Products
                </div>
              </div>
            ) : (
              entries?.map((item: Products, index: any) => {
                return (
                  <div
                    className=''
                    key={item._id}
                  >
                    <Card
                      item={item}
                      index={index}
                    />
                  </div>
                );
              })
            )}

            {/* add */}
            <AddButton />
          </div>
          {!searchInput && <Loader />}
        </AuroraBackgroundDemo>
      </div>
    </div>
  );
};

export default ProductsPage;
