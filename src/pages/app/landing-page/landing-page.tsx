import { Link } from "react-router-dom";

import logo from "../../../assets/logoTaskwind.svg";
import undrawIlustration from "../../../assets/undrawIlustration.svg";

export function LandingPage() {
  return (
    <div className="w-full h-screen px-20 pt-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <img src={logo} alt="" />
          <strong className="text-2xl font-extrabold">Taskwind</strong>
        </div>
        <div>
          <Link to="/login" className="border border-black px-3 p-2 rounded">
            Fazer login
          </Link>
        </div>
      </header>
      <section className="flex items-center justify-between h-full">
        <div className="flex flex-col max-w-2xl">
          <h1 className="text-7xl font-bold leading-tight">
            Gerenciamento de Tarefas{" "}
            <span className="text-white bg-gradient-to-l from-purple-600 to-purple-400 rounded-3xl px-6">
              Eficaz.
            </span>
          </h1>
          <p className="text-lg font-bold mt-5 mb-7 max-w-md">
            Aumente a eficiência do seu trabalho e reduza o tempo necessário
            para gerenciar tarefas com nossos sistema.
          </p>
          <Link
            to="/login"
            className="text-white font-bold bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg px-6 max-w-fit py-4 px-4"
          >
            Começar Agora
          </Link>
        </div>
        <div>
          <img src={undrawIlustration} alt="" />
        </div>
      </section>
    </div>
  );
}
