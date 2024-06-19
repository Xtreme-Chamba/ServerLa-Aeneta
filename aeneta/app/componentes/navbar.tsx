import Link from "next/link";
import { LuBookMarked } from "react-icons/lu";

export default function BarraNavegacion () {
    return (
        <header className="bg-primario px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LuBookMarked  className="size-10"/>
          <span className="text-2xl font-bold">Server la-Aeneta</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Acerca de
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Buscar 
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline">
            Iniciar sesion
          </Link>
        </nav>
      </header>

    );
}