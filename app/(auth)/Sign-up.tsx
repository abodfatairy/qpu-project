import AuthCarousel from "@/components/shared/AuthCarousel";
import { SignUpForm } from "@/components/shared/SignUpForm";
import React from "react";

const SignUp = () => {
  return (
    <>
      <div className=' h-screen container mx-auto flex flex-1 items-center justify-center  '>
        <div className=' flex flex-row  items-center justify-center w-screen   gap-5'>
          <div className=' hidden md:flex w-[400px]   h-full border rounded-lg '>
            <AuthCarousel />
          </div>
          <div className=' flex-1'>
            <SignUpForm />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default SignUp;
