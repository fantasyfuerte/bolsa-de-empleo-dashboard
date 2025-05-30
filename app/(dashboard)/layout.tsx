import Logo from "@/assets/logo-image.png";
import NavMobile from "@/components/container/nav/nav-mobile";
import { Sidebar } from "@/components/container/nav/sidebar";
import Image from "next/image";
import Link from "next/link";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>
      <header className="fixed w-full flex justify-between items-center p-3 bg-primary/10 backdrop-blur-sm md:hidden rounded-b-xl z-50">
        <Link className="cursor-pointer" href={"/"}>
          <Image src={Logo} alt="Logo" width={35} height={0} />
        </Link>
        <NavMobile />
      </header>
      <main className="overflow-y-scroll px-2 pt-20 md:p-8">{children}</main>
    </div>
  );
}

export default DashboardLayout;
