import { Sidebar } from "@/components/container/sidebar";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <aside className="">
        <Sidebar />
      </aside>
      <main className="overflow-y-scroll p-8">{children}</main>
    </div>
  );
}

export default DashboardLayout;
