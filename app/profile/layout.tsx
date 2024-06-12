import Header from "@/components/shared/Header";
import ProfileSideBar from "@/components/shared/ProfileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMe = true;
  return (
    <div className='  flex flex-col     '>
      <Header profile={true} />
      <main className=' flex gap-2 mt-11 relative'>
        <div className='flex-1 md:mt-5'>{children}</div>
      </main>
    </div>
  );
}
