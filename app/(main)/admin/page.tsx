import { userToken } from "@/auth";
import { AdminTable } from "@/components/shared/Admin/AdminTable";
import Card from "@/components/shared/Admin/Card";

import {
  GetAllProducts,
  GetAllUsers,
  GetRoles,
  GetUserRoles,
} from "@/data/data";
import { CiUser } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

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
      <AdminTable />
    </div>
  );
};

export default page;
