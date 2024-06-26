import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='  bg-main-1 flex items-center justify-center p-3 gap-10 z-50  '>
      <div className=' text-white'>logo</div>
      {/* links */}
      <div className=' flex gap-2 items-center justify-center'>
        <p className='  text-[10px] md:text-xl text-main-4'>
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
