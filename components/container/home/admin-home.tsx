"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { StatsCards } from "@/components/ui/custom/stats-card";
import UsersTable from "@/components/container/users-table";


function AdminHome() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section>
      <article className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resumen</h1>
          <p className="text-muted-foreground">
            Gestión de cuidadores y hogares de ancianos
          </p>
        </div>
        <Button className="text-md">
          <PlusCircle strokeWidth={2.5} className="mr-1 h-4 w-4" />
          Nuevo registro
        </Button>
      </article>
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="users">Cuidadores</TabsTrigger>
          <TabsTrigger value="nursing-homes">Hogares</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <StatsCards />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4  col-span-2">
              <h2 className="text-xl font-semibold mb-4">
                Cuidadores recientes
              </h2>
              <UsersTable limit={5} />
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Hogares recientes</h2>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="users">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Todos los cuidadores</h2>
            <UsersTable />
          </div>
        </TabsContent>

        {/* <TabsContent value="nursing-homes">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Todos los hogares</h2>
              <NursingHomesTable />
            </div>
          </TabsContent> */}
      </Tabs>
    </section>)
}

export default AdminHome