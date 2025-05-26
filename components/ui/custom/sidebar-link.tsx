import clsx from "clsx";
import { LucideIcon, CircleAlert } from "lucide-react";
import Link from "next/link";

export default function SidebarLink({
  href,
  icon: Icon,
  text,
  active = false,
  notification = false,
}: {
  href: string;
  icon: LucideIcon;
  text: string;
  active?: boolean;
  notification?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-md ${
        active
          ? "bg-primary/10 text-primary font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon size={20} />
      <span className="text-md">{text}</span>
      {notification && <CircleAlert
        size={20}
        className={clsx("ml-auto", active ? "text-primary" : "text-gray-600")}
      />}
    </Link>
  );
}
