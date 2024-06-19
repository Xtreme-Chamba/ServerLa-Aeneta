import Link from "next/link";

export function LinkMetadatos({ titulo, id }: { titulo: string, id: number }) {
    return (
      <Link
        href={`/documentos/${id}/metadatos`}  //pendiente por ver como va a ser esta ruta
        className="items-center text-texto py-2 text-xl font-bold hover:text-secundario"
      >
        <span className="hidden md:block">{titulo}</span>
      </Link>
    );
}

export function LinkRevision({ titulo, id }: { titulo: string, id: number }) {
    return (
      <Link
        href={`/revisiones/documentos/${id}/revisar`} 
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
      <button className='btn'>
        Ver documento
      </button>
    </Link>
  );
}

export function LinkRegreso(){
  return(
    <Link href={"/"}>
      <button className="'btn">
        Regresar
      </button>
    </Link>
  )
}