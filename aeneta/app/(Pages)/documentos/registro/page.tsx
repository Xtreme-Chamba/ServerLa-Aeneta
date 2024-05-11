//'use '

export default function Page(){

    return (
    <main>
        <div className="bloque-titulo">
            <h1 className='fuente-titulo'>Subir documento academico</h1>
        </div>
        <form method="POST" className="w-fit min-w-min flex flex-col justify-center align-center m-auto mt-2">
            <div className="contenedor-input">
                <label htmlFor="titulo" className="text-right w-1/2">Titulo del documento:</label>
                <input className="input text-left w-1/2" name="titulo" id="titulo" type="text" placeholder="Titulo del documento..." />
            </div>
            {/*El autor debería de obtenerse de una sesión, sería opcional mostrar el nombre y apellido de quien registra */}
            <div className="contenedor-input">
                <label htmlFor="anio" className="text-right w-1/2">Año publicación:</label>
                <input className="input text-left w-1/2" name="anio" id="anio" type="number" placeholder="2024" />
            </div>
            <div className="contenedor-input">
                <label htmlFor="palabras_clave" className="text-right w-1/2">Palabras clave:</label>
                <input className="input text-left w-1/2" name="palabras_clave" id="palabras_clave" type="text" placeholder="Escriba de 2 a 4 palabras clave..." />
            </div>
            <div className="contenedor-input align-top">
                <label htmlFor="resumen" className="text-right w-1/2">Resumen:</label>
                <textarea className="input text-left w-1/2" name="resumen" id="resumen" placeholder="Escriba el resumen aquí...">
                </textarea>
            </div>
            <div className="contendor-input align-top">
                <div className="text-right w-1/2">Tipo de documento:</div>
                <div className="text-left w-1/2 contenedor-col">
                    <div className="flex flex-row">
                        <input className="" name="tipo-documento" id="tesis" type="radio" value={1}/>
                        <label htmlFor="tesis">Tesis</label>
                    </div>
                    <div className="flex flex-row">
                        <input className="" name="tipo-documento" id="doc-investigacion" type="radio" value={2}/>
                        <label htmlFor="doc-investigacion">Documento de investigación</label>
                    </div>
                    <div className="flex flex-row">
                        <input className="" name="tipo-documento" id="curricular" type="radio" value={3}/>
                        <label htmlFor="curricular">Documento</label>
                    </div>
                </div>
            </div>
            <div className="contenedor-input">
                <label htmlFor="unidad-academica" className="text-right w-1/2">Unidad academica</label>
                {/**De momento, creo que ingresar de manera estatica es mejor, a tener que hacer una petición a cada rato */}
                <ListadoOpciones/>
            </div>
            <div className="contenedor-input">
                <label htmlFor="archivo" className="text-right w-1/2">Archivo:</label>
                <input className="text-left w-1/2" name="archivo" id="archivo" type="file" />
            </div>
            <button type="submit" className="btn">
                Subir documento
            </button>
        </form>
    </main>
    );
}

function ListadoOpciones(){
    return (
        <select className="input text-left w-1/2" name="unidad-academica" id="unidad-academica" defaultValue={0}>
            <option value='0'><i>Selecciona su unidad academica</i></option>
            <option value='1'>ENBA</option>
            <option value='2'>ENCB</option>
            <option value='3'>ENMyH</option>
            <option value='4'>ESCA Unidad Santo Tomas</option>
            <option value='5'>ESCA Unidad Tepepan</option>
            <option value='6'>ESCOM</option>
            <option value='7'>ESE</option>
            <option value='8'>ESEO</option>
            <option value='9'>ESFM</option>
            <option value='10'>ESIME Unidad Zacatenco</option>
            <option value='11'>ESIME Unidad Azcapotzalco</option>
            <option value='12'>ESIME Unidad Culhuacan</option>
            <option value='13'>ESIME UnidadTicoman</option>
            <option value='14'>ESIQUIE</option>
            <option value='15'>ESIT</option>h
            <option value='16'>ESIA Unidad Tecamachalco</option>
            <option value='17'>ESIA Unidad Ticoman</option>
            <option value='18'>ESIA Unidad Zacatenco</option>
            <option value='19'>ESM</option>
            <option value='20'>EST</option>
            <option value='21'>UPIIC Campus Coahuila</option>
            <option value='22'>UPIBI</option>
            <option value='23'>UPIIG Campus Guanajuato</option>
            <option value='24'>UPIIZ Campus Zacateas</option>
            <option value='25'>UPIIH Campus Hidalgo</option>
            <option value='26'>UPIIP Campus Palenque</option>
            <option value='27'>UPIIT Campus Tlaxcala</option>
            <option value='28'>UPIICSA</option>
            <option value='29'>UPIITA</option>
            <option value='30'>UPIEM</option>
            <option value='31'>CISC Unidad Santo Tomás</option>
            <option value='32'>CISC Unidad Milpa Alta</option>
        </select>
    );
}