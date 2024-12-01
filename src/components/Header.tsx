"use client"
import Link from "next/link";
import { useClienteStore } from "@/context/cliente";
import { useRouter } from "next/navigation";

export function Header() {
  const { cliente, deslogaCliente } = useClienteStore()
  const router = useRouter()

  function sairCliente() {
    deslogaCliente()
    // remove de localStorage o id do cliente logado (se ele indicou salvar no login)
    if (localStorage.getItem("client_key")) {
      localStorage.removeItem("client_key")
    }
    router.push("/login")
  }

  return (
    <nav className="bg-orange-400 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./logo.webp" className="h-16" alt="Fusca" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            Pelo Pets
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {cliente.id ?
            <>
              <span className="text-black">
                {cliente.nome}
              </span>
              <Link href="/propostas" className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                Minhas Propostas
              </Link>
              <span className="cursor-pointer font-bold text-blue-600 dark:text-blue-500 hover:underline"
                onClick={sairCliente}>
                Sair
              </span>
            </>
            :
            <>
              <Link href="/login" className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                Entrar
              </Link>
            </>
          }
        </div>
      </div>
    </nav>
  )
}