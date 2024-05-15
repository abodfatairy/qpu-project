"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiSignInLight } from "react-icons/pi";
export const ProfileLinks = [
  {
    name: "Profile",
    icon: <CgProfile />,
    href: "/profile",
  },
  {
    name: "Orders",
    icon: <MdOutlineProductionQuantityLimits />,
    href: "/profile/orders",
  },
  {
    name: "Setting",
    icon: <CiSettings />,
    href: "/profile/settings",
  },
];
const ProfileSideBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className=' w-36 '>
        <div className=' p-2 border-r border-main-1  flex  flex-col   w-36 max-w-36 fixed   '>
          <div className='h-[calc(100vh-110px)] '>
            {ProfileLinks.map((item) => {
              const isActive = item.href === pathname;
              return (
                <div
                  className=' flex  items-center  p-2 border-b border-main-4 last:border-none '
                  key={item.name}
                >
                  <p className={` ${isActive ? " text-main-1" : ""} mr-2`}>
                    {item.icon}
                  </p>
                  <Link
                    href={item.href}
                    className={` ${isActive ? " text-main-1" : ""} font-medium`}
                  >
                    {item.name}
                  </Link>
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
