'use client'
import { Revision } from '@/app/clases/Clases';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const [revisionDocumento, setRevision] = useState<any>({});
    useEffect(() => {
        try {
            const peticion = {
                idDoc : id
            }
            const fetchRevisionDocumento = async () => {
              const response = await fetch("http://localhost:4000/documentos/revision", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(peticion)
              });
              //una opción es: const urlencoded = new URLSearchParams({
              let data = await response.json();
              setRevision(data);
            }
            fetchRevisionDocumento();
            if(!revisionDocumento || revisionDocumento == undefined){
                notFound();
            }
          } catch (error) {
            console.log(error)
          }
    }, [id])
    
    const classNameStatus = clsx(
      'flex items-center justify-center rounded-md border my-1 w-fit text-center m-auto p-1',
      {
        'bg-aceptado': revisionDocumento?.estado_revision == true,
        'bg-rechazado': revisionDocumento?.estado_revision == false,
      },
    );

    const textoStatus = (revisionDocumento?.estado_revision == true) ? "ACEPTADO" : "RECHAZADO";

    return (
    <main className=''>
        <div className='bloque-titulo'>
            <h1 className='fuente-titulo'>Revision del documento</h1>
        </div>
        {revisionDocumento && 
        <div className="flex m-auto items-center flex-col border rounded-md text-center p-2 w-fit my-2 bg-secundario">
          <div>
            <h2 className='my-1 font-medium text-xl'>Revisión del documento "{revisionDocumento.titulo}"</h2>
            <span className='my-1 font-medium'>Estatus revision</span>
            <div className={classNameStatus}>{textoStatus}</div>
          </div>
          <div className='my-1 font-medium'>Notas de revision:</div>
          <div className='border rounded-sm p-2 text-justify my-1 bg-fondo'>{revisionDocumento.notas_revision}</div>
        </div>
        }
    </main>
  );
}
