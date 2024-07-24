import Categorys from "./Categorys";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Cart from "./Cart";

// import {  userToken } from "@/data";
import ProfileAvatar from "./ProfileAvatar";
import { userToken } from "@/auth";


// import { userToken } from "@/data/data";

const Header = ({ profile }: { profile?: boolean }) => {
  // const value = localStorage.getItem("user") || "";
  const user = userToken();
  

  // console.log(user,'userrrrrrrrrrrrr');

  return (
    <>
      <div className='  fixed top-5  left-[50%] translate-x-[-50%]    bg-main-2 dark:bg-dark-2 border border-slate-600  rounded-full   hidden md:flex z-40  p-2   '>
        <div className=' md:mx-auto md:flex  justify-between items-center '>
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
            {/* <Search /> */}

            {/* shopping cart */}
            <Cart />

            <div className=''>
              {user ? (
                // @ts-ignore
                <ProfileAvatar user={user} />
              ) : (
                <Link
                  href={"/sign-in"}
                  className=' text-white'
                >
                  {" "}
                  Signin
                </Link>
              )}
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
