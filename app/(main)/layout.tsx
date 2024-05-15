import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='  flex  flex-col justify-between '>
      <Header />
      <div className=' h-screen  flex flex-col  mt-4  bg-main-6  flex-1'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
