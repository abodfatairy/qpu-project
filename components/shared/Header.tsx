import Categorys from "./Categorys";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Cart from "./Cart";
import ProfileAvatar from "./ProfileAvatar";
import { userToken } from "@/auth";
import Image from "next/image";


const Header = ({ profile }: { profile?: boolean }) => {

  const user = userToken();

  return (
    <>
      <div className='  fixed top-5  left-[50%] translate-x-[-50%]    bg-main-2 dark:bg-dark-2 border border-slate-600  rounded-full   hidden md:flex z-40  p-2 items-center     '>
        <div className=' md:mx-auto md:flex  justify-between  '>
          <Link
            href={"/"}
            className=' text-white border-r flex items-center'
          >
            <Image
              src={"/assets/images/logo.png"}
              alt='logo'
              width={100}
              height={100}
              className=""
            />
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
