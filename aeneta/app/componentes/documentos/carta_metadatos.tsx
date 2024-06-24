'use client'
import { DocumentoCompleto } from "@/app/clases/Clases";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { LinkVizualizacionDocumento } from "../botones_links/botones";
import { FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function CartaMetadatos({ id }: { id: number }) {
    const [documento, setDocumento] = useState<DocumentoCompleto>();
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
              setDocumento(data);
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
    if(documento == undefined || documento == null){
        return (
            <div className="align-middle items-center text-center justify-between mt-2">No se logro obtener resultados para el documento con id {id}</div>
        );
    }

    return (
    <main className=''>
      <div className='px-8 w-full max-w-2xl border-2 border-black mx-auto rounded-2xl' key = {documento.id} >
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
                <p className='font-sans text-gray-500 ml-3'>{documento.nombres} {documento.apellidos}</p>
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

            <div className='flex justify-center py-4'>
              <LinkVizualizacionDocumento url={documento.url}/>

            </div>

        </div>
    </main>
    );
}