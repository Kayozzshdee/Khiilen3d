import SearchFilterLayout from "./SearchFilterLayout";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SearchFilterLayout />
      {children}
    </div>
  );
}
