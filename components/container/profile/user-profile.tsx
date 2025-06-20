"use client";

import { useState } from "react";
import {
  Camera,
  ChevronDown,
  Edit,
  Layers,
  Lock,
  PlusCircle,
  Save,
  User,
  UserCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/stores/user-store";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { redirect } from "next/navigation";

export default function UserProfile() {
  const { user } = useUserStore();
  if (!user) redirect("/register")
  const {
    role,
    avatar,
    ci,
    email,
    name,
    // username,
    lastName,
    experience,
    // status,
    // clients,
    // isAdmin,
    createdAt,
    // updatedAt,
    phone,
    address,
    country,
    emergencyContact,
    skinColor,
    gender,
    municipe,
    province,
    schoolLevel,
    desiredJobs,
    workExperience,
  } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [countryState, setCountryState] = useState(country);
  const [provinceState, setProvinceState] = useState(province);
  const [desiredJobsState, setDesiredJobsState] =
    useState<DesiredJobs>(desiredJobs);

  const countryProvincesCities = [
    {
      country: "Cuba",
      provinces: [
        {
          name: "La Habana",
          municipes: [
            "Playa",
            "Plaza de la Revolución",
            "Centro Habana",
            "Habana Vieja",
            "Regla",
            "Habana del Este",
            "Guanabacoa",
            "San Miguel del Padrón",
            "10 de Octubre", // Alternativa: "Diez de Octubre"
            "Cerro",
            "Marianao",
            "La Lisa",
            "Boyeros",
            "Arroyo Naranjo",
            "Cotorro",
          ],
        },
        {
          name: "Pinar del Río",
          municipes: [
            "Pinar del Río", // Municipio cabecera
            "Consolación del Sur",
            "Guane",
            "La Palma",
            "Los Palacios",
            "Mantua",
            "Minas de Matahambre",
            "San Juan y Martínez",
            "San Luis",
            "Sandino",
            "Viñales",
          ],
        },
      ],
    },
    {
      country: "República Dominicana",
      provinces: [
        {
          name: "Santo Domingo",
          municipes: [
            "Santo Domingo Este",
            "Santo Domingo Oeste",
            "Santo Domingo Norte",
            "Boca Chica",
            "Los Alcarrizos",
            "Pedro Brand",
            "San Antonio de Guerra",
          ],
        },
        { name: "La Altagracia", municipes: ["Higüey", "San Rafael del Yuma"] },
      ],
    },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex-1 space-y-7">
      <article className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Perfil de {name}
          </h1>
          <p className="text-muted-foreground">
            Gestiona y personaliza la informacion de tu perfil
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <Button
                className="text-md cursor-pointer"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
              <Button
                className="text-md cursor-pointer"
                onClick={handleSaveProfile}
              >
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </div>
          ) : (
            <Button
              className="text-md cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <Edit strokeWidth={2.5} className="mr-1 h-4 w-4" />
              Editar Perfil
            </Button>
          )}
        </div>
      </article>

      <div className="md:grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-2 shadow-none border-none">
          <CardHeader className="flex flex-col items-center text-center">
            <div className="relative mb-2">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src={avatar}
                  alt={`Imagen de ${name}`}
                  title={`Imagen de ${name}`}
                />
                <AvatarFallback>
                  <UserCircle className="h-20 w-20" />
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full bg-background h-8 w-8"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <CardTitle>
              {name} {lastName}
            </CardTitle>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-600 hover:bg-blue-50"
              >
                {role}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium">Información de Contacto</h3>
              <div className="grid grid-cols-[20px_1fr] gap-x-2 gap-y-1 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>{email}</span>
                <User className="h-4 w-4 text-muted-foreground" />
                <span>{phone ?? "Contacto no agregado"}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-medium">Información Profesional</h3>
              <div className="grid grid-cols-[20px_1fr] gap-x-2 gap-y-1 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Experiencia: {experience}</span>
                <User className="h-4 w-4 text-muted-foreground" />
                <span>
                  Te uniste:{" "}
                  {new Date(createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <Separator />

            <div className="space-y-1">
              <h3 className="text-sm font-medium">Acciones</h3>
              <div className="grid gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <Layers className="mr-2 h-4 w-4" />
                  Añadir Trayectoria Laboral
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Lock className="mr-2 h-4 w-4" />
                  Cambiar Contraseña
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4  md:col-span-5">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList className="grid grid-cols-2 w-full h-fit gap-2 md:flex md:w-fit">
              <TabsTrigger className="cursor-pointer" value="personal">
                Información Personal
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="professional">
                Datos Profesionales
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="preferences">
                Preferencias
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="security">
                Seguridad
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>
                    Tus datos personales y contacto
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Nombre</Label>
                      <Input
                        id="full-name"
                        defaultValue={name}
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Primer Apellido</Label>
                      <Input
                        id="full-name"
                        defaultValue={lastName.split(" ")[0]}
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Segundo Apellido</Label>
                      <Input
                        id="full-name"
                        defaultValue={lastName.split(" ")[1]}
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Carnet de Identidad</Label>
                      <Input
                        id="full-name"
                        defaultValue={ci}
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={email}
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Piel</Label>
                      <Select disabled={!isEditing} defaultValue={skinColor}>
                        <SelectTrigger
                          id="country"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Color de piel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Negra">Negra</SelectItem>
                          <SelectItem value="Mestiza">Mestiza</SelectItem>
                          <SelectItem value="Blanca">Blanca</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Sexo</Label>
                      <Select disabled={!isEditing} defaultValue={gender}>
                        <SelectTrigger
                          id="country"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Seleccionar sexo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Femenino">Femenino</SelectItem>
                          <SelectItem value="Masculino">Masculino</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono Móvil</Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue={phone}
                        disabled={!isEditing}
                        placeholder="Agregar teléfono"
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">País</Label>
                      <Select
                        onValueChange={setCountryState}
                        disabled={!isEditing}
                        defaultValue={countryState}
                      >
                        <SelectTrigger
                          id="country"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Seleccionar país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cuba">Cuba</SelectItem>
                          <SelectItem value="República Dominicana">
                            República Dominicana
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="province">Provincia</Label>
                      <Select
                        disabled={!isEditing}
                        defaultValue={province}
                        onValueChange={setProvinceState}
                      >
                        <SelectTrigger
                          id="province"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Seleccionar provincia" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryProvincesCities
                            .find((item) => item.country === countryState)
                            ?.provinces.map(
                              (
                                province: { name: string; municipes: string[] },
                                index: number
                              ) => (
                                <SelectItem key={index} value={province.name}>
                                  {province.name}
                                </SelectItem>
                              )
                            )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="municipe">Municipio</Label>
                      <Select disabled={!isEditing} defaultValue={municipe}>
                        <SelectTrigger
                          id="municipe"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Seleccionar muncipio" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryProvincesCities
                            .find((item) => item.country === countryState)
                            ?.provinces.find(
                              (item) => item.name === provinceState
                            )
                            ?.municipes.map(
                              (municipe: string, index: number) => (
                                <SelectItem key={index} value={municipe}>
                                  {municipe}
                                </SelectItem>
                              )
                            )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input
                        id="address"
                        defaultValue={address}
                        placeholder="Agregar dirección"
                        disabled={!isEditing}
                        className={!isEditing ? "opacity-70" : ""}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">
                      Número de Emergencia
                    </Label>
                    <Input
                      id="emergency-contact"
                      defaultValue={emergencyContact}
                      placeholder="Agregar número de emergencia"
                      disabled={!isEditing}
                      className={!isEditing ? "opacity-70" : ""}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="professional" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información Profesional</CardTitle>
                  <CardDescription>
                    Experiencia, habilidades y educación
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="school-level">Interés en plazas</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger disabled={!isEditing} asChild>
                          <Button
                            className={clsx(
                              "font-normal shadow border hover:bg-transparent"
                            )}
                            variant="ghost"
                          >
                            Seleccione las plazas de su interés <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuCheckboxItem
                            onSelect={(e) => e.preventDefault()}
                            checked={desiredJobsState.caretaker}
                            onCheckedChange={() => {
                              setDesiredJobsState((prev) => ({
                                ...prev,
                                caretaker: !prev.caretaker,
                              }));
                            }}
                          >
                            Cuidador
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            onSelect={(e) => e.preventDefault()}
                            checked={desiredJobsState.nursing}
                            onCheckedChange={() =>
                              setDesiredJobsState((prev) => ({
                                ...prev,
                                nursing: !prev.nursing,
                              }))
                            }
                          >
                            Enfermería
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            onSelect={(e) => e.preventDefault()}
                            checked={desiredJobsState.custodian}
                            onCheckedChange={() =>
                              setDesiredJobsState((prev) => ({
                                ...prev,
                                custodian: !prev.custodian,
                              }))
                            }
                          >
                            Custodio
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            onSelect={(e) => e.preventDefault()}
                            checked={desiredJobsState.cleaning}
                            onCheckedChange={() =>
                              setDesiredJobsState((prev) => ({
                                ...prev,
                                cleaning: !prev.cleaning,
                              }))
                            }
                          >
                            Limpieza
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school-level">Nivel de enseñanza</Label>
                      <Select disabled={!isEditing} defaultValue={schoolLevel}>
                        <SelectTrigger
                          id="school-level"
                          className={!isEditing ? "opacity-70" : ""}
                        >
                          <SelectValue placeholder="Seleccionar nivel de enseñanza" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Universitario">
                            Universitario
                          </SelectItem>
                          <SelectItem value="Técnico">Técnico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2 w-full space-y-2 flex flex-col">
                      <Label htmlFor="work-experience">
                        Trayectoria Laboral
                      </Label>
                      <Table className="w-full rounded-xl" id="work-experience">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Centro</TableHead>
                            <TableHead>Actividad</TableHead>
                            <TableHead>Teléfono</TableHead>
                            <TableHead>Desde</TableHead>
                            <TableHead>Hasta</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {workExperience.map((experience, index) => (
                            <TableRow key={index}>
                              <TableCell>{experience.center}</TableCell>
                              <TableCell>{experience.activity}</TableCell>
                              <TableCell>{experience.phone}</TableCell>
                              <TableCell>{experience.from}</TableCell>
                              <TableCell>{experience.to}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      {isEditing && (
                        <Button className="self-end">
                          <PlusCircle size={30} className="mr-1" /> Añadir
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Personalize your experience on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Notifications</Label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">
                            Notifications by Email
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates and reminders by email
                          </p>
                        </div>
                        <Switch
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">
                            Notifications in the App
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications within the platform
                          </p>
                        </div>
                        <Switch
                          checked={appNotifications}
                          onCheckedChange={setAppNotifications}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language-preference">
                      Language of the Platform
                    </Label>
                    <Select disabled={!isEditing} defaultValue="es">
                      <SelectTrigger
                        id="language-preference"
                        className={!isEditing ? "opacity-70" : ""}
                      >
                        <SelectValue placeholder="Seleccionar idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="theme-preference">Theme</Label>
                    <Select disabled={!isEditing} defaultValue="light">
                      <SelectTrigger
                        id="theme-preference"
                        className={!isEditing ? "opacity-70" : ""}
                      >
                        <SelectValue placeholder="Seleccionar tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accessibility">Accessibility</Label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">High Contrast</Label>
                          <p className="text-sm text-muted-foreground">
                            Increase contrast of elements
                          </p>
                        </div>
                        <Switch disabled={!isEditing} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Reduce Animations</Label>
                          <p className="text-sm text-muted-foreground">
                            Minimize animation effects
                          </p>
                        </div>
                        <Switch disabled={!isEditing} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button onClick={handleSaveProfile} className="ml-auto">
                      Save Preferences
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    Manage your account security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Change Password</Label>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          disabled={!isEditing}
                          className={!isEditing ? "opacity-70" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          disabled={!isEditing}
                          className={!isEditing ? "opacity-70" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          disabled={!isEditing}
                          className={!isEditing ? "opacity-70" : ""}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button onClick={handleSaveProfile} className="ml-auto">
                      Save Security Settings
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
