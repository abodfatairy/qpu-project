"use client";
import { Button } from "@/components/ui/button";
// import MainSection from "@/components/ui/shared/mainSection";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
   <div className="">
      
    <div className=' flex items-center justify-center flex-col w-screen h-screen gap-11 p-4 bg-gray-600 '>
        <h1 className=' text-orange-200 text-center'>
          Hello my Friend sorry for your time but i think there was a problem!
        </h1>
        <h3 className=' text-2xl '>
          {error.message || "Somethings went wrong"}
        </h3>
        <p className=' text-center '>
          Please Try again later or contact support if the problem presists.
        </p>
        <div className=' flex gap-5'>
          <Button
            className=' bg-orange-400'
            onClick={reset}
            >
            Try again
          </Button>
          <Button
            variant={"outline"}
            asChild
            >
            <Link href={"/"}>go back Home</Link>
          </Button>
        </div>
      </div>
      </div>
    
  );
};

export default error;
