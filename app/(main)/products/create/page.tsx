import { userToken } from "@/auth";
import { ProductForm } from "@/components/shared/Forms/ProductForm";
import { GetCategoreies } from "@/data/data";
import React from "react";

const page = async () => {
  // @ts-ignore
  const { data, user } = userToken();

  const categories = await GetCategoreies();

  return (
    <div className='  z-50 '>
      <div className=' mt-[100px]  p-10 '>
        <ProductForm
          type='Create'
          userid={data.ID}
          token={user}
          Categories={categories}
        />
      </div>
    </div>
  );
};

export default page;
