"use client";
import Back from "@/components/shared/Back";
import { SettingForm } from "@/components/shared/SettingForm";
import { getData } from "@/data";
import { useParams } from "next/navigation";

const SettingsPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className=' flex flex-col gap-5 mt-5 md:mt-0 '>
      <Back />
      <div className=' container'>
        <div className=' '>
          <h1 className=' text-center font-medium text-3xl text-main-1'>Edit Your Data</h1>
        </div>
        <div className=''>
          <SettingForm />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
