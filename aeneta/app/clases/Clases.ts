//documento ligero (como para consultas)
export type DocumentoLigero = {
    id: number, 
    Titulo : string, 
    Palabras_clave : string, 
    anio: number, 
    tipo : "Tesis" | "Proyecto Investigación" | "Curricular (TT)" | "Propuesta",
    Nombres: string, 
    Apellidos: string, 
    revisado: boolean
};

//metadatos completos
export type DocumentoCompleto = {
    id: number, 
    Titulo : string, 
    Palabras_clave : string, 
    Resumen : string, 
    anio: number, 
    url: string, 
    tipo : "Tesis" | "Proyecto Investigación" | "Curricular (TT)" | "Propuesta", 
    unidad_academica : string, 
    Nombres: string, 
    Apellidos: string, 
    revisado: boolean
};

//obtener usuario (toda la información)
export type Usuario = {
    id: number,
    username : string,
    password : BinaryData, //reotrna un VARBINARY(200), así que uno similar debe de ser
    tipo : "alumno" | "egresado" | "docente" | "revisor", //con un JOIN se debería de obtener de la query el nombre del campo en vez de id_tipo
    especialidad : string | null,
    Nombres: string,
    apellidos: string
};

//obtener usuario (solo su id, nombre y apellidos)
export type UsuarioNombre = {
    id : number,
    Nombres : string,
    apellidos : string
};
//nombre, apellido y especialidad
export type UsuarioEspecialidad = {
    id : number,
    Nombres : string,
    apellidos : string,
    especialidad : string
};
//El objeto que será necesario para mandar / obtener una revisión de documento
export type Revision = {
    id_revision: number,
    id_documento : number,
    notas_revision : string,
    estado_revision : boolean,
    titulo : string
};

//definición futura para las referencias (no creo que llegemos a implementarlas)
export type ReferenciaBibliografica = {
    id_referencia : number,
    id_documento : number,
    formato : "APA" | "IEEE",
    referencia : string
};

//
export type FormularioRevision = {
    id_formulario : number,
    id_revision : number,
    titulo : boolean,
    resumen : boolean,
    objetivos : boolean,
    plateamiento : boolean,
    justificacion: boolean,
    resultados : boolean,
    metodologia : boolean,
    cronograma : boolean,
    dictamen : boolean,
    obervaciones : string
};