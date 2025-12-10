"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        
        <Link href="/" className="text-2xl font-semibold">
          Endev Systems
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 text-sm">
            <NavigationMenuItem>
              <Link href="/services">Services</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/case-studies">Case Studies</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
