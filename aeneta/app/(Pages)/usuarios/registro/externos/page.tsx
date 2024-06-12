'use client'
import { UsuarioEspecialidad } from "@/app/clases/Clases";
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page(){
    //lo normal son los internos
    const [directorExterno, setDirector] = useState<UsuarioEspecialidad>({
        id : 0, //se va asignar con el auto_increement
        Nombres : '',
        apellidos: '',
        especialidad : ''
    });

    useEffect(() => {
      try{
        const fetchDirectores = async () => {
            //propuesta de ruta para acceder a la lista de directores, es un GET
            const response = await fetch("http://localhost:4000/users/directores/externos/registro", 
            { method : "POST",headers: {
                "Content-Type": "application/json",
              },  body : JSON.stringify(directorExterno)} );
            const data = await response.json();
        }
        fetchDirectores(); //se obtienen los docentes disponibles, para ser directores
      }catch(error){
        console.log(error)
      }
    }, [])

    return (
    <main>
        <div className="bloque-titulo">
            <h1 className='fuente-titulo'>Registrar nuevo director EXTERNO</h1>
        </div>
        <form method="POST" className="w-fit min-w-min flex flex-col justify-center align-center m-auto mt-2">
            <div className="contenedor-input">
                <label htmlFor="Nombres" className="text-right w-1/2">Nombre(s) del director:</label>
                <input className="input ml-1 text-left w-1/2" name="Nombres" id="Nombres" type="text" placeholder="Escriba el Nombres aquí..." />
            </div>
           
            <div className="contenedor-input">
                <label htmlFor="apellido" className="text-right w-1/2">Apellidos del director:</label>
                <input className="input ml-1 text-left w-1/2" name="apellido" id="apellido" type="text" placeholder="Escriba los apellidos aquí" />
            </div>
            <div className="contenedor-input">
                <label htmlFor="especialidad" className="text-right w-1/2">Especialidad:</label>
                <input className="input ml-1 text-left w-1/2" name="especialidad" id="especialidad" type="text" placeholder="Escriba la especialidad..." />
            </div>
            <button type="submit" className="btn">
                Registrar director
            </button>
        </form>
    </main>
    );
}

