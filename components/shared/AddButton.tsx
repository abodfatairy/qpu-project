import Link from "next/link";
import React from "react";

const AddButton = () => {
  return (
    <div className='  fixed cursor-pointer top-[150px] md:top-[100px]  right-8 z-50'>
      <Link
        href={"/products/create"}
        className=' rounded-full w-[40px] h-[40px] text-white text-3xl md:w-[70px] md:h-[70px] md:text-5xl  animate-bounce font-bold     bg-main-1 dark:bg-dark-2   flex justify-center items-center  pb-2'
      >
        +
      </Link>
    </div>
  );
};

export default AddButton;

