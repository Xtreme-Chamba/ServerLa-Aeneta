import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import Link from "next/link";

export function LinkMetadatos({ titulo, id }: { titulo: string, id: number }) {
    return (
      <Link
        href={`/documentos/${id}/metadatos`}  //pendiente por ver como va a ser esta ruta
        className="flex items-center text-texto py-2 text-xl font-bold hover:text-primario"
      >
        <span className="hidden md:block">{titulo}</span>
      </Link>
    );
  }

export function LinkVizualizacionDocumento ( { id } : { id: number }){
  return (
    <Link
      href={`/documento/${id}/documento`} //sugerido por mi
    > 
      <button className='w-fit p-2 bg-primario rounded-lg self-center font-semibold '>
        Ver documento
      </button>
    </Link>
  );
}