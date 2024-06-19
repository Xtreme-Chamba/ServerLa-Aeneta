'use client'
import { EsqueletoRevision } from '@/app/clases/Clases';
import CartaMetadatos from '@/app/componentes/documentos/carta_metadatos';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Page({ params }: { params: { id: number } }) {
    const idDoc = Number(params.id);
    const [revisionDocumento, setRevision] = useState<EsqueletoRevision>({
        id_documento : idDoc,
        estado_revision : false,
        notas_revision : '',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setRevision({
            ...revisionDocumento,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const fetchRevisionDocumento = async () => {
              const response = await fetch("http://localhost:4000/documentos/revisar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(revisionDocumento)
              });
              //una opción es: const urlencoded = new URLSearchParams({
              let data = await response.json();
            }
            fetchRevisionDocumento();
            
            router.push("/documentos/registro");

          } catch (error) {
            console.log(error);
          }
    }
    
    const classNameSelectStatus = clsx(
      'input ml-1 text-left w-1/2',
      {
        'bg-aceptado': revisionDocumento?.estado_revision == true,
        'bg-rechazado': revisionDocumento?.estado_revision == false,
      },
    );

    const textoStatus = (revisionDocumento?.estado_revision == true) ? "ACEPTADO" : "RECHAZADO";

    return (
    <main className=''>
        <CartaMetadatos id = {idDoc}/>
        <form method="POST" onSubmit={handleSubmit} className="w-fit min-w-min flex flex-col justify-center align-center m-auto mt-2 border rounded-lg p-2">
            <h2 className='my-1 font-medium text-xl'>Escriba aquí abajo su resultado</h2>
            <div className="contenedor-input">
                <label htmlFor="estado_revision" className="text-right w-1/2">Veredicto</label>
                <select name='estado_revision' id='estado_revision' className={classNameSelectStatus} onChange={handleChange}>
                    <option value={0} className='bg-rechazado'>RECHAZADO</option>
                    <option value={1} className='bg-aceptado'>ACEPTADO</option>
                </select>
            </div>
           
            <div className="contenedor-input">
                <label htmlFor="notas_revision" className="text-right w-1/2">Notas de la revisión:</label>
                <textarea className="input ml-1 text-left w-1/2" name="notas_revision" id="notas_revision" onChange={handleChange} placeholder="Notas a considerar del documento revisado" />
            </div>
            <button type="submit" className="btn" >
                Enviar revision
            </button>
        </form>
    </main>
  );
}
