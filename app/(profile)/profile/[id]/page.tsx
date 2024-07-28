import Image from "next/image";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import ProfileSideBar from "@/components/shared/ProfileSideBar";
import { userToken } from "@/auth";
import { GetUserById } from "@/data/data";
import { User } from "@/types";
const ProfilePage = async ({ params: { id } }: { params: { id: string } }) => {
  // @ts-ignore
  const { user, data } = userToken();
  // @ts-ignore
  const userDetails = (await GetUserById(user, id)) as User;
  console.log(userDetails, "profile");
console.log(data);

  const isMe = data.ID === id;
  return (
    <>
      {isMe ? (
        <div className=' hidden lg:flex '>
          <ProfileSideBar
            id={id}
            userDetails={userDetails}
          />
        </div>
      ) : (
        ""
      )}

      {userDetails ? (
        <div className=' container  relative lg:max-w-[750px]  xl:max-w-[1024px]      mt-5 flex flex-col   items-center  flex-1    '>
          {/* cover image */}
          <div className=' w-screen h-52  absolute sm:max-w-[800px] lg:max-w-[750px]  xl:max-w-[1024px]   lg:ml-52    '>
            <Image
              src={"/assets/images/accessories.jpg"}
              alt=''
              fill
              className=' object-cover object-center'
            />
          </div>
          <div className=' absolute top-[150px]   '>
            {/* first section */}
            <div className=' flex lg:justify-between  max-w-[1024px] w-screen items-center gap-5   overflow-hidden lg:ml-52 mb-4 flex-col lg:flex-row '>
              {/* profile image */}
              <div className=' w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] lg:mb-8 lg:ml-44 xl:ml-20  '>
                <div className=' absolute w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden '>
                  <Image
                    src={userDetails.image || "/assets/images/no-profile.webp"}
                    alt=''
                    fill
                    className=' object-cover object-center'
                  />
                </div>
              </div>
              {/* name and location */}
              <div className=' flex flex-col items-start justify-center     lg:mr-7'>
                {/* name */}
                <h1 className='   text-3xl lg:text-5xl dark:text-white capitalize mb-1 lg:mr-32 '>
                  {userDetails.name}
                </h1>
                {/* location */}
                <div className=' flex items-center justify-center gap-x-1 text-slate-400 '>
                  <FaLocationDot />
                  <p className=''>{userDetails.firstAddress}</p>
                </div>
              </div>
              {/* address */}
            </div>
            {/*  */}
            {/*  */} {/*  */}
            {/*  */} {/*  */} {/*  */}
            {/* second section */}
            <div className=' p-5 lg:p-0 flex  flex-col   justify-center   lg:ml-96 xl:ml-64   lg:max-w-[750px]  xl:max-w-[1524px] '>
              {/* info */}
              <div className=' flex flex-col gap-5 p-2'>
                <h3 className='  mb-2 text-center text-white '>Information</h3>
                {/* phone number */}
                <div className=' text-white font-bold flex justify-between  items-center border-b border-slate-200 '>
                  <span className=' flex items-center gap-5'>
                    <FaPhoneFlip className=' text-main-1' /> :
                  </span>
                  <span className=' text-white font-normal ml-11'>
                    {userDetails.phoneNumber}
                  </span>
                </div>
                {/* location */}
                <div className=' text-white font-bold flex justify-between items-center border-b border-slate-200 '>
                  <span className=' flex items-center gap-5'>
                    <FaLocationDot className=' text-main-1' /> :
                  </span>
                  <span className=' text-white font-normal ml-11'>
                    {userDetails.firstAddress}
                  </span>
                </div>
                {/* email */}
                <div className=' text-white font-bold flex justify-between items-center border-b border-slate-200 '>
                  <span className=' flex items-center gap-5'>
                    <MdAlternateEmail className=' text-main-1' /> :
                  </span>
                  <span className=' text-white font-normal ml-11'>
                    {userDetails.email}
                  </span>
                </div>
              </div>
              {/* ****************************************** */}
              {/* address */}
              <div className=' w-full    flex flex-col p-2  gap-5 justify-between '>
                {/* adress title */}
                <div className='flex items-center justify-center '>
                  <p className=' text-black text-sm dark:text-white dark:font-semibold p-2'>
                    Address
                  </p>
                  {/* <div className=' hidden lg:flex  lg:w-screen h-[1px] bg-slate-300 '></div> */}
                </div>
                {/* first Addres */}
                <div className=' lg:mt-5  lg:px-0'>
                  {/* first address container */}
                  <div className='flex items-center justify-between mb-4'>
                    {/* first addres title */}
                    <h1 className=' text-main-1 text-[14px] capitalize lg:text-lg '>
                      {userDetails.firstAddress}
                    </h1>
                    <h2 className=' bg-blue-100 p-2 tracking-wider rounded text-[11px] lg:text-sm text-blue-500 font-bold '>
                      Primary
                    </h2>
                  </div>
                  {/* first addres desc */}
                  <div className=' flex items-center justify-between border-b border-slate-200'>
                    <p className=' text-slate-500 '>details:</p>
                    <p className=' capitalize text-slate-400 '>
                      {userDetails.firstAddressDescription}
                    </p>
                  </div>
                </div>
                {/* second Addres ..................... */}

                <div className=' lg:mt-5  lg:px-0'>
                  {/* second addres container */}
                  <div className='flex items-center justify-between mb-4'>
                    {/* second adders title */}
                    <h1 className=' text-main-1  text-[14px] capitalize lg:text-lg mr-2'>
                      {userDetails.secondAddress}
                    </h1>

                    <h2 className=' bg-green-100 p-2 tracking-wider rounded text-[11px] lg:text-sm  text-blue-500 font-bold '>
                      secondary
                    </h2>
                  </div>
                  {/* second addres desc */}
                  <div className=' flex items-center justify-between border-b border-slate-200'>
                    <p className=' text-slate-500'>details:</p>
                    <p className=' capitalize text-slate-400'>
                      {userDetails.secondAddressDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=' flex flex-col items-center h-screen  '>
          <p className=' capitalize text-main-1 text-3xl font-mono mt-12  '>
            No profile found
          </p>
          <div className='absolute w-[400px] h-[200px] top-[200px]'>
            <Image
              src={"/assets/images/no-profile-found.png"}
              alt=''
              fill
              className=' object-cover object-center rounded-xl'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
