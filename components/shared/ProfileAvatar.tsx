import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { logout, userToken } from "@/auth";
import Link from "next/link";
const ProfileAvatar = () => {
  // @ts-ignore
  const { data } = userToken();
  // console.log(data);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar>
            {/* <AvatarImage
              src='https://github.com/shadcn.png'
              alt='@shadcn'
            /> */}
            <AvatarFallback className=' bg-dark-2 text-white border border-slate-800 text-3xl'>
              {data.sub.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={`/profile/${data.ID}`}> profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <form
              action={async () => {
                "use server";
                await logout();
                redirect("/");
              }}
            >
              <Button
                type='submit'
                className='text-white'
              >
                Logout
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileAvatar;
