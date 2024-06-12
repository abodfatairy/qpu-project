import Link from "next/link";
import React from "react";

const AddButton = () => {
  return (
    <div className='  fixed cursor-pointer top-[850px]  right-8'>
      <Link
        href={"/products/create"}
        className=' rounded-full w-[40px] h-[40px] text-white text-3xl md:w-[70px] md:h-[70px] md:text-5xl  animate-bounce font-bold     bg-main-1   flex items-center justify-center'
      > 
     +
      </Link>
    </div>
  );
};

export default AddButton;
