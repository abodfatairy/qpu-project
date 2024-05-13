import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=' w-screen bg-blue-950 flex items-center justify-center p-3 gap-10'>
      <div className=' text-white'>logo</div>
      {/* links */}
      <div className=' flex gap-2 items-center justify-center'>
        <p className=' text-gray-400 text-[10px] md:text-xl'>
          {" "}
          if you need anythings please contact us at :
        </p>
        <div className=' flex gap-2 items-center justify-center'>
          <Link
            className=''
            href={"/"}
          >
            <Image
              src={"/assets/icons/f-logo.svg"}
              alt=''
              width={20}
              height={20}
            />
          </Link>
          <Link
            className=''
            href={"/"}
          >
            <Image
              src={"/assets/icons/Gmail.svg"}
              alt=''
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
