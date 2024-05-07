import AuthCarousel from "@/components/shared/AuthCarousel";
import { SignUpForm } from "@/components/shared/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className=' flex flex-row  items-center justify-center w-screen p-4  gap-x-3'>
      <div className=' hidden md:flex w-[400px]   h-full  rounded-lg '>
        <AuthCarousel />
      </div>
      <div className=' flex-1 flex flex-col gap-2 max-w-[800px] border border-gray-100 rounded-2xl p-2  bg-white'>
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
