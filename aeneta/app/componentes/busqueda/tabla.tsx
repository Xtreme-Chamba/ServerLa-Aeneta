'use client'
//import InvoiceStatus from '@/app/ui/invoices/status';
//import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
//import { fetchFilteredInvoices } from '@/app/lib/data';
import { useEffect, useState } from "react";

export default async function Table({
  termino,
  campo,
  currentPage,
}: {
  termino: string;
  campo: string;
  currentPage: number;
}) {

  const NUMERO_RESULTADOS = 20;
  const [documentos, setDocumentos] = useState([]);
  //si acaso falta meter parseado para todo el tipo de búsquedas, de momento, titulo y autor deberían de funcionar
  let cuerpoPeticion = { 
    "terminoBusqueda" : termino, 
    "numResultados" : NUMERO_RESULTADOS,
    "salto": (currentPage - 1) * NUMERO_RESULTADOS 
   };
  console.log(cuerpoPeticion);
  //meter valicación por si pasan campos o terminos vacios
    try {
    const response = await fetch(`http://localhost:4000/busqueda/${campo}`, {
      method: "POST",
      body: JSON.stringify(cuerpoPeticion)
    });
    const data = await response.json();
    setDocumentos(data);
    console.log(documentos);
    } catch (error) {
      console.log(error)
    }

  if(documentos == null || documentos == undefined || documentos.length == 0){
    return (
      <div>No hay resultados para mostrar</div>
    );
  }
  
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <div className="">
          
            {documentos.map((documento :
              {id: number, Titulo : string, Palabras_clave : string, anio: number, tipo : string, Nombres: string, Apellidos: string, revisado: number}

            ) => (
              <div
                key={documento.id}
                className="mb-2 w-full rounded-md bg-gray-900 p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      
                      <p>{documento.Titulo}</p>
                    </div>
                    <p className="text-sm text-gray-200">{documento.Nombres} {documento.Apellidos}</p>
                  </div>
                  {/*<InvoiceStatus status={invoice.status} />*/}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {documento.Palabras_clave}
                    </p>
                    <p>{documento.revisado}</p>
                  </div>
                </div>
              </div>
            ))}
          

          </div> 
          
        </div>
      </div>
    </div>
  );
}
