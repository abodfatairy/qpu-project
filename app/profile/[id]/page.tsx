import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { testDataProfile } from "@/constent";
import ProfileSideBar from "@/components/shared/ProfileSideBar";
const ProfilePage = ({ params: { id } }: { params: { id: number } }) => {
  const data = testDataProfile[id];

  const isMe = true;
  return (
    <>
      {isMe ? (
        <div className=' hidden md:flex'>
          <ProfileSideBar id={id} />
        </div>
      ) : (
        ""
      )}

      {data ? (
        <div className=' p-5 md:p-10 mt-3 flex md:ml-[270px] flex-col   md:flex-row  md:items-start   '>
          {/* first section */}
          <div className=' flex md:flex-col items-center gap-5    md:w-[210px] md:max-w-[210px] overflow-hidden md:mr-10'>
            {/* image */}
            <div className=' w-[120px] h-[120px] md:w-[200px] md:h-[200px] mb-8'>
              <div className=' absolute w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded overflow-hidden'>
                <Image
                  src={data.image || "/assets/images/no-profile.webp"}
                  alt=''
                  fill
                  className=' object-cover object-center'
                />
              </div>
            </div>
            {/* address */}
            <div className=' w-full  md:w-[200px]  flex flex-col  '>
              <div className='flex items-center justify-center '>
                <p className=' bg-white  text-slate-300 text-sm'>Address</p>
                <div className='w-10  md:w-screen h-[1px] bg-slate-300 '></div>
              </div>
              {/* first Addres */}
              <div className=' md:mt-5 px-5 md:px-0'>
                <div className='flex items-center justify-between mb-2'>
                  <h1 className=' text-main-1 text-[14px] capitalize md:text-lg '>
                    {data.firstAddres}
                  </h1>
                  <h2 className=' bg-blue-100 p-2 tracking-wider rounded text-[11px] md:text-sm text-blue-500 font-bold '>
                    Primary
                  </h2>
                </div>
                <p className=' capitalize text-slate-400'>
                  {data.firstAddresDesc}
                </p>
              </div>
              {/* second Addres */}
              <div className=' md:mt-5 px-5 md:px-0'>
                <div className='flex items-center justify-between mb-2'>
                  <h1 className=' text-main-1  text-[14px] capitalize md:text-lg mr-2'>
                    {data.secondAddres}
                  </h1>
                  <h2 className=' bg-green-100 p-2 tracking-wider rounded text-[11px] md:text-sm  text-blue-500 font-bold '>
                    secondary
                  </h2>
                </div>
                <p className=' capitalize text-slate-400'>
                  {data.secondAddresDesc}
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */} {/*  */}
          {/*  */} {/*  */} {/*  */}
          {/* second section */}
          <div className='flex-1 md:p-10 '>
            {/* first section */}
            <div className=' '>
              {/* name and location */}
              <div className=' flex md:gap-x-5 items-center justify-between'>
                {/* name */}
                <h1 className=' text-3xl'>{data.name}</h1>
                {/* location */}
                <div className=' flex items-center gap-x-1 text-slate-400 '>
                  <FaLocationDot />
                  <p className=''>{data.firstAddres}</p>
                </div>
              </div>
              {/* reviews */}
              <div className=' my-8'>
                <h3 className=' text-slate-400 mb-2'>Reviews :</h3>
                <div className='flex gap-x-1 items-center justify-between '>
                  <div className=' flex items-center gap-1'>
                    <span className='text-main-1'> {data.reviews}</span>
                    <div className=' flex gap-1'>
                      <FaStar className=' text-main-1' />
                      <FaStar className=' text-main-1' />
                      <FaStar className=' text-main-1' />
                      <FaStar className=' text-main-1' />
                      <CiStar className=' text-main-1' />
                    </div>
                  </div>
                  {/* conatact   */}
                  {!isMe && (
                    <Button
                      variant={"secondary"}
                      className=' flex  items-center gap-2 w-fit border'
                    >
                      <IoLogoWhatsapp className=' text-green-400 text-2xl' />
                      <p className=''>Send message</p>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            {/* second section */}
            <div className=''>
              <h3 className=' text-slate-400 mb-2'>Information :</h3>
              {/* info */}
              <div className=' flex flex-col gap-5'>
                <p className=' text-slate-600 font-bold '>
                  Phone:
                  <span className=' text-main-1 font-normal ml-11'>
                    {data.phoneNumber}
                  </span>
                </p>
                <p className='text-slate-600 font-bold '>
                  Address:
                  <span className='text-slate-400 font-normal ml-11'>
                    {data.firstAddresDesc}
                  </span>
                </p>
                <p className='text-slate-600 font-bold '>
                  E-mail:
                  <span className='text-main-1 font-normal ml-11'>
                    {data.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=' flex flex-col items-center h-screen '>
          <p className=' capitalize text-main-1 text-3xl font-mono '>
            No profile found
          </p>
          <div className='absolute w-[400px] h-[200px] top-[80px]'>
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
