import Link from "next/link";

export function LinkMetadatos({ titulo, id }: { titulo: string, id: number }) {
    return (
      <Link
        href={`/documentos/${id}/metadatos`}  //pendiente por ver como va a ser esta ruta
        className="items-center text-texto py-2 text-xl font-bold hover:text-primario"
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

export function LinkVizualizacionDocumento ( { url } : { url: string }){
  const urlAbsoluta = `http://localhost:4000${url}`
  return (
    <Link
      href={urlAbsoluta} passHref
      target="_blank" rel="noopener noreferrer">
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