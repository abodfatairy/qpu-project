import Categorys from "./Categorys";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Cart from "./Cart";
import Search from "./Search";
import Image from "next/image";

const Header2 = ({ profile }: { profile?: boolean }) => {
  return (
    <>
      <div className='  fixed top-0  w-screen bg-main-2   hidden lg:flex z-40 p-2  '>
        <div className=' container lg:mx-auto lg:flex  justify-between items-center '>
          <Link
            href={"/"}
            className=' text-white'
          >
        
          </Link>
          <div className=''>
            <Categorys />
          </div>
          <div className=' flex items-center justify-center gap-2  '>
            {/* search */}
            <Search />

            {/* shopping cart */}
            <Cart />

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
      <div className=' flex lg:hidden'>
        <MobileHeader profile={profile} />
      </div>
    </>
  );
};

export default Header2;
