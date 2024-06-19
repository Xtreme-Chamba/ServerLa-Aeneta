'use client'
import Link from "next/link";
import { LuBookMarked } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function BarraNavegacion () {

    const pathname = usePathname();

    const palabraruta: { [key: string]: string } = {
      '/' : 'Busqueda de documento',
      '/documentos/registro' : 'Subir documento academico',
      '/documento/{id}/metadatos' : 'Metadatos del documento',
      '/revisiones/documentos/busqueda' : 'Documentos sin revisar',
      '/revisiones/documentos/{id}/consultar' : 'Status de documento',
      '/revisiones/documentos/{id}/revisar' : 'Revision de documento academico',
      'usuarios/registro/externos' : 'Registrar nuevo director externo',
    };

    const palabraactual = palabraruta[pathname] || 'pagina';

    return (
        <header className="bg-primario px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LuBookMarked  className="size-10"/>
          <span className="text-2xl font-bold">Server la-Aeneta</span>
        </Link>

        <h1 className="fuente-titulo">{palabraactual}</h1>

        <nav className="hidden md:flex gap-4">
          <Link href="#" className="text-lg font-medium hover:underline" >
            Acerca de
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" >
            Buscar 
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Iniciar sesion
          </Link>
        </nav>
      </header>

    );
}