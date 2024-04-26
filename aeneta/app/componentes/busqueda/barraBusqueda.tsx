'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
//import { constants } from 'buffer';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'; 
import { useDebouncedCallback } from 'use-debounce'; //librería que se encarga de hacer la busqueda cuando es necesario y no en cada cambio
//useSearchParams de parametros de búsqueda en la URL
//usePathname y useRouter son para la navegacion

export default function Search({ placeholder }: { placeholder: string }) {

  const searchParams = useSearchParams();
  const pathname = usePathname(); //este retorna la ruta actual, en este caso, es /busqueda
  const { replace } = useRouter();


    const handleChange = (campo : string ) => {
      const params = new URLSearchParams(searchParams);
      if (campo) {
        params.set('campo', campo);
      } else {
        params.delete('campo');
      }
      replace(`${pathname}?${params.toString()}`);
    }

    const handleSearch = useDebouncedCallback((term : string ) => {
      console.log(`Buscando... ${term}`);
     
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('termino', term);
      } else {
        params.delete('termino');
      }
      replace(`${pathname}?${params.toString()}`);
    }, 400);
  
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="busqueda" className="sr-only">
        Busqueda
      </label>
      <select 
        name='campo'
        className='dark:bg-gray-500 dark:text-gray-100'
        onChange={(e) => {
          handleChange(e.target.value);
        }} >
        <option value="campo_no_asignado">Campo de busqueda</option>
        <option value="titulo">Titulo</option>
        <option value="autor">Autor</option>
        <option value="anio">Año</option>
        <option value="palabras_clave">Palabras clave</option>
      </select>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-100 dark:bg-gray-500 dark:text-white"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        name="busqueda"
        defaultValue={searchParams.get('termino')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-100 " />
    </div>
  );
}
