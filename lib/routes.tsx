import { Home, Users, Building2, CheckCircle, Briefcase, ClipboardList, Gem } from "lucide-react";

export const routes = {
  admin: [
    {
      href: "/",
      icon: Home,
      text: "Resumen",
    },
    {
      href: "/tasks",
      icon: CheckCircle,
      text: "Tareas",
    },
    {
      href: "/caretakers",
      icon: Users,
      text: "Cuidadores",
    },
    {
      href: "/nursing-homes",
      icon: Building2,
      text: "Hogares",
    },
  ],
  user: [
    {
      href: "/",
      icon: Home,
      text: "Resumen",
    },
    {
      href: "/jobs",
      icon: ClipboardList,
      text: "Publicaciones",
    },
    {
      href: "/applications",
      icon: Briefcase,
      text: "Solicitudes",
    },
    {
      href: "/subscriptions",
      icon: Gem,
      text: "Suscripciones",
    },
  ],
};
