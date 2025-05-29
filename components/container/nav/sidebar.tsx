"use client";

import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import SidebarLink from "../../ui/custom/sidebar-link";
import { LogOut, User, } from "lucide-react";
import { routes } from "@/lib/routes";
import Logo from "@/assets/logo-sidebar.png";
import { useUserStore } from "@/stores/user-store";

export function Sidebar() {
  const { user } = useUserStore();
  if (!user) redirect("localhost:3001/login");//login url
  const { isAdmin } = user;
  const pathname = usePathname();
  const sidebarLinks = isAdmin ? routes.admin : routes.user;
  return (
    <div className="bg-background border-r h-screen p-4">
      <div className="flex items-center justify-center gap-2 mb-3 py-4">
        <Image src={Logo} alt="Logo" width={140} height={0} />
      </div>
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            text={link.text}
            active={pathname === link.href}
          />
        ))}
        <div className="absolute bottom-4 space-y-2 w-[217px]">
          <SidebarLink href="/profile" icon={User} text="Profile" active={pathname=="/profile"} />
          <SidebarLink href="/register" icon={LogOut} text="Cerrar sesión" />
        </div>
      </nav>
    </div>
  );
}
