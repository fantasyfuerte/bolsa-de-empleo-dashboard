"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, MenuIcon, User } from "lucide-react";
import SidebarLink from "@/components/ui/custom/sidebar-link";
import { useUserStore } from "@/stores/user-store";
import { redirect, usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { useState } from "react";

function NavMobile() {
  const { user } = useUserStore();
  if (!user) redirect("localhost:3001/login"); //login url
  const { isAdmin } = user;
  const pathname = usePathname();
  const sidebarLinks = isAdmin ? routes.admin : routes.user;

  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <MenuIcon className="h-9 w-9" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 mr-2">
        {sidebarLinks.map((link) => (
          <DropdownMenuItem key={link.href} className="">
            <SidebarLink
              href={link.href}
              icon={link.icon}
              text={link.text}
              active={pathname === link.href}
            />
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          {" "}
          <SidebarLink
            href="/profile"
            icon={User}
            text="Profile"
            active={pathname == "/profile"}
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SidebarLink href="/register" icon={LogOut} text="Cerrar sesión" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavMobile;
