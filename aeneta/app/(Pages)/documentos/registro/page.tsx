'use client'
import { UsuarioNombre } from "@/app/clases/Clases";
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Page(){
    //lo normal son los internos
    const [listaDirectores, setListaDirectores] = useState<UsuarioNombre[]>([]);
    //ya luego vemos lo de los directores externos
    const [listaDirectoresExternos, setListaDirectoresExt] = useState<UsuarioNombre[]>([]);

    //const refBtnToogleInterno = useRef<HTMLButtonElement>(null);
    //const refBtnToogleExterno = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      try{
        const fetchDirectores = async () => {
            //propuesta de ruta para acceder a la lista de directores, es un GET
            const response = await fetch("http://localhost:4000/users/directores/internos", 
            { method : "GET"} );
            const data = await response.json();
            setListaDirectores(data);
        }
        const fetchDirectoresExternos = async () => {
            //propuesta de ruta para acceder a la lista de directores, es un GET
            const response = await fetch("http://localhost:4000/users/directores/externos", 
            { method : "GET"} );
            const data = await response.json();
            setListaDirectoresExt(data);
            console.log(listaDirectoresExternos)
        }
        fetchDirectores(); //se obtienen los docentes disponibles, para ser directores
        fetchDirectoresExternos();
      }catch(error){
        console.log(error)
      }
    }, [])
    /*
    if(refBtnToogleInterno && listaDirectores)
        refBtnToogleInterno?.addEventListener('click', toogleInterno);

    if(refBtnToogleExterno && listaDirectoresExternos)
        refBtnToogleExterno?.addEventListener('click', toogleExterno);
*/
    
    function toogleInterno() {
        const selectInternos = document.getElementById("container_director-2-int");
        selectInternos?.classList.toggle("forzar-oculto");
        return ;
    }

    function toogleExterno() {
        const selectExternos = document.getElementById("container_director-2-ext");
        selectExternos?.classList.toggle("forzar-oculto");
    }

    return (
    <main>
        <form method="POST" className="w-fit min-w-min flex flex-col justify-center align-center m-auto mt-2">
            <div className="contenedor-input">
                <label htmlFor="titulo" className="text-right w-1/2">Titulo del documento:</label>
                <input className="input ml-1 text-left w-1/2" name="titulo" id="titulo" type="text" placeholder="Titulo del documento..." />
            </div>
            {/*El autor debería de obtenerse de una sesión, sería opcional mostrar el nombre y apellido de quien registra */}
            
            {/*Para directores, hacer un fetch de los profesores registrados para poder seleccionar a lo más dos */}
            {/*Y tambien habría que permitir que pueda elegir uno o dos de esta forma, y del externo sería cero o uno */}

            <ListaDirectores nombreInput={String("director-1")} txtLabel="Director 1" arregloDirectores = {listaDirectores} defaultHidden = {false} />
            
            {/**Meter funcionalidad para agregar director interno, o agregar director externo */}
            <div className="flex flex-row align-middle items-center text-center justify-center">
                <button className="btn-2" type="button" id="btn-toogle-dir-interno"  onClick={toogleInterno}>{/**por definir estilos de btn-2 */}
                    <FaPlusSquare className="align-middle flex items-center"/>Nuevo director INTERNO
                </button>
                <button className="btn-2" type="button" id="btn-toogle-dir-externo"  onClick={toogleExterno}>
                    <FaPlusSquare className="align-middle flex items-center"/>Nuevo director EXTERNO
                </button>
            </div>
            {/*Se debe de mostrar y ocultar conforme se agregue el botón */}
            <ListaDirectores nombreInput={String("director-2-int")} txtLabel="Director 2" arregloDirectores = {listaDirectores} defaultHidden ={ true }/>
            {/*Lo mismo para directores externos, e igual agregar un botón pararegistrar otro director externo */}
            
            <ListaDirectores nombreInput={String("director-2-ext")} txtLabel="Director externo" arregloDirectores = {listaDirectoresExternos} defaultHidden = {true}  />
            

            <div className="contenedor-input">
                <label htmlFor="anio" className="text-right w-1/2">Año publicación:</label>
                <input className="input ml-1 text-left w-1/2" name="anio" id="anio" type="number" placeholder="2024" />
            </div>
            <div className="contenedor-input">
                <label htmlFor="palabras_clave" className="text-right w-1/2">Palabras clave:</label>
                <input className="input ml-1 text-left w-1/2" name="palabras_clave" id="palabras_clave" type="text" placeholder="Escriba de 2 a 4 palabras clave..." />
            </div>
            <p className="italic font-light text-right text-xs">Escribir las palabras clave separadas por comas</p>
            <div className="contenedor-input align-top">
                <label htmlFor="resumen" className="text-right w-1/2">Resumen:</label>
                <textarea className="input ml-1 text-left w-1/2 h-fit resize-none" name="resumen" id="resumen" placeholder="Escriba el resumen aquí..." >
                </textarea>
            </div>
            <div className="contenedor-input">
                <label className="text-right w-1/2" htmlFor="tipo-documento">Tipo de documento:</label>
                <SelectTipoDocumento/>
            </div>
            <div className="contenedor-input">
                <label htmlFor="unidad-academica" className="text-right w-1/2">Unidad academica</label>
                {/**De momento, creo que ingresar de manera estatica es mejor, a tener que hacer una petición a cada rato */}
                <SelectUnidadesAcademicas/>
            </div>
            <div className="contenedor-input">
                <label htmlFor="archivo" className="text-right w-1/2">Archivo:</label>
                <input className="ml-1 text-left w-1/2" name="archivo" id="archivo" type="file" />
            </div>
            <button type="submit" className="btn">
                Subir documento
            </button>
        </form>
    </main>
    );
}

function SelectUnidadesAcademicas(){
    return (
        <select className="input ml-1 text-left w-1/2" name="unidad-academica" id="unidad-academica" defaultValue={0}>
            <option value='0' className="italic">Selecciona su unidad academica</option>
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

function SelectTipoDocumento(){
    return (
        <select className="input ml-1 text-left w-1/2" name="tipo-documento" id="tipo-documento" defaultValue={0}>
            <option value='0'className="italic">Selecciona el tipo de documento</option>
            <option value='1'>Tesis</option>
            <option value='2'>Proyecto de investigación</option>
            <option value='3'>Documento curricular (TT)</option>
        </select>

    );
}

function ListaDirectores({nombreInput,txtLabel, arregloDirectores, defaultHidden }:
     {nombreInput : string, txtLabel : string, arregloDirectores : UsuarioNombre[], defaultHidden : boolean}){
    let classNameDivSelect = clsx('contenedor-input ',
      {
        'forzar-oculto': defaultHidden == true
      });
        return (
        <div className={classNameDivSelect} id={"container_"+nombreInput} >
            <label className="text-right w-1/2" htmlFor={nombreInput}>{txtLabel}:</label>
            <select className="ml-1 text-left w-1/2 input" name={nombreInput} id={nombreInput}>
                    <option value="0" key={0} className="italic">Indique algún docente registrado como director</option>
                    {arregloDirectores.map( (director) => (
                        <option key={director.id} value={director.id} >{director.apellidos} {director.nombres}</option>
                    ))}
            </select>
        </div>  

    );
}