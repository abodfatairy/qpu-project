import Categorys from "./Categorys";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Cart from "./Cart";
import Search from "./Search";

const Header = ({ profile }: { profile?: boolean }) => {
  return (
    <>
      <div className='  fixed top-0  w-screen bg-main-2   hidden md:flex z-40 p-2  '>
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
            <Search />

            {/* shopping cart */}
            <Cart />
            {/* <Link
              href={"/cart"}
              className='relative mr-5'
            >
              <LiaShoppingBagSolid className=' text-white  text-5xl' />
              <span className=' bg-red-500 text-sm w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center absolute top-0 right-0 text-white'>
                50
              </span>
            </Link> */}
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
