'use client'
import Pagination from '@/app/componentes/busqueda/paginacion';
import Search from '@/app/componentes/busqueda/barraBusqueda';
import Table from '@/app/componentes/busqueda/tabla';
//import { InvoicesTableSkeleton } from '@/app/componentes/skeletons';
import { Suspense, useState, useEffect } from 'react';
//import { fetchTotalPaginasBusqueda } from '@/app/funciones/busquedas';
 
export default function Page({
  searchParams,
}: {
  searchParams?: {
    termino?: string;
    campo?:string;
    page?: number;
  };
}) {
  const termino = searchParams?.termino || '';
  const campo = searchParams?.campo || '';
  const currentPage = Number(searchParams?.page) || 1;
  const NUMERO_RESULTADOS = 10; //posiblemente se tenga que mover a un archivo de configuración
  const [totalPages, setPages]  = useState(0);
  useEffect( () => {
    try{
      const fetchGetPaginas = async () => {
        const response = await fetch(`http://localhost:4000/busqueda/paginas/${campo}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"termino": termino})
          });
        const data = await response.json();
        setPages( Math.ceil(data.total / NUMERO_RESULTADOS));  
      };
      if(termino && termino != ''){
        fetchGetPaginas();
      }
    }catch(error){
      console.log(error);
    }
  }, [NUMERO_RESULTADOS, termino, campo])
  

  return (
    <div className="mx-auto">
      <div className="bloque-titulo">
        <h1 className="fuente-titulo">Busqueda de documentos</h1>
      </div>
      <div className="w-fit mx-auto">
        <div className=" mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Buscar documentos academicos..." />
        </div>
        {  <Suspense key={termino + currentPage} /* fallback={<InvoicesTableSkeleton />}*/>
          <Table termino={termino} campo = {campo} currentPage={currentPage} NUMERO_RESULTADOS = {NUMERO_RESULTADOS} />
        </Suspense> }
      
        <div className="mt-5 flex w-full justify-center">
          { <Pagination totalPages={totalPages} /> }
        </div>
      </div>     
    </div> 
  );
}