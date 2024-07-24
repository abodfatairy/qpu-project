
import { SignUpForm } from "@/components/shared/Forms/SignUpForm";
import { SparklesPreview } from "@/components/ui/Spark";
import Link from "next/link";
import React from "react";

const SignUp =  () => {
  return (
    <div className=' w-screen md:h-screen flex'>
      {/* <SparklesCore /> */}
      <SparklesPreview/>
      <div className=' shadow-2xl    border border-slate-700  rounded  w-full '>

        <div className=' flex flex-col gap-2   bg-white py-14  px-10 dark:bg-slate-950 rounded-r-md h-screen '>
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
    </div>
  );
};

export default SignUp;
