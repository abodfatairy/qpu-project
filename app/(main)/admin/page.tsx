import { userToken } from "@/auth";

import Card from "@/components/shared/Admin/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  GetAllProducts,
  GetAllUsers,
  GetRoles,
  GetUserRoles,
} from "@/data/data";
import { CiUser } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { columns } from "@/components/shared/Admin/table/Columns";
import { ProducColumns } from "@/components/shared/Admin/table/ProductColumns";
import { DataTable } from "@/components/shared/Admin/table/AdminTable";
import { ProductTable } from "@/components/shared/Admin/table/ProductTable";

const page = async () => {
  // @ts-ignore
  const { user, data } = userToken();
  const users = await GetAllUsers(user!);
  const products = await GetAllProducts();
  const roles = await GetRoles(user!);
  // const userRoles = await GetUserRoles(user!);
  console.log(data);

  // console.log(users, "asdasd");

  return (
    <div className='w-screen h-screen  mt-20 p-5'>
      <div className='  text-white  flex items-center justify-center  gap-10 '>
        <Card
          title='Users'
          icon={<CiUser className=' text-7xl' />}
          count={users.length}
        />
        <Card
          title='Products'
          icon={<MdOutlineProductionQuantityLimits className=' text-7xl' />}
          count={products.length > 0 ? products.length : 0}
        />
      </div>
      <Tabs defaultValue='Users'>
        <TabsList className=' bg-dark-2 border-slate-700 '>
          <TabsTrigger
            value='Products'
            className=' b border-slate-700 border'
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value='Users'
            className=' border-slate-700 border'
          >
            Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value='Users'>
          <DataTable
            data={users}
            columns={columns}
          />
        </TabsContent>
        <TabsContent
          value='Products'
          className=' text-white'
        >
          <ProductTable
            data={products}
            columns={ProducColumns}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
