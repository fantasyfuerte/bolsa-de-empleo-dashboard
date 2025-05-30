import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserHome() {
  return (
    <section>
      <article className="w-fit p-3 bg-primary/10 rounded-xl mx-auto flex items-center gap-2">
        <AlertCircle size={20} className="shrink-0 text-primary" />
        <p>
          Completa la{" "}
          <Link href="/profile">
            <Button variant={"link"} className="text-md px-0 mx-0">
              información de tu perfil
            </Button>
          </Link>{" "}
          para comenzar a aplicar a empleos
        </p>
      </article>
    </section>
  );
}

export default UserHome;
