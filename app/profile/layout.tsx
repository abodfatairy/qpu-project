import Header from "@/components/shared/Header";
import ProfileSideBar from "@/components/shared/ProfileSideBar";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMe = true;
  return (
    <>
    <Header profile={true} />
    <WavyBackground
    className='max-w-4xl mx-auto pb-40'
    backgroundFill='#020617'
    
    >
      <div className='  flex flex-col     '>
        <main className=' flex gap-2 mt-11 relative'>
          <div className='flex-1 md:mt-5'>{children}</div>
        </main>
      </div>
    </WavyBackground>
      </>
  );
}
