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
import { Input } from "../ui/input";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ProfileLinks, links } from "@/constent";
import Cart from "./Cart";
import DarkMode from "./DarkMode";

const MobileHeader = ({ profile }: { profile?: boolean }) => {
  const pathname = usePathname();
  return (
    <div className=' fixed top-0 w-screen  bg-main-2  flex items-center justify-between p-2 z-50 '>
      <div className=' dark:bg-main-2'>
        <Sheet>
          <SheetTrigger className=' dark:bg-main-2 py-2 '>
            <CiMenuBurger className=' dark:text-white' />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className='  dark:bg-main-2 '
          >
            <SheetHeader className=''>
              <SheetTitle>Logo</SheetTitle>
              <SheetDescription>
                <div className='flex items-center justify-center dark:bg-dark-2'>
                  <Input
                    className=' bg-gray-200 outline-none border-none rounded-r-none focus-visible:ring-0 placeholder:text-lg '
                    placeholder='search...'
                  />
                  <CiSearch className=' bg-gray-400 rounded-l-none   text-white mr text-3xl px-1 rounded-md h-10' />
                </div>
              </SheetDescription>

              <div className=' flex flex-col gap-3 items-center overflow-hidden text-black   '>
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
                        } border-b border-gray-100  w-full text-center dark:text-white    `}
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
        className=''
      >
        logo
      </Link>
      <div className=''>
        <Cart />
      </div>
    </div>
  );
};

export default MobileHeader;
