import { ResetForm } from "@/components/shared/Forms/ResetPassword";
import React from "react";

const resetPassword = () => {
  return (
    <div className='text-white w-screen h-screen flex items-center justify-center flex-col '>
      Enter Your Email
      <div className=" w-full  max-w-[600px]  flex items-center justify-center">
      <ResetForm />
     </div>
 
    </div>
  );
};

export default resetPassword;
