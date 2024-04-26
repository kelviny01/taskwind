import { Link } from "react-router-dom";

import logo from "../../../assets/logoTaskwind.svg";
import undrawIlustration from "../../../assets/undrawIlustration.svg";

export function LandingPage() {
  return (
    <div className="sm:px-6 pt-8 w-full h-screen">
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
      <section className="sm:flex-col items-center justify-between h-full sm:my-24">
        <div className="flex flex-col max-w-2xl">
          <h1 className="sm:text-4xl sm:leading-snug font-bold ">
            Gerenciamento de Tarefas{" "}
            <span className="sm:rounded-xl text-white bg-gradient-to-l from-purple-600 to-purple-400 px-6">
              Eficaz.
            </span>
          </h1>
          <p className="sm:pt-4 sm:font-normal text-lg max-w-md">
            Aumente a eficiência do seu trabalho e reduza o tempo necessário
            para gerenciar tarefas com nossos sistema.
          </p>
          <Link
            to="/login"
            className="text-white font-bold bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg px-6 max-w-fit py-4 px-4 sm:mt-3"
          >
            Começar Agora
          </Link>
        </div>
        <div className="sm:mt-16">
          <img src={undrawIlustration} alt="" />
        </div>
      </section>
    </div>
  );
}
