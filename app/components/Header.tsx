"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "../../public/assets/Gianna.png"

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hair Services",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Manicure & Pedicure",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Hair Removal",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Spa Services",
    href: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Facials",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "All Services",
    href: "/",
    description:
      "Click here to see all services offered by our salon",
  },
];

export default function Header() {
  return (
    <div className="flex items-center justify-center my-4">
    <NavigationMenu>

      <NavigationMenuList>

      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-red-800">
            <ul className="grid gap-3 p-4 w-[380px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-800/50 to-red-300 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-16 w-16" /> */}
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Gianna Salon
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Where elegance meets glamour
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="About">
               Know about our Salon
              </ListItem>
              {/* <ListItem href="/" title="Blog">
               Lookout for the lastest trends on our blog
              </ListItem> */}
              <ListItem href="/" title="Booking">
                Book your appointments for services 
              </ListItem> 
              <ListItem href="/" title="Team">
               Know the team, their expertise and personality
              </ListItem>              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-red-800">
            <ul className="grid w-[380px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="https://www.google.com" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Connect
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>

    </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
