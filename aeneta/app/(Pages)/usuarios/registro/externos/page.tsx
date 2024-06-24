'use client'
import { UsuarioEspecialidad } from "@/app/clases/Clases";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page(){
    //lo normal son los internos
    const [directorExterno, setDirector] = useState<UsuarioEspecialidad>({
        id : 0, //se va asignar con el auto_increment
        nombres : '',
        apellidos: '',
        especialidad : ''
    });

    const router = useRouter(); // Hook de Next.js para la navegación

    //actualiza los valores conforme cambien en el form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setDirector({
            ...directorExterno,
            [e.target.name]: e.target.value,
        });
    };

    //fucion que hace la petición
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/users/directores/externos/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(directorExterno)
            });
            const data = await response.json();
            console.log(data); //para ver si fue very gud
            router.push("/subida_archivo/");
            
        } catch (error) {
            console.log(error);
        }

    };
    return (
    <main>
        <form method="POST" onSubmit={handleSubmit} className="w-fit min-w-min flex flex-col justify-center align-center m-auto mt-2">
            <div className="contenedor-input">
                <label htmlFor="nombres" className="text-right w-1/2">Nombre(s) del director:</label>
                <input className="input ml-1 text-left w-1/2" name="nombres" id="nombres" onChange={handleChange} type="text" placeholder="Escriba el Nombres aquí..." />
            </div>
           
            <div className="contenedor-input">
                <label htmlFor="apellidos" className="text-right w-1/2">Apellidos del director:</label>
                <input className="input ml-1 text-left w-1/2" name="apellidos" id="apellidos" onChange={handleChange} type="text" placeholder="Escriba los apellidos aquí" />
            </div>
            <div className="contenedor-input">
                <label htmlFor="especialidad" className="text-right w-1/2">Especialidad:</label>
                <input className="input ml-1 text-left w-1/2" name="especialidad" id="especialidad" onChange={handleChange} type="text" placeholder="Escriba la especialidad..." />
            </div>
            <button type="submit" className="btn" >
                Registrar director
            </button>
        </form>
    </main>
    );
}

