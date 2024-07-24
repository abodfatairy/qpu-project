import { ProductForm } from "@/components/shared/Forms/ProductForm";
import { getDataById } from "@/data";
import { Products } from "@/types";
import React from "react";

const UpdatePage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = (await getDataById(id)) as Products;
  return (
    <div className='  '>
      <div className=' mt-[100px]  p-10 '>
        <ProductForm
          type='Update'
          product={product}
        />
      </div>
    </div>
  );
};

export default UpdatePage;
