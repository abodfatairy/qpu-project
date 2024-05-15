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
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Input } from "../ui/input";
import Categorys, { links } from "./Categorys";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileLinks } from "./ProfileSideBar";

const MobileHeader = ({ profile }: { profile?: boolean }) => {
  const pathname = usePathname();
  return (
    <div className=' fixed top-0 w-screen bg-blue-950  flex items-center justify-between p-2'>
      <div className=''>
        <Sheet>
          <SheetTrigger>
            <CiMenuBurger />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Logo</SheetTitle>
              <SheetDescription>
                <div className='flex items-center justify-center'>
                  <Input
                    className=' bg-gray-200 outline-none border-none rounded-r-none focus-visible:ring-0 placeholder:text-lg '
                    placeholder='search...'
                  />
                  <CiSearch className=' bg-gray-400 rounded-l-none   text-white mr text-3xl px-1 rounded-md h-10' />
                </div>
              </SheetDescription>

              <div className=' flex flex-col gap-3 items-center overflow-hidden '>
                {links.map((link, index) => {
                  const isActive = link.link === pathname;
                  return (
                    <SheetTrigger
                      className=''
                      key={index}
                      asChild
                    >
                      <Link
                        href={link.link}
                        className={`${
                          isActive ? "text-red-600" : "text-black"
                        } border-b border-gray-100  w-screen `}
                      >
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  );
                })}
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
                            isActive ? "text-red-600" : "text-black"
                          } border-b border-gray-100  w-screen `}
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
        {/* shopping cart */}
        <div className='relative'>
          <LiaShoppingBagSolid className=' text-white  text-5xl' />
          <span className=' bg-red-600 text-sm w-[20px] h-[20px] px-1 rounded-full flex items-center justify-center absolute top-0 right-0'>
            50
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
