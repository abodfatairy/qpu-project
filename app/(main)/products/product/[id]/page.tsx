import AddToCartButton from "@/components/shared/AddToCartButton";
import BuyButton from "@/components/shared/BuyButton";
import Test from "@/components/shared/Test";
import { AuroraBackgroundDemo } from "@/components/ui/teeest";
import { getDataById } from "@/data";
import { GetProductByID } from "@/data/data";
import { Products, ProductsProps } from "@/types";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const product = (await GetProductByID(id)) as ProductsProps;

  return (
    <AuroraBackgroundDemo>
      <div className='  flex     justify-center md:mt-0 md:h-screen  '>
        {/* container */}

        <div className='  flex flex-col   rounded items-center justify-center max-w-[1024px]  '>
          <div className=' flex flex-col md:flex-row'>
            {/* product images */}
            <div className=' md:flex-1 '>
              <div className=''>
                <div className=' mb-3'>
                  <Image
                    src={product?.image1}
                    width={400}
                    height={200}
                    alt=''
                  />
                </div>
                <div className=' flex items-center gap-12 '>
                  <Test data={product.image2!} />
                  <Test data={product.image3!} />
                  <Test data={product.image4!} />
                </div>
              </div>
            </div>
            {/* product details */}
            <div className=' md:flex-1 border border-slate-700 rounded mt-10 md:mt-0  '>
              <div className=' p-5 flex flex-col '>
                <div className=' flex flex-col  border-b border-gray-200  pb-3 '>
                  <h1 className=' font-serif text-blue-500 text-xl'>
                    {product.brand}
                  </h1>

                  <div className=' flex  justify-between items-center  '>
                    <h2 className=' text-blue-800 font-sans'>
                      {product.name}
                    </h2>
                    <div className=''>
                      <Image
                        src={product?.image1}
                        width={100}
                        height={10}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                {/* desc */}
                <div className=' border-b border-gray-200 p-2 py-4'>
                  <p className=' text-slate-400'>{product.description}</p>
                </div>
                {/* price */}
                <div className=' border-b border-gray-200 py-4'>
                  <h1 className='font-serif text-blue-500 text-xl mb-3 '>
                    Price:
                  </h1>
                  <div className=' ml-5'>
                    <p className=' line-through text-gray-400 text-xl font-serif'>
                      ${product?.discount}
                    </p>
                    <p className=' text-blue-500 text-2xl font-serif'>
                      ${product?.price}
                    </p>
                  </div>
                </div>
                <div className=' flex items-center justify-between pt-[50px]'>
                  <p className=' font-medium text-xl text-red-500'>
                    you&apos;re saving : $
                    {product.discount! - product.price!}
                  </p>
                  <BuyButton
                    item={product}
                    qty={1}
                  />
                  <AddToCartButton item={product} />
                </div>
              </div>
            </div>
          </div>
          {/* product images? */}
        </div>
      </div>
    </AuroraBackgroundDemo>
  );
};

export default ProductDetails;
