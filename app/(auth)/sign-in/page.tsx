import { SignInForm } from "@/components/shared/Forms/SignInForm"; 
import { LampDemo } from "@/components/ui/lamp";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <div className=' w-screen flex'>
      <div className=' bg-white/50 dark:bg-slate-950 p-10  flex items-center justify-center flex-col relative w-screen max-w-4xl shadow-2xl    border border-slate-700 h-screen '>
        <Image
          src={"/assets/images/logo.png"}
          alt='logo'
          width={200}
          height={100}
          className=''
        />
        <div className='w-screen max-w-[500px] xl:max-w-[800px]  p-5'>
          {/* FORM */}
          <SignInForm />
        </div>
      </div>

      <LampDemo />
    </div>
  );
};

export default SignIn;
