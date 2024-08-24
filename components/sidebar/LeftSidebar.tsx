"use client";

import { icons } from "@/constants/icons";
import { SidebarLink, sidebar_links } from "@/constants/sidebar_links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src={icons.logo} alt="logo" width={23} height={27} />
          <h1 className="ml-3 text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        {sidebar_links?.map((route: SidebarLink) => {
          const isActive: boolean =
            pathname === route.route || pathname.startsWith(`${route.route}/`);
          return (
            <Link
              href={route.route}
              key={route.id}
              className={cn(
                "flex gap-3 items-center py-4 justify-center max-lg:px-4 lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
            >
              <Image
                src={route.icon}
                alt={route.label}
                width={24}
                height={24}
              />
              <p> {route.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
