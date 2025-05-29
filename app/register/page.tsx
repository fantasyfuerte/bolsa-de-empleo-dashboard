import RegisterForm from "@/components/container/register/register-form";
import Logo from "@/assets/logo";

function RegisterPage() {
  return (
    <section className="flex flex-col justify-center h-screen">
      <Logo />
      <RegisterForm />
    </section>
  );
}

export default RegisterPage;
