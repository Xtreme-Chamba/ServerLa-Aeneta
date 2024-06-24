"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import "react-toastify/dist/ReactToastify.css";
import { UsuarioNombre } from "../clases/Clases";

interface FormData {
  title: string;
  author: string;
  director: number;
  director2: number;
  directorExt: number;
  year: string;
  ua: number;
  type: number;
  keyW: string;
  abstract: string;
  url: string;
}

interface Archivo{
  file : File | null;
}

export default function Home() {
  const notify = () => toast.error("Error al subir el documento");
  const [info, setInfo] = useState<FormData>({
    title: "",
    author: "",
    director: 0,
    director2: 0,
    directorExt: 0,
    year: "",
    ua: 0,
    type: 0,
    keyW: "",
    abstract: "",
    url: "",
  });

  const router = useRouter();

  const [archivo, setArchivo] = useState<Archivo>({
    file : null
  });

  //lo normal son los internos
  const [listaDirectores, setListaDirectores] = useState<UsuarioNombre[]>([]);
  //ya luego vemos lo de los directores externos
  const [listaDirectoresExternos, setListaDirectoresExt] = useState<UsuarioNombre[]>([]);

  useEffect(() => {
    try{
      const fetchDirectores = async () => {
          //propuesta de ruta para acceder a la lista de directores, es un GET
          const response = await fetch("http://localhost:4000/users/directores/internos", 
          { method : "GET"} );
          const data = await response.json();
          console.log(data);
          setListaDirectores(data);
      }
      const fetchDirectoresExternos = async () => {
          //propuesta de ruta para acceder a la lista de directores, es un GET
          const response = await fetch("http://localhost:4000/users/directores/externos", 
          { method : "GET"} );
          const data = await response.json();
          console.log(data);
          setListaDirectoresExt(data);
      }
      fetchDirectores(); //se obtienen los docentes disponibles, para ser directores
      fetchDirectoresExternos();
    }catch(error){
      console.log(error)
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setArchivo({ ...info, file: file });
  };

  const enviarDoc = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //lo que va a la base de datos
    /*
    const formData = new FormData();
    formData.append("title", info.title);
    formData.append("author", info.author);
    formData.append("director", String(info.director));
    formData.append("director2", String(info.director2));
    formData.append("directorExt", String(info.directorExt));
    formData.append("year", info.year);
    formData.append("ua", String(info.ua));
    formData.append("type", String(info.type));
    formData.append("keyW", info.keyW);
    formData.append("abstract", info.abstract); */
    //lo que va para subir el documento al backend
    const fileData = new FormData();
    if (archivo.file) {
      fileData.append("file", archivo.file);
    }
    console.log(archivo.file);
    try {
      const response = await fetch("http://localhost:4000/documentos/subir/archivo", {
        method: "POST",
        body: fileData
      });
      if (response.ok) {
        console.log("Documento subido");
        //obtenemos el nombre de como se guardó el documento, para terminar la petición de los metadatos
        const data = await response.json();
        console.log(data.url);
        setInfo({ ...info, url: data.url });
        //a subir los datos del documento
        const responseData = await fetch("http://localhost:4000/documentos/subir/metadatos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info)
        });
        if(responseData.ok){
          toast.success("Documento subido exitosamente");
          router.push("/");
        }
        
      } else {
        console.log("Error al subir el documento");
        notify();
      }
    } catch (error) {
      console.error("Error:", error);
      notify();
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 border-4 rounded-xl border-secondary mt-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Subir Documento
        </h1>
        <p className="mt-2 text-gray-500 text-center mb-4">
          Completa el siguiente formulario para subir tu documento.
        </p>
      </div>
      <form className="space-y-6" onSubmit={enviarDoc}>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4">
          <div className="flex items-center gap-4">
            <label>Título</label>
            <input
              placeholder="Título del documento"
              type="text"
              className="border"
              name="title"
              value={info.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label>Autor</label>
            <input
              placeholder="Nombre del autor"
              type="text"
              className="border"
              name="author"
              value={info.author}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label>Director</label>
            <select className="ml-1 text-left w-1/2 input" name="director" id="director" onChange={handleChange}>
              <option value="0" key={0} className="italic">Indique algún docente registrado como director</option>
              {listaDirectores.map( (director) => (
              <option key={director.id} value={director.id} >{director.apellidos} {director.nombres}</option>
              ))}
            </select>
            </div>
          <div className="flex items-center gap-4">
            <label>Director Externo</label>
            <select className="ml-1 text-left w-1/2 input" name="directorExt" id="directorExt" onChange={handleChange}>
              <option value="0" key={0} className="italic">Indique algún docente registrado como director</option>
                
              {listaDirectoresExternos.map( (director) => (
              <option key={director.id} value={director.id} >{director.apellidos} {director.nombres}</option>
              ))}
            </select>
            <label>Director 2</label>
            <select className="ml-1 text-left w-1/2 input" name="director2" id="director2" onChange={handleChange}>
              <option value="0" key={0} className="italic">Indique algún docente registrado como director</option>
              {listaDirectores.map( (director) => (
              <option key={director.id} value={director.id} >{director.apellidos} {director.nombres}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label>Año</label>
            <input
              placeholder="Año de publicación"
              type="number"
              className="border"
              name="year"
              value={info.year}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="ua">Unidad Académica</label>
            <select className="input ml-1 text-left" name="ua" id="ua" onChange={handleChange} >
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
          </div>

          <div className="flex items-center gap-4">
            <label>Tipo de Documento</label>
            <select className="input ml-1 text-left" name="type" id="type" onChange={handleChange}>
              <option value='0'className="italic">Selecciona el tipo de documento</option>
              <option value='1'>Tesis</option>
              <option value='2'>Proyecto de investigación</option>
              <option value='3'>Documento curricular (TT)</option>
          </select>
          </div>

          <div className="flex items-center gap-4">
            <label>Palabras Clave</label>
            <input
              className="w-full border"
              placeholder="Ingresa las palabras clave separadas por comas"
              name="keyW"
              value={info.keyW}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label>Resumen</label>
            <textarea
              className="w-full border"
              placeholder="Escribe un resumen del documento"
              name="abstract"
              value={info.abstract}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex gap-2">
              <HiDocumentArrowUp /> Archivo
            </label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <button className="p-2 bg-primary rounded-lg font-semibold">
            Regresar
          </button>
          <button
            type="submit"
            className="p-2 bg-primary rounded-lg font-semibold"
          >
            Enviar
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
  
}


