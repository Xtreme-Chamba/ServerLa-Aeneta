'use client'
//import InvoiceStatus from '@/app/ui/invoices/status';
//import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
//import { fetchFilteredInvoices } from '@/app/lib/data';
import { useEffect, useState } from "react";
import { LinkMetadatos } from "../botones_links/botones";

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

  const [documentos, setDocumentos] = useState<any[]>([]);
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
        const documentosFormateado= data.map((documento : {id: number, Titulo : string, Palabras_clave : string, anio: number, tipo : string, Nombres: string, Apellidos: string, revisado: Buffer}) => ({
          ...documento,
          revisado: Boolean(documento.revisado[0]) // Convertir el Buffer a un valor booleano
        }));
        console.log(data);
        setDocumentos(documentosFormateado);
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
        <div className="rounded-lg bg-gray-50 p-2 flex flex-col gap-2">
          
            {documentos.map((documento :
              {id: number, Titulo : string, Palabras_clave : string, anio: number, tipo : string, Nombres: string, Apellidos: string, revisado: number}
            ) => (
              <div
                key={documento.id}
                className="p-4 bg-secundario rounded-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <LinkMetadatos titulo={documento.Titulo} id={documento.id} />
                    <p className="text-m">{documento.Nombres} {documento.Apellidos}</p>
                  </div>
                  {/*<InvoiceStatus status={invoice.status} />*/}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-medium">
                      Palabras clave: {documento.Palabras_clave}
                    </p>
                    <p>{documento.revisado}</p>
                  </div>
                </div>
              </div>
            ))}
          

          </div> 
          
      </div>
    </div>
  );
}
