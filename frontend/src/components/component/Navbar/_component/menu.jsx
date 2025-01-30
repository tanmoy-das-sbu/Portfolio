"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function NavigationMenuBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  return (
    <div className="m-auto">
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex content-center md:space-x-8">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/" ? "#f3f0eb" : "transparent",
                  color: activeSection === "/" ? "#f47731" : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                <p>Home</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/gallery" ? "#f3f0eb" : "transparent",
                  color: activeSection === "/gallery" ? "#f47731" : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                <p>Gallery</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/attheparliament" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/attheparliament"
                      ? "#f3f0eb"
                      : "transparent",
                  color:
                    activeSection === "/attheparliament"
                      ? "#f47731"
                      : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                <p>At Rajya Sabha</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/socials" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/socials" ? "#f3f0eb" : "transparent",
                  color: activeSection === "/socials" ? "#f47731" : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                <p>Socials</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/contact" ? "#f3f0eb" : "transparent",
                  color: activeSection === "/contact" ? "#f47731" : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                <p>Contact</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="https://en.wikipedia.org/wiki/Pradip_Kumar_Varma"
              legacyBehavior
              passHref
              target="_blank"
            >
              <NavigationMenuLink
                href="https://en.wikipedia.org/wiki/Pradip_Kumar_Varma"
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle()}
                style={{
                  backgroundColor:
                    activeSection === "/blog" ? "#f3f0eb" : "transparent",
                  color: activeSection === "/blog" ? "#f47731" : "#f3f0eb",
                  borderRadius: "0px",
                }}
              >
                Wiki
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
