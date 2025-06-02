import Navbar from "./_components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen" suppressHydrationWarning={true}>
      <Navbar />
      {children}
    </div>
  );
}
