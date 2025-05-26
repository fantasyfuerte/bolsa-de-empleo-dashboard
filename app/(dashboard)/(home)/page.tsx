"use client";

import AdminHome from "@/components/container/home/admin-home";
import UserHome from "@/components/container/home/user-home";
import { useUserStore } from "@/stores/user-store";

export default function Home() {
  const { user } = useUserStore();
  if (!user) return <div>Loading...</div>;
  const { isAdmin } = user;
  return isAdmin ? <AdminHome /> : <UserHome />;
}
