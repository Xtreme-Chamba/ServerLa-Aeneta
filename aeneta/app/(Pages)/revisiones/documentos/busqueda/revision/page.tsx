'use client'
import { DocumentoCompleto } from '@/app/clases/Clases';
import { LinkRegreso, LinkVizualizacionDocumento } from '@/app/componentes/botones_links/botones';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [documento, setDocumento] = useState<DocumentoCompleto[]>([]);
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
    <main className=''>
        <div className='bloque-titulo'>
            <h1 className='fuente-titulo'>Revision de documento</h1>
        </div>
      {documento.map((documento) => (
        <div className='mx-auto mt-2 w-fit border rounded-2xl flex flex-col p-2' key = {documento.id} >
            <h2 className='font-bold text-3xl text-center mt-2'>{documento.Titulo.toUpperCase()}</h2>
            <div className='mt-3 my-1 flex px-2 items-center'>
                <h3 className="font-bold text-xl">Palabras clave : </h3>
                <div className='font-semibold'>{documento.Palabras_clave}</div>
            </div>
            <div className='mt-3 my-1 flex px-2 items-center'>
                <div className="font-bold text-xl">Unidad academica : </div>
                <div className='font-semibold'>{documento.unidad_academica}</div>
            </div>
            <div className='mt-3 my-1 flex px-2 items-center'>
                <div className="font-bold text-xl">Autor : </div>
                <div className='font-semibold'>{documento.Nombres} {documento.Apellidos}</div>
            </div>
            <div className='mt-3 my-1 flex px-2 items-center'>
                <div className="font-bold text-xl">Tipo de documento : </div>
                <div className='font-semibold'>{documento.tipo}</div>
            </div>
            <div className='mt-3 my-1 flex px-2 items-center'>
                <div className="font-bold text-xl">Resumen : </div>
                <div className='font-semibold'>{documento.Resumen}</div>
            </div>
            <LinkVizualizacionDocumento id={Number(documento.id)}/>
        </div>

      ))}
    </main>
  );
}