
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        <main className=' h-[calc(100vh)]  w-screen flex items-center justify-center overflow-hidden  relative  '>
          {children}
        </main>
      </div>
  );
}
