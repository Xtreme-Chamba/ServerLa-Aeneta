import CartaMetadatos from '@/app/componentes/documentos/carta_metadatos';

export default function Page({ params }: { params: { id: number } }) {
    const id = params.id;  
    return (
    <main className=''>
      <div className='bloque-titulo'>
        <h1 className='fuente-titulo'>Metadatos del documento</h1>
      </div>
      <CartaMetadatos id = {id}/>
    </main>
  );
}