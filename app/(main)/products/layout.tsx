import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { AuroraBackgroundDemo } from "@/components/ui/teeest";
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='  flex flex-col '>
      <Header />
      <main className=' mt-20 flex-1  '>
        <AuroraBackgroundDemo>{children}</AuroraBackgroundDemo>
      </main>
 
    </div>
  );
}
