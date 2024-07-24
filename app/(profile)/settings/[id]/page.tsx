import { userToken } from "@/auth";
import Back from "@/components/shared/Back";

import { SettingForm } from "@/components/shared/Forms/SettingForm"; 
import { GetUserById } from "@/data/data";
import { User } from "@/types";

const SettingsPage = async ({ params: { id } }: { params: { id: number } }) => {
  // @ts-ignore
  const { user } = userToken();
  console.log(id);

  const userData = (await GetUserById(user, id)) as User;

  return (
    <div className=' flex flex-col gap-5 mt-5 md:mt-0 '>
      <Back />
      <div className=' container'>
        <div className=' '>
          <h1 className=' text-center font-medium text-3xl text-main-1'>
            Edit Your Data
          </h1>
        </div>
        <div className=''>
          <SettingForm
            userData={userData}
            user={user}
          />
          \
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
