"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CaretakerRow from "../ui/custom/caretaker-row";
import { useState } from "react";

// Datos de ejemplo
const usuarios: User[] = [
  {
    id: 1,
    name: "María",
    username: "mfernandez",
    lastName: "Fernández López",
    experience: "5 años",
    status: "Activo",
    clients: 12,
    avatar: "https://picsum.photos/200?random=1",
    isAdmin: false,
    email: "maria.fernandez@ejemplo.com",
    createdAt: "2023-01-15T10:30:00Z",
    updatedAt: "2024-03-20T14:45:00Z",
    role: "Cuidador Senior",
    ci: "12345678901"
  },
  {
    id: 2,
    name: "Carlos",
    username: "cgomez",
    lastName: "Gómez Martínez",
    experience: "3 años",
    status: "Activo",
    clients: 8,
    avatar: "https://picsum.photos/200?random=2",
    isAdmin: true,
    email: "carlos.gomez@ejemplo.com",
    createdAt: "2022-05-10T08:15:00Z",
    updatedAt: "2024-02-18T11:20:00Z",
    role: "Supervisor de Cuidados",
    ci: "23456789012"
  },
  {
    id: 3,
    name: "Ana",
    username: "alopez",
    lastName: "López García",
    experience: "7 años",
    status: "Vacaciones",
    clients: 15,
    avatar: "https://picsum.photos/200?random=3",
    isAdmin: false,
    email: "ana.lopez@ejemplo.com",
    createdAt: "2021-11-22T09:45:00Z",
    updatedAt: "2024-04-05T16:30:00Z",
    role: "Enfermera Domiciliaria",
    ci: "34567890123"
  },
  {
    id: 4,
    name: "Jorge",
    username: "jrodriguez",
    lastName: "Rodríguez Sánchez",
    experience: "2 años",
    status: "Activo",
    clients: 5,
    avatar: "https://picsum.photos/200?random=4",
    isAdmin: false,
    email: "jorge.rodriguez@ejemplo.com",
    createdAt: "2023-08-14T13:20:00Z",
    updatedAt: "2024-01-30T10:10:00Z",
    role: "Asistente de Cuidados",
    ci: "45678901234"
  },
  {
    id: 5,
    name: "Lucía",
    username: "lmartinez",
    lastName: "Martínez Ruiz",
    experience: "10 años",
    status: "Activo",
    clients: 22,
    avatar: "https://picsum.photos/200?random=5",
    isAdmin: false,
    email: "lucia.martinez@ejemplo.com",
    createdAt: "2020-03-05T07:30:00Z",
    updatedAt: "2024-05-15T09:25:00Z",
    role: "Gerontóloga",
    ci: "56789012345"
  },
  {
    id: 6,
    name: "Pedro",
    username: "psanchez",
    lastName: "Sánchez Díaz",
    experience: "1 año",
    status: "Inactivo",
    clients: 3,
    avatar: "https://picsum.photos/200?random=6",
    isAdmin: false,
    email: "pedro.sanchez@ejemplo.com",
    createdAt: "2024-02-10T14:00:00Z",
    updatedAt: "2024-05-01T08:45:00Z",
    role: "Auxiliar de Cuidados",
    ci: "67890123456"
  },
  {
    id: 7,
    name: "Sofía",
    username: "sgarcia",
    lastName: "García Moreno",
    experience: "4 años",
    status: "Activo",
    clients: 11,
    avatar: "https://picsum.photos/200?random=7",
    isAdmin: false,
    email: "sofia.garcia@ejemplo.com",
    createdAt: "2022-09-18T11:25:00Z",
    updatedAt: "2024-04-22T15:30:00Z",
    role: "Cuidador Especializado",
    ci: "78901234567"
  },
  {
    id: 8,
    name: "Miguel",
    username: "mperez",
    lastName: "Pérez Castro",
    experience: "6 años",
    status: "Activo",
    clients: 18,
    avatar: "https://picsum.photos/200?random=8",
    isAdmin: false,
    email: "miguel.perez@ejemplo.com",
    createdAt: "2021-07-30T08:40:00Z",
    updatedAt: "2024-05-10T12:15:00Z",
    role: "Fisioterapeuta",
    ci: "89012345678"
  },
  {
    id: 9,
    name: "Elena",
    username: "egonzalez",
    lastName: "González Ortega",
    experience: "8 años",
    status: "Licencia Médica",
    clients: 14,
    avatar: "https://picsum.photos/200?random=9",
    isAdmin: false,
    email: "elena.gonzalez@ejemplo.com",
    createdAt: "2020-12-05T10:15:00Z",
    updatedAt: "2024-05-18T09:00:00Z",
    role: "Terapeuta Ocupacional",
    ci: "90123456789"
  },
  {
    id: 10,
    name: "Diego",
    username: "dhernandez",
    lastName: "Hernández Vargas",
    experience: "2 años",
    status: "Activo",
    clients: 7,
    avatar: "https://picsum.photos/200?random=10",
    isAdmin: false,
    email: "diego.hernandez@ejemplo.com",
    createdAt: "2023-05-20T13:50:00Z",
    updatedAt: "2024-04-28T14:20:00Z",
    role: "Asistente Geriátrico",
    ci: "01234567890"
  },
  {
    id: 11,
    name: "Isabel",
    username: "itorres",
    lastName: "Torres Jiménez",
    experience: "9 años",
    status: "Activo",
    clients: 20,
    avatar: "https://picsum.photos/200?random=11",
    isAdmin: true,
    email: "isabel.torres@ejemplo.com",
    createdAt: "2019-04-12T09:10:00Z",
    updatedAt: "2024-05-20T16:45:00Z",
    role: "Directora de Cuidados",
    ci: "11223344556"
  },
  {
    id: 12,
    name: "Raúl",
    username: "rruiz",
    lastName: "Ruiz Medina",
    experience: "1 año",
    status: "Activo",
    clients: 4,
    avatar: "https://picsum.photos/200?random=12",
    isAdmin: false,
    email: "raul.ruiz@ejemplo.com",
    createdAt: "2024-01-08T08:30:00Z",
    updatedAt: "2024-05-15T11:10:00Z",
    role: "Acompañante Terapéutico",
    ci: "22334455667"
  },
  {
    id: 13,
    name: "Carmen",
    username: "cdiaz",
    lastName: "Díaz Romero",
    experience: "5 años",
    status: "Activo",
    clients: 13,
    avatar: "https://picsum.photos/200?random=13",
    isAdmin: false,
    email: "carmen.diaz@ejemplo.com",
    createdAt: "2022-02-15T10:20:00Z",
    updatedAt: "2024-04-10T14:50:00Z",
    role: "Cuidador de Demencias",
    ci: "33445566778"
  },
  {
    id: 14,
    name: "Fernando",
    username: "fmoreno",
    lastName: "Moreno Silva",
    experience: "3 años",
    status: "Inactivo",
    clients: 6,
    avatar: "https://picsum.photos/200?random=14",
    isAdmin: false,
    email: "fernando.moreno@ejemplo.com",
    createdAt: "2022-11-03T11:45:00Z",
    updatedAt: "2024-05-01T10:30:00Z",
    role: "Asistente de Enfermería",
    ci: "44556677889"
  },
  {
    id: 15,
    name: "Patricia",
    username: "pcastro",
    lastName: "Castro Mendoza",
    experience: "12 años",
    status: "Activo",
    clients: 25,
    avatar: "https://picsum.photos/200?random=15",
    isAdmin: false,
    email: "patricia.castro@ejemplo.com",
    createdAt: "2018-06-22T07:15:00Z",
    updatedAt: "2024-05-22T08:40:00Z",
    role: "Psicogerontóloga",
    ci: "55667788990"
  }
];

export default function CaretakersTable({
  limit,
  data,
  onSelectCaretaker,
}: {
  limit?: number;
  data?: User[];
  onSelectCaretaker?: (caretaker: User) => void;
}) {
  const [page, setPage] = useState(1);
  const maxSlice = page * 8;
  const minSlice = maxSlice - 8;

  function goPage(direction: "prev" | "next") {
    if (direction === "prev") {

      setPage((prevPage) => prevPage - 1);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  }

  const users = data || usuarios;
  const displayData = limit
    ? users.slice(0, limit)
    : users.slice(minSlice, maxSlice);

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cuidador</TableHead>
              <TableHead>Especialidad</TableHead>
              <TableHead>Experiencia</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Pacientes</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((user) => (
              <CaretakerRow
                key={user.id}
                user={user}
                onSelectCaretaker={onSelectCaretaker}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      {!limit && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            disabled={page === 1}
            onClick={() => goPage("prev")}
            variant="outline"
            size="sm"
          >
            Anterior
          </Button>
          <Button
            disabled={displayData.length < 8}
            onClick={() => goPage("next")}
            variant="outline"
            size="sm"
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );
}
