"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormData } from "@/lib/register-validation";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function FirstStep({ form }: { form: UseFormReturn<FormData> }) {
  const [year, setYear] = useState<string | null>(null);

  return (
    <div className="space-y-4 animate-enter">
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primer Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Tu primer apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Segundo Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Tu segundo apellido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ci"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Carnet de Identidad o Pasaporte</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Tu carnet de identidad o pasaporte"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <Label>Año de Nacimiento</Label>
          <Input
            onChange={(e) => {
              if (
                e.target.value.length === 4 &&
                !isNaN(Number(e.target.value))
              ) {
                setYear(e.target.value);
              }
            }}
            type="number"
            placeholder="Tu año de nacimiento"
          />
        </FormItem>

        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <Popover>
                <PopoverTrigger disabled={!year} asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP", { locale: es })
                      ) : (
                        <span>Selecciona una fecha</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col">
                  <Calendar
                    className="mx-auto"
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    defaultMonth={new Date(`${year}-01-01`)}
                    fromYear={Number(year)}
                    toYear={Number(year)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default FirstStep;
