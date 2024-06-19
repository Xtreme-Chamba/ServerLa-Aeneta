import React from "react";
import { ToastContainer, toast} from 'react-toastify'
import { HiDocumentArrowUp } from "react-icons/hi2";

export default function Home() {

  const notify = () => toast("Error al subir el documento")

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 border-4 rounded-xl border-secundario mt-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-900 text-center text-texto">Subir Documento</h1>
        <p className="mt-2 text-gray-500 text-center mb-4 text-texto">
          Completa el siguiente formulario para subir tu documento.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4">
          <div className="flex items-center gap-4">
            <label>Título</label>
            <input placeholder="Título del documento" type="text" className="border" />
          </div>
          <div className="flex items-center gap-4">
            <label>Autor</label>
            <input placeholder="Nombre del autor" type="text" className="border" />
          </div>
          <div className="flex items-center gap-4">
            <label>Director</label>
            <input placeholder="Nombre del director" type="text" className="border"/>
            <label >Director 2</label>
            <input placeholder="Nombre del director invitado" type="text" className="border"/>
          </div>
          <div className="flex items-center gap-4">
            <label>Año</label>
            <input placeholder="Año de publicación" type="number" className="border"/>
          </div>
          <div className="flex items-center gap-4">
            <label>Unidad Académica</label>
            <input placeholder="Unidad académica a la que pertenece" 
            type="text" 
            className="border w-96"/>
          </div>

          <div className="flex items-center gap-4">
            <label>Tipo de Documento</label>
            <select className="border">
                <option value="thesis">Tesis</option>
                <option value="article">Artículo</option>
                <option value="book">Libro</option>
                <option value="report">Informe</option>
                <option value="other">Otro</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label>Palabras Clave</label>
            <input
              className="w-full border"
              placeholder="Ingresa las palabras clave separadas por comas"
            />
          </div>
          <div className="flex items-center gap-4">
            <label>Resumen</label>
            <textarea className="w-full border" 
            placeholder="Escribe un resumen del documento" 
            />
          </div>

          <div className="flex items-center gap-4">
              <label className="flex gap-2"> <HiDocumentArrowUp/> Archivo</label>
            <input type="file"/>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <button className="p-2 bg-primario rounded-lg font-semibold">Regresar</button>
          <button className="p-2 bg-primario rounded-lg font-semibold">Enviar</button>
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
}