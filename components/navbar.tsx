import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { SearchForm } from "./search-form";
import { ShoppingCart, User } from "lucide-react";
import logo from "../public/logo.png";
import Image from "next/image";
import { ModeToggle } from "./theme-changer";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between flex-row  border-b-2 w-[94%] ml-[3%] p-3 ">
      <Link href="/" className="flex items-center gap-4">
        <Image src={logo} alt="Khiilen logo" width={125} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/collections">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Бараа
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Захиалга
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/createDesign">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Загвар үүсгэх
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4 flex-row ">
        <SearchForm />
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <User />
        <ModeToggle />
      </div>
    </div>
  );
}
