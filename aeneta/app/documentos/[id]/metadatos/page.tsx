'use client'
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [documento, setDocumento] = useState([]);
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
    }, [id])
    

    return (
    <main>
        <div className='w-full bg-primario text-center p-2'>
            <h1 className='font-bold text-xl'>Metadatos del documento</h1>
        </div>
      {documento.map((documento : {id: number, Titulo : string, Palabras_clave : string, Resumen : string, anio: number, url: string, tipo : string, unidad_academica : string, Nombres: string, Apellidos: string, revisado: Buffer}) => (
        <div className='m-auto w-fit border rounded align-middle' key = {documento.id} >
            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right">Titulo : </div>
                <div className='px-2 w-full bg-secundario font-semibold'>{documento.Titulo}</div>
            </div>
            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right bg-secundario">Palabras clave : </div>
                <div className='px-2 w-full '>{documento.Palabras_clave}</div>
            </div>
            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right">Unidad academica : </div>
                <div className='px-2 w-full bg-secundario'>{documento.unidad_academica}</div>
            </div>

            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right bg-secundario">Autor : </div>
                <div className='px-2 w-full '>{documento.Nombres} {documento.Apellidos}</div>
            </div>

            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right">Tipo de documento : </div>
                <div className='px-2 w-full bg-secundario'>{documento.tipo}</div>
            </div>

            <div className=' mt-3 my-1 flex align-items-center'>
                <div className="px-2 w-full text-right bg-secundario">Resumen : </div>
                <div className='px-2 w-full '>{documento.Resumen}</div>
            </div>
            <div className='border w-fit my-1 p-2 rounded text-center m-auto'>
                Boton del PDF
            </div>
        </div>

      ))}
    </main>
  );
}