import Image from "next/image";
import LogoImage from "@/assets/logo-sidebar.png";

function Logo() {
  return (
    <div>
      <Image
        src={LogoImage}
        className="w-[180px] self-center mx-auto"
        alt="Logo"
        width={150}
        height={150}
        priority
      />
      <h3 className="text-primary font-[500] text-center -mt-[3px]">
        Gestión de Servicios Senior
      </h3>
    </div>
  );
}

export default Logo;
