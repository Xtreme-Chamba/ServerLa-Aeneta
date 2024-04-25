import Pagination from '@/app/componentes/busqueda/paginacion';
import Search from '@/app/componentes/busqueda/barraBusqueda';
import Table from '@/app/componentes/busqueda/tabla';
//import { InvoicesTableSkeleton } from '@/app/componentes/skeletons';
import { Suspense } from 'react';
//import { fetchTotalPaginasBusqueda } from '@/app/funciones/busquedas';
 
export default async function Page({
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

  //const totalPages = await fetchInvoicesPages(termino);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Documentos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar documentos academicos..." />
      </div>
      {  <Suspense key={termino + currentPage} /* fallback={<InvoicesTableSkeleton />}*/>
        <Table termino={termino} campo = {campo} currentPage={currentPage} />
      </Suspense> }
    {/* Para el total de paginas, pero no es tan urgente de momento
      <div className="mt-5 flex w-full justify-center">
        { <Pagination totalPages={totalPages} /> }
      </div>*/}
    </div> 
  );
}