import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navbardata = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: "Customers",
      link: "/customers",
    },
  ];
  return (
    <div className=" bg-slate-700 flex flex-col items-center justify-start p-4 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={40}
        className="mb-4"
      />
      {navbardata.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.link}
            className="flex gap-2 hover:bg-gray-500 p-2 w-32 items-center justify-center"
            legacyBehavior>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
