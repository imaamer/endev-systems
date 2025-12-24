"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const servicesMenuItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Embedded Systems",
    href: "/services/embedded-systems",
    description: "Description of embedded systems",
  },
  {
    title: "PCB Design",
    href: "/services/pcb-design",
    description: "Description of PCB design",
  },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center h-22 px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo.png" // <-- put your logo here
            alt="Endev Systems Logo"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 text-sm">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-[17px]`}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* SERVICES DROPDOWN */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="text-[17px]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    {servicesMenuItems.map((component) => (
                      <NavigationMenuLink asChild key={component.title}>
                        <Link href={component.href}>
                          <div className="font-medium text-[17px]">
                            {component.title}
                          </div>
                          <div className="text-muted-foreground text-[17px]">
                            {component.description}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* CASE STUDIES DROPDOWN */}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-[17px]`}
              >
                <Link href="/case-studies">Case Studies</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-[17px]`}
              >
                <Link href="/careers">Careers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-[17px]`}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
