"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HiDocumentArrowUp } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  title: string;
  author: string;
  director: string;
  director2: string;
  year: string;
  ua: string;
  type: string;
  keyW: string;
  abstract: string;
  file: File | null;
}

export default function Home() {
  const notify = () => toast.error("Error al subir el documento");
  const [info, setInfo] = useState<FormData>({
    title: "",
    author: "",
    director: "",
    director2: "",
    year: "",
    ua: "",
    type: "thesis",
    keyW: "",
    abstract: "",
    file: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setInfo({ ...info, file: file });
  };

  const enviarDoc = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", info.title);
    formData.append("author", info.author);
    formData.append("director", info.director);
    formData.append("director2", info.director2);
    formData.append("year", info.year);
    formData.append("ua", info.ua);
    formData.append("type", info.type);
    formData.append("keyW", info.keyW);
    formData.append("abstract", info.abstract);
    if (info.file) {
      formData.append("file", info.file);
    }

    try {
      const response = await fetch("http://localhost:4000/documentos/subir", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Documento subido");
        toast.success("Documento subido exitosamente");
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
            <input
              placeholder="Nombre del director"
              type="text"
              className="border"
              name="director"
              value={info.director}
              onChange={handleChange}
            />
            <label>Director 2</label>
            <input
              placeholder="Nombre del director invitado"
              type="text"
              className="border"
              name="director2"
              value={info.director2}
              onChange={handleChange}
            />
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
            <label>Unidad Académica</label>
            <input
              placeholder="Unidad académica a la que pertenece"
              type="text"
              className="border w-96"
              name="ua"
              value={info.ua}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-4">
            <label>Tipo de Documento</label>
            <select
              className="border"
              name="type"
              value={info.type}
              onChange={handleChange}
            >
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
