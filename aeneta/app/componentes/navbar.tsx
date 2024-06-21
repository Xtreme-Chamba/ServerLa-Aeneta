'use client'
import Link from "next/link";
import { LuBookMarked } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function BarraNavegacion () {

    const pathname = usePathname();

    const palabraruta: { [key: string]: string } = {
      '/' : 'Busqueda de documento',
      '/documentos/registro' : 'Subir documento academico',
      '/revisiones/documentos/busqueda' : 'Documentos sin revisar',
      'usuarios/registro/externos' : 'Registrar nuevo director externo',
    };

    const obteneractual = (path: string) => {
      const match = path.match(/^\/documentos\/\d+\/metadatos$/);
      if (match) {
        return 'Metadatos del documento'
      }
      const match2 = path.match(/^\/revisiones\/documentos\/\d+\/consultar$/);
      if(match2){
        return 'Status del documento'
      }
      const match3 = path.match(/^\/revisiones\/documentos\/\d+\/revisar$/);
      if(match3){
        return 'Status del documento'
      }
      

      return palabraruta[path] || 'pagina'
    }

    const palabraactual = obteneractual(pathname) || 'pagina';

    return (
        <header className="bg-primario px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <LuBookMarked  className="size-10"/>
          <span className="text-2xl font-bold">Server la-Aeneta</span>
        </Link>

        <h1 className="text-2xl font-bold">{palabraactual}</h1>

        <nav className="hidden md:flex gap-4">
          <Link href="#" className="text-lg font-bold hover:underline">
            Iniciar sesion
          </Link>
        </nav>
      </header>

    );
}