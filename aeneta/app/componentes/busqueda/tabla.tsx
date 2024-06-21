'use client'
import { useEffect, useState } from "react";
import { LinkMetadatos } from "../botones_links/botones";
import { DocumentoLigero } from "@/app/clases/Clases";

export default async function Table({
  termino,
  campo,
  currentPage,
  NUMERO_RESULTADOS
}: {
  termino: string;
  campo: string;
  currentPage: number;
  NUMERO_RESULTADOS: number;
}) {

  const [documentos, setDocumentos] = useState<DocumentoLigero[]>([]);
  const [cuerpoPeticion, setPeticion] = useState({
    terminoBusqueda: termino,
    numResultados: NUMERO_RESULTADOS,
    salto: (currentPage - 1) * NUMERO_RESULTADOS
  });
  //si acaso falta meter parseado para todo el tipo de búsquedas, de momento, titulo y autor deberían de funcionar
  //meter valicación por si pasan campos o terminos vacios
  useEffect(() => {
    try {
      console.log(cuerpoPeticion);
      const fetchResultadosBusqueda = async () => {
        const response = await fetch(`http://localhost:4000/busqueda/${campo}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cuerpoPeticion)
        });
        //una opción es: const urlencoded = new URLSearchParams({
        const data = await response.json();
        console.log(data);
        setDocumentos(data);
      }
      if(termino && termino != ''){
        fetchResultadosBusqueda();
      }
      
    } catch (error) {
      console.log(error)
    }
  }, [termino, campo, currentPage])
  
    

  if(documentos == null || documentos == undefined || documentos.length == 0){
    return (
      <div className="align-middle items-center text-center justify-between mt-2">No hay resultados para mostrar</div>
    );
  }
  
  return (
    <div className="mt-6 rounded-md gap-2">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg p-2 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        
        {documentos.map((documento) => (
          <div
            key={documento.id}
            className="p-4 border-solid border-4 border-primario w-80 h-52 rounded-md"
          >
            <div className="pb-4">
              <div className="text-center">
                <LinkMetadatos titulo={documento.Titulo} id={documento.id} />
                <p className="text-m text-left">{documento.nombres} {documento.apellidos}</p>
              </div>
              {/*<InvoiceStatus status={invoice.status} />*/}
            </div>
            <div className="text-left">
              <p className="font-bold">Palabras clave:</p>
                {documento.Palabras_clave.split(' ').map((palabra, index) => (
                  <li key={index}>{palabra}</li>
                ))}
              <p>{documento.revisado}</p>
            </div>
          </div>
        ))}
      </div> 
    </div>
  </div>
  
  );
}
