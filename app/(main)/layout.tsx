import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='  flex flex-col '>
      <Header />
      <main className=' mt-4 flex-1 '>{children}</main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
