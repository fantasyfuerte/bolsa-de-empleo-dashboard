import { FormData } from "@/lib/register-validation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function ConfirmForm({ watchedValues }: { watchedValues: FormData }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6 animate-enter">
      <div className="text-center animate-enter">
        <h3 className="text-lg font-semibold mb-2">Revisa tu información</h3>
        <p className="text-muted-foreground">
          Verifica que todos los datos sean correctos antes de enviar
        </p>
      </div>

      <div className="space-y-4 text-sm animate-enter">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <span className="font-medium">Nombre:</span>
            <p>
              {watchedValues.firstName} {watchedValues.lastName1}{" "}
              {watchedValues.lastName2}
            </p>
          </div>
          <div>
            <span className="font-medium">Fecha de nacimiento:</span>
            <p>{format(watchedValues.birthDate, "PPP", { locale: es })}</p>
          </div>
          <div>
            <span className="font-medium">Carnet o Pasaporte:</span>
            <p>{watchedValues.ci}</p>
          </div>
          <div>
            <span className="font-medium">Correo</span>
            <p>{watchedValues.email}</p>
          </div>
          <div>
            <span className="font-medium">Correo</span>
            <p>{watchedValues.country}</p>
          </div>
          <div>
            <span className="font-medium">Contraseña</span>
            <span className="flex gap-2 items-center justify-between">
              <p
                className={`${
                  showPassword
                    ? "tracking-wider font-semibold"
                    : "blur-[3px] bg-gray-200"
                }  w-fit px-2`}
              >
                {watchedValues.password}
              </p>
              {showPassword ? (
                <EyeOff
                  size={20}
                  className="text-primary hover:text-primary/80"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  size={20}
                  className="text-primary hover:text-primary/80"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmForm;
