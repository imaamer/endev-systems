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

const caseStudiesMenuItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Embedded Systems",
    href: "/case-studies/embedded-systems",
    description: "Description of embedded systems",
  },
  {
    title: "PCB Design",
    href: "/case-studies/pcb-design",
    description: "Description of PCB design",
  },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/logo.jpg" // <-- put your logo here
            alt="Endev Systems Logo"
            width={150}
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
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* SERVICES DROPDOWN */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    {servicesMenuItems.map((component) => (
                      <NavigationMenuLink asChild key={component.title}>
                        <Link href={component.href}>
                          <div className="font-medium">{component.title}</div>
                          <div className="text-muted-foreground">
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

            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    {caseStudiesMenuItems.map((component) => (
                      <NavigationMenuLink asChild key={component.title}>
                        <Link href={component.href}>
                          <div className="font-medium">{component.title}</div>
                          <div className="text-muted-foreground">
                            {component.description}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/careers">Careers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
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
