"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileLinks, links } from "@/constent";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import Search from "./Search";
import Image from "next/image";

const MobileHeader = ({ profile }: { profile?: boolean }) => {
  const pathname = usePathname();
  return (
    <div className=' fixed top-0 w-screen  bg-main-2 dark:bg-dark-2 border-b border-slate-700  flex items-center justify-between p-2 z-50 '>
      <div className=' dark:bg-main-2 '>
        <Sheet>
          <SheetTrigger className=' dark:bg-dark-2 py-2 '>
            <CiMenuBurger className=' dark:text-white' />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className='  dark:bg-dark-2 '
          >
            <SheetHeader className='flex items-center '>
              <SheetTitle className=' '>
                {" "}
                <Image
                  src={"/assets/images/logo.png"}
                  alt='logo'
                  width={100}
                  height={100}
                  className=''
                />
              </SheetTitle>
              <SheetDescription>
                <div className=' dark:bg-dark-2'>
                  <Search />
                </div>
              </SheetDescription>

              <div className=' flex flex-col gap-3 items-center overflow-hidden text-black   '>
                <Link
                  href={"/sign-in"}
                  className=' text-white'
                >
                  Sign in
                </Link>
                {links.map((link, index) => {
                  const isActive = link.link === pathname;
                  return (
                    <SheetTrigger
                      className=' text-black'
                      key={index}
                      asChild
                    >
                      <Link
                        href={link.link}
                        className={`${
                          isActive ? " font-semibold" : " text-black"
                        } border-b border-slate-900  w-full text-center dark:text-white    `}
                      >
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  );
                })}
                <DarkMode />
              </div>

              {profile && (
                <div className=' flex flex-col gap-3 items-center overflow-hidden '>
                  {ProfileLinks.slice(1, 9).map((link, index) => {
                    const isActive = link.href === pathname;
                    return (
                      <SheetTrigger
                        className=''
                        key={index}
                        asChild
                      >
                        <Link
                          href={link.href}
                          className={`${
                            isActive ? " font-bold" : ""
                          } border-b border-gray-100  w-screen dark:text-white text-black  `}
                        >
                          {link.name}
                        </Link>
                      </SheetTrigger>
                    );
                  })}
                </div>
              )}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Link
        href={"/"}
        className=' dark:text-white'
      >
        <Image
          src={"/assets/images/logo.png"}
          alt='logo'
          width={100}
          height={100}
          className=''
        />
      </Link>
      <div className=''>
        <Cart />
      </div>
    </div>
  );
};

export default MobileHeader;
