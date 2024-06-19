'use client'
import Pagination from '@/app/componentes/busqueda/paginacion';
import Search from '@/app/componentes/busqueda/barraBusqueda';
import Table from '@/app/componentes/busqueda/tabla';
import Link from "next/link";
import { LuBookMarked } from "react-icons/lu";
import { Suspense, useState, useEffect } from 'react';

export default function Home({
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
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 bg-fondo">
        <section className="text-texto py-8">
          <div className="flex flex-cols items-center justify-center px-4 py-10 md:px-6 ">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-5xl">Busca Trabajos terminales, Tesis y de mas documentos academicos</h1>
              <p className="text-gray-300 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre una basta coleccion de documentos academicos del IPN que te ayudaran con tu investigación.
              </p>
              <div className="text-center">
                <div className="flex flex-col items-center p-4 space-y-4">
                <div className="w-fit mx-auto">
                    <div className=" mt-4 flex items-center justify-center gap-2 md:mt-8">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
