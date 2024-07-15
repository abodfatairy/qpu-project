import { SignInForm } from "@/components/shared/SignInForm";
import { LampDemo } from "@/components/ui/lamp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className=' w-screen flex'>
      <div className=' bg-white/50 dark:bg-slate-950 p-10  flex items-center justify-center flex-col relative w-screen max-w-4xl shadow-2xl    border border-slate-700 h-screen '>
        <div className='w-screen max-w-[500px] xl:max-w-[800px]  p-5'>
          {/* FORM */}
          <SignInForm />
          <div className=' text-center flex items-center justify-center flex-col gap-5 '>
            <span className=' font-serif  mt-4 border-b border-gray-200 pb-3 capitalize dark:text-white '>
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
              <div className=' absolute top-1 right-3 flex md:hidden'>
                <span className=' text-[12px] text-white'>
                  Not a member?{" "}
                  <Link
                    className=' text-blue-500   dark:hover:text-blue-300 xl:text-xl'
                    href={"/sign-up"}
                  >
                    Register now
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LampDemo />
    </div>
  );
};

export default SignIn;
