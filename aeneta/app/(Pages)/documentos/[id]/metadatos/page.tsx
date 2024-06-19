import CartaMetadatos from '@/app/componentes/documentos/carta_metadatos';

export default function Page({ params }: { params: { id: number } }) {
    const id = params.id;  
    return (
    <main className=''>
      <CartaMetadatos id = {id}/>
    </main>
  );
}