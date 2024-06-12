import { SignInForm } from "@/components/shared/SignInForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className=' bg-white/50 dark:bg-dark-4 p-10 rounded-lg flex items-center justify-center flex-col relative w-screen max-w-[400px] shadow-2xl    border border-slate-200 '>
      <div className=' absolute top-1 right-3'>
        <span className=' text-[12px]'>
          Not a member?{" "}
          <Link
            className=' text-blue-500'
            href={"/sign-up"}
          >
            Register now
          </Link>
        </span>
      </div>
      <div className='w-screen max-w-[400px]  p-5'>
        {/* HELLO BANNAR */}
        <div className=' text-center my-3'>
          <h1 className=' font-semibold text-3xl my-2'>Hello Again!</h1>
          <p className=' text-gray-400 text-sm dark:text-red-800'>
            Wellcome back you&apos;ve been missed!
          </p>
        </div>
        {/* FORM */}
        <SignInForm />
        <div className=' text-center flex items-center justify-center flex-col gap-5 '>
          <span className=' font-serif  mt-4 border-b border-gray-200 pb-3 capitalize '>
            or continue with 
          </span>
          <div className=' flex  gap-5 items-center justify-center '>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/f-logo.svg"}
                alt='faceBook login'
                width={25}
                height={25}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/g-logo.svg"}
                alt='google login'
                width={28}
                height={27}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
