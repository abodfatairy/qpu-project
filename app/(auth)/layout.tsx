
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        <main className=' '>
          {children}
        </main>
      </div>
  );
}
