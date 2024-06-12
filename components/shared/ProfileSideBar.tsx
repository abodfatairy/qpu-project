"use client";
// import { ProfileLinks } from "@/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { PiSignInLight } from "react-icons/pi";

const ProfileSideBar = ({ id }: { id?: number }) => {
  const ProfileLinks = [
    {
      name: "Profile",
      icon: <CgProfile />,
      href: `/profile/${id}`,
    },
    {
      name: "Orders",
      icon: <MdOutlineProductionQuantityLimits />,
      href: `/profile/${id}/orders`,
    },
    {
      name: "Setting",
      icon: <CiSettings />,
      href: `/profile/${id}/settings`,
    },
  ];
  const pathname = usePathname();
  return (
    <>
      <div className=' w-[250px] '>
        <div className=' pl-5 flex flex-col w-[250px] fixed  dark:bg-dark-2  bg-main-2 '>
          <div className=' py-10  text-white'>Profile</div>
          <div className='h-[calc(100vh-110px)] '>
            {ProfileLinks.map((item) => {
              const isActive = item.href === pathname;
              return (
                <div
                  className=' flex  items-center dark:text-dark-4 '
                  key={item.name}
                >
                  <div
                    className={`${
                      isActive
                        ? " relative bg-main-6 rounded-br-lg rounded-l-[20px] before:absolute before:bg-transparent before:top-[47px] before:right-[0px] before:h-[35px] before:w-[35px] before:rounded-tr-[18px] before:shadow-5xl ......  after:absolute   after:bg-transparent after:bottom-[48px] after:right-0 after:h-[35px] after:w-[35px] after:rounded-tl-[18px] after:rotate-180   after:shadow-5xl  "
                        : ""
                    }  flex w-screen  p-3 pl-8  items-center`}
                  >
                    <p
                      className={` ${
                        isActive ? " text-main-1" : " text-white"
                      } text-[20px] mr-1`}
                    >
                      {item.icon}
                    </p>
                    <Link
                      href={item.href}
                      className={` ${
                        isActive ? " text-main-1" : " text-white"
                      } font-medium`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href={"/sign-in"}
            className=''
          >
            <div className=' flex items-center gap-2 justify-center border-t border-main-4'>
              <PiSignInLight />
              <p className=' font-medium'>sign in</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileSideBar;
