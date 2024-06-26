
import Link from "next/link";

const page = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-main-1'>
      <h1 className='text-9xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <div className='bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <Link  href={'/'} className='mt-5 '>
        <div className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>


          <span className='relative block px-8 py-3 bg-[#1A2238] border border-current rounded-full'>
            Go Home
          </span>
        </div>
      </Link>
    </main>
  );
};

export default page;
