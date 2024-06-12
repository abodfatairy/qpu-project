import AuthCarousel from "@/components/shared/AuthCarousel";
import { SignUpForm } from "@/components/shared/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className=' flex flex-row  shadow-2xl    border border-slate-200  rounded max-w-[800px] overflow-hidden max-h-[1000px] '>
      <div className=' hidden md:flex w-[400px] max-h-[500px] rounded-l-md  '>
        <AuthCarousel />
      </div>
      <div className=' flex flex-col gap-2 max-w-[800px] border-l border-dark-4 bg-white py-14  px-10 dark:bg-dark-2 rounded-r-md '>
        <SignUpForm />
        <div className=' w-full flex items-center justify-center mt-3 '>
          <span className=' text-center text-gray-500 font-serif dark:text-dark-4'>
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
