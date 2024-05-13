import Test from "@/components/shared/Test";
import { Button } from "@/components/ui/button";
import { getDataById } from "@/data";
import { Products } from "@/types";
import Image from "next/image";
import React from "react";
import { IoBagAddOutline } from "react-icons/io5";

const ProductDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = (await getDataById(id)) as Products;

  return (
    <div className=' md:w-screen md:h-screen flex bg-pink-1100  items-center justify-center'>
      {/* container */}
      <div className='  flex flex-col border  rounded max-w-[1000px] p-2 '>
        <div className=' flex flex-col md:flex-row'>
          {/* product images */}
          <div className=' md:flex-1'>
            <div className=''>
              <div className="">

              <Image
                src={product?.image}
                width={500}
                height={200}
                alt=''
                />
                </div>
              <div className=' flex items-center justify-center'>
                <Test data={product.image!} />
                <Test data={product.image!} />
                <Test data={product.image!} />
              </div>
            </div>
          </div>
          {/* product details */}
          <div className=' md:flex-1  bg-slate-200/70 '>
            <div className=' p-5 flex flex-col '>
              <div className=' flex flex-col  border-b border-gray-200  pb-3 '>
                <h1 className=' font-serif text-blue-500 text-xl'>
                  {product.brand}
                </h1>

                <div className=' flex  justify-between items-center  '>
                  <h2 className=' text-blue-800 font-sans'>{product.title}</h2>
                  <div className=''>
                    <Image
                      src={product?.image}
                      width={100}
                      height={10}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              {/* desc */}
              <div className=' border-b border-gray-200 p-2 py-4' >
                <p className=' text-slate-400'>{product.description}</p>
              </div>
              {/* price */}
              <div className=' border-b border-gray-200 py-4'>
                <h1 className='font-serif text-blue-500 text-xl mb-3 '>
                  Price:
                </h1>
                <div className=' ml-5'>
                  <p className=' line-through text-gray-400 text-xl font-serif'>
                    ${product?.previousPrice}
                  </p>
                  <p className=' text-blue-500 text-xl font-serif'>
   
                    ${product?.price}
                  </p>
                </div>
              </div>
              <div className=' flex items-center justify-between pt-[50px]'>
                <p className=' font-medium text-xl text-red-500'>
                  you&apos;re saving : $
                  {product.previousPrice! - product?.price}
                </p>
                <Button className=' bg-blue-700 md:py-7 '>
                  <IoBagAddOutline className=' text-white md:text-5xl  my-2' />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* product images? */}
      </div>
    </div>
  );
};

export default ProductDetails;