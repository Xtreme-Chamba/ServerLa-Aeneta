'use client';
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
    }, 200);
  
  return (
    <div className="flex">
      <select 
        name='campo'
        className='rounded-lg border-gray-300 mr-2 text-md w-fit'
        onChange={(e) => {
          handleChange(e.target.value);
        }} >
        <option value="campo_no_asignado">Campo de busqueda</option>
        <option value="titulo">Titulo</option>
        <option value="autor">Autor</option>
        <option value="anio">Año</option>
        <option value="palabrasClave">Palabras clave</option>
      </select>
      <input
        className="w-full rounded-md border border-gray-200 py-[9px] pl-2 text-md placeholder:text-gray-500 bg-gray-100 "
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        name="busqueda"
        defaultValue={searchParams.get('termino')?.toString()}
      />
      
    </div>
  );
}
