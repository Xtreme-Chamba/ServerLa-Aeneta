'use client'
import Pagination from '@/app/componentes/busqueda/paginacion';
import TableNoRevisado from '@/app/componentes/busqueda/tablaNoRevisado';
//import { InvoicesTableSkeleton } from '@/app/componentes/skeletons';
import { Suspense, useState, useEffect } from 'react';
//import { fetchTotalPaginasBusqueda } from '@/app/funciones/busquedas';
 
export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: number;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const NUMERO_RESULTADOS = 10; //posiblemente se tenga que mover a un archivo de configuración
  const [totalPages, setPages]  = useState(0);
  useEffect( () => {
    try{
      const fetchGetPaginas = async () => {
        const response = await fetch(`http://localhost:4000/busqueda/paginas/no_revisado`, {
            method: "GET" });
        const data = await response.json();
        setPages( Math.ceil(data.total / NUMERO_RESULTADOS));  
      };
      fetchGetPaginas();
    }catch(error){
      console.log(error);
    }
  }, [NUMERO_RESULTADOS])
  

  return (
    <div className="mx-auto">
      <div className="w-fit mx-auto">
        {  <Suspense key={currentPage} >
          <TableNoRevisado currentPage={currentPage} NUMERO_RESULTADOS = {NUMERO_RESULTADOS} />
        </Suspense> }
      
        <div className="mt-5 flex w-full justify-center">
          { <Pagination totalPages={totalPages} /> }
        </div>
      </div>
      
    </div> 
  );
}