import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "../table";
import { Button } from "../button";

function UserRow({
  user,
  onSelectCaretaker,
}: {
  user: User;
  onSelectCaretaker?: (user: User) => void;
}) {
  return (
    <TableRow className="select-text">
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 select-none">
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          {user.name}
        </div>
      </TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>{user.experience}</TableCell>
      <TableCell className="select-none">
        <Badge
          variant={user.status === "Activo" ? "default" : "secondary"}
          className={user.status === "Activo" ? "bg-primary" : ""}
        >
          {user.status}
        </Badge>
      </TableCell>
      <TableCell>{user.clients}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {onSelectCaretaker && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => onSelectCaretaker(user)}
              >
                <Eye className="mr-2 h-4 w-4" />
                <span>Ver perfil</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="cursor-pointer">
              <Edit className="mr-2 h-4 w-4" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-600">
              <Trash2 className="mr-2 h-4 w-4 text-red-600" />
              <span>Eliminar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
