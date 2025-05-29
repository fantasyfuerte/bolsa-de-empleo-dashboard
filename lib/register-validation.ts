import { z } from "zod";

export const step1Schema = z.object({
  firstName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  lastName1: z
    .string()
    .min(2, "Un apellido debe tener al menos 2 caracteres")
    .max(50, "Un apellido no puede exceder 50 caracteres"),
  lastName2: z
    .string()
    .min(2, "Un apellido debe tener al menos 2 caracteres")
    .max(50, "Un apellido no puede exceder 50 caracteres"),
  ci: z.string().min(6,"El CI o pasaporte debe tener mas de 6 caracteres").max(11,{message: "El CI o pasaporte no puede exceder 11 caracteres"}),
  birthDate: z
    .date({
      required_error: "La fecha de nacimiento es requerida",
    })
    .refine((date) => {
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age >= 18 && age <= 120;
    }, "Debes tener entre 18 y 120 años"),
});

export const step2Schema = z.object({
  email: z
    .string()
    .email("Ingresa un email válido")
    .min(1, "El email es requerido"),

  country: z.string(),
  password: z
      .string()
      .trim()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(50, "La contraseña no puede exceder 50 caracteres"),
    confirmPassword: z
      .string()
      .trim()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(50, "La contraseña no puede exceder 50 caracteres"),
});


export const completeFormSchema = step1Schema
  .merge(step2Schema)

export type FormData = z.infer<typeof completeFormSchema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
