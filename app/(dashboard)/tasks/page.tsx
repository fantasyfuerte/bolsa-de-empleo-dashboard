import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

function TasksPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tareas</h1>
          <p className="text-muted-foreground">
            Gestiona tus tareas y pendientes
          </p>
        </div>
        <Button className="text-md">
          <PlusCircle strokeWidth={2.5} className="mr-1 h-4 w-4" />
          Nueva tarea
        </Button>
      </div>
    </section>
  );
}

export default TasksPage;
