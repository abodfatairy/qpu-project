import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='  bg-main-1 dark:bg-dark-2 flex items-center justify-center p-3 gap-10 z-50  border-t border-slate-800 shadow-md '>
      <Image
        src={"/assets/images/logo.png"}
        alt='logo'
        width={100}
        height={100}
        className=' mt-2'
      />
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
