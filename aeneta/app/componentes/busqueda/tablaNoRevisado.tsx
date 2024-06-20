'use client'
import { useEffect, useState } from "react";
import { LinkMetadatos, LinkRevision } from "../botones_links/botones";
import { DocumentoLigero } from "@/app/clases/Clases";

export default async function Table({
  currentPage,
  NUMERO_RESULTADOS
}: {
  currentPage: number;
  NUMERO_RESULTADOS: number;
}) {

  const [documentos, setDocumentos] = useState<DocumentoLigero[]>([]);
  const [cuerpoPeticion] = useState({
    numResultados: NUMERO_RESULTADOS,
    salto: (currentPage - 1) * NUMERO_RESULTADOS
  });
  //si acaso falta meter parseado para todo el tipo de búsquedas, de momento, titulo y autor deberían de funcionar
  //meter valicación por si pasan campos o terminos vacios
  useEffect(() => {
    try {
      console.log(cuerpoPeticion);
      const fetchResultadosBusqueda = async () => {
        const response = await fetch("http://localhost:4000/busqueda/no_revisado", {
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
      fetchResultadosBusqueda();
      
    } catch (error) {
      console.log(error)
    }
  }, [currentPage])
  
    

  if(documentos == null || documentos == undefined || documentos.length == 0){
    return (
      <div className="align-middle items-center text-center justify-between mt-2">No hay resultados para mostrar</div>
    );
  }
  
  return (
    <div className="p-6 rounded-md gap-2">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 flex flex-col gap-2">
          
            {documentos.map(( documento ) => (
              <div
                key={documento.id}
                className="p-4 bg-white border-4 border-primario rounded-md">
                <div className="items-center text-center justify-between">
                    <LinkRevision titulo={documento.Titulo} id={documento.id}/>  
                    {/* cambiar a revision */}
                    <p className="text-m mb-4">{documento.nombres} {documento.apellidos}</p>
                  {/*<InvoiceStatus status={invoice.status} />*/}
                </div>
                {/* <div className="border-t-4"></div> */}
                  <p className="font-medium">Palabras clave: </p>
                  
                    <p>
                      {documento.Palabras_clave.split(' ').map((palabra, index) =>(
                        <li key={index}>{palabra}</li>
                      ))}  
                    </p>
                    
                    {/* <p>{documento.revisado}</p> */}
              </div>
            ))}

          </div> 
          
      </div>
    </div>
  );
}
