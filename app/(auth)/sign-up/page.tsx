import AuthCarousel from "@/components/shared/AuthCarousel";
import { SignUpForm } from "@/components/shared/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className=' flex flex-row  shadow-2xl    border border-slate-200 p-2 rounded max-w-[800px] overflow-hidden'>
      <div className=' hidden md:flex w-[400px] h-[500px] rounded-l-md  '>
        <AuthCarousel />
      </div>
      <div className='  flex flex-col gap-2 max-w-[800px] -mt-3    bg-white rounded-r-md '>
        <SignUpForm />
        <div className=' w-full flex items-center justify-center '>
          <span className=' text-center text-gray-500 font-serif'>
            Already have an Acount ?{" "}
            <Link
              href={"/sign-in"}
              className=' text-blue-500'
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
