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
              console.log(data);
              setRevision(data);
              console.log(revisionDocumento);
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
      'flex items-center justify-center rounded-md border',
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
        <div className="flex m-auto items-center flex-col border rounded-md text-center p-2 w-fit">
          <div>
            <span>Estatus revision</span>
            <div className={classNameStatus}>{textoStatus}</div>
          </div>
          <div>Notas de revision:</div>
          <div className='border rounded-sm p-2 text-justify'>{revisionDocumento.notas_revision}</div>
        </div>
        }
    </main>
  );
}
