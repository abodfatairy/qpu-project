import Categorys from "./Categorys";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className='   w-screen   bg-blue-950  hidden md:flex z-40  '>
        <div className=' container md:mx-auto sm:flex  justify-between items-center  p-2'>
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
              <Input className=' outline-none border-none rounded-r-none focus-visible:ring-0 ' />
              <CiSearch className=' bg-red-200 rounded-l-none  mr text-2xl px-1 rounded-md h-10' />
            </div>

            {/* shopping cart */}
            <div className='relative'>
              <LiaShoppingBagSolid className=' text-white  text-5xl' />
              <span className=' bg-red-600 text-sm w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center absolute top-0 right-0'>
                50
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex md:hidden'>
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
