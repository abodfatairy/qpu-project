import Header from "@/components/shared/Header";
import ProfileSideBar from "@/components/shared/ProfileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className='  flex flex-col  mt-4 bg-main-6   '>
        <Header profile={true} />
        <main className=' flex gap-2 mt-12 relative bg-main-6'>
        <div className=" hidden md:flex">
        <ProfileSideBar />
        </div>
          <div className='flex-1'>{children}</div>
        </main>
      </div>
  );
}
