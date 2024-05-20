import Categorys from "./Categorys";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = ({ profile }: { profile?: boolean }) => {
  return (
    <>
      <div className='  fixed top-0  w-screen bg-main-1   hidden md:flex z-40  '>
        <div className=' container md:mx-auto md:flex  justify-between items-center '>
          <Link
            href={"/"}
            className=' text-white'
          >
            logo
          </Link>
          <div className=''>
            <Categorys />
          </div>
          <div className=' flex items-center justify-center gap-2  '>
            {/* search */}
            <div className='flex items-center justify-center'>
              <button className=' cursor-pointer'>
                <Input
                  className=' outline-none border-none rounded-r-none  focus-visible:ring-0 cursor-pointer  '
                  placeholder='Search . . .'
                />
              </button>
              <CiSearch className=' bg-main-6 rounded-l-none border-l border-main-1  text-2xl px-1 rounded-md h-10' />
            </div>

            {/* shopping cart */}
            <Link
              href={"/cart"}
              className='relative mr-5'
            >
              <LiaShoppingBagSolid className=' text-white  text-5xl' />
              <span className=' bg-red-400 text-sm w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center absolute top-0 right-0'>
                50
              </span>
            </Link>
            {/* profile */}
            <div className=''>
              <Link
                href={"/sign-in"}
                className=' text-white'
              >
                {" "}
                Signin
              </Link>
            </div>
            <div className=''>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex md:hidden'>
        <MobileHeader profile={profile} />
      </div>
    </>
  );
};

export default Header;
