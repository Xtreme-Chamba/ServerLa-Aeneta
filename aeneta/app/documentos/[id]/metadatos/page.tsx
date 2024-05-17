'use client'
import { LinkVizualizacionDocumento } from '@/app/componentes/botones_links/botones';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [documento, setDocumento] = useState([]);
    const router = useRouter();

    useEffect(() => {
        try {
            const peticion = {
                idDoc : id
            }
            const fetchMetadatosDocumento = async () => {
              const response = await fetch("http://localhost:4000/documentos/metadatos", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(peticion)
              });
              //una opción es: const urlencoded = new URLSearchParams({
              const data = await response.json();
              const documentosFormateado = data.map((documento : {id: number, Titulo : string, Palabras_clave : string, Resumen : string, anio: number, url: string, tipo : string, unidad_academica : string,  Nombres: string, Apellidos: string, revisado: Buffer}) => ({
                ...documento,
                revisado: Boolean(documento.revisado[0]) // Convertir el Buffer a un valor booleano
              }));
              setDocumento(documentosFormateado);
              console.log(documento);
            }
            fetchMetadatosDocumento();
            if(!documento){
                notFound();
            }
          } catch (error) {
            console.log(error)
          }
    }, [id]);
    
    const handleClick = () => {
      router.push('/busqueda');
    };

    return (
    <main className=''>
        <div className='w-full text-center p-2 bg-primario mb-8'>
            <h1 className='font-bold text-2xl'>Metadatos del documento</h1>
        </div>
      {documento.map((documento : {id: number, Titulo : string, Palabras_clave : string, Resumen : string, anio: number, url: string, tipo : string, unidad_academica : string, Nombres: string, Apellidos: string, revisado: Buffer}) => (
        <div className='w-full max-w-2xl border-2 border-black mx-auto rounded-2xl' key = {documento.id} >
            <h2 className='font-bold text-3xl text-center mt-2'>{documento.Titulo.toUpperCase()}</h2>

            <div className='grid gap-1'>
              <div className='flex items-center gap-2'>
              <FaAngleRight/>
                <label className='text-xl font-bold'>Palabras clave</label>
              </div>
                <p className='font-sans text-gray-500 ml-3'>{documento.Palabras_clave}</p>
            </div>

            <div className='grid gap-1'>
              <div className='flex items-center gap-2'>
              <FaAngleRight/>
                <label className='text-xl font-bold'>Unidad academica</label>
              </div>
                <p className='font-sans text-gray-500 ml-3'>{documento.unidad_academica}</p>
            </div>

            <div className='grid gap-1'>
              <div className='flex items-center gap-2'>
              <FaAngleRight/>
                <label className='text-xl font-bold'>Autor</label>
              </div>
                <p className='font-sans text-gray-500 ml-3'>{documento.Nombres} {documento.Apellidos}</p>
            </div>

            <div className='grid gap-1'>
              <div className='flex items-center gap-2'>
              <FaAngleRight/>
                <label className='text-xl font-bold'>Tipo de documento</label>
              </div>
                <p className='font-sans text-gray-500 ml-3'>{documento.tipo}</p>
            </div>

            <div className='grid gap-1'>
              <div className='flex item-center'>
                <FaAngleRight/>
                <label className='text-xl font-bold'>Resumen</label>
              </div>
                <p className='font-sans text-gray-500 ml-3'>{documento.Resumen}</p>
            </div>

            <div className='flex justify-between'>
              <LinkVizualizacionDocumento id={Number(documento.id)}/>

              <button
              onClick={handleClick}
              className="w-fit p-2 bg-primario rounded-lg self-center font-semibold m-5"
              >
              Regresar a incio
              </button>
            </div>

        </div>

      ))}
    </main>
  );
}