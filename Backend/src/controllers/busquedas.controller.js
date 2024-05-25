import { pool } from "../config/dbInstance.js";

//le pide al cuerpo de la petición un campo titulo, que es el que se manda al call para obtener el resultado
export const postBusquedaTituloSimple = async (req, res) => {
  if(req.body == null || req.body == undefined || req.body == {}){
    res.json({"message":"cuerpo vacio o no leo nada de entrada"});
    return;
  }
  const { terminoBusqueda, numResultados, salto  } = req.body;
  const result = await pool.query("call busqueda_titulo_sencilla(?,?,?)",
  [
    terminoBusqueda, numResultados, salto 
  ]);
  res.json(result[0][0]);
};

export const postBusquedaPaginasTituloSimple = async (req, res) => {
  const {termino} = req.body;
  const result = await pool.query("call busqueda_titulo_pagina_sencilla(?)",
  [termino]);
  console.log(result[0][0][0]);
  res.json(result[0][0][0]);
};

//le pide al cuarpo de la petición un campo autor, que es con el que manda al call para obtener un resultado
export const postBusquedaAutorSimple = async (req, res) => {
  if(req.body == null || req.body == undefined || req.body == {}){
    console.log("Toy vacio")
    res.json({"message":"cuerpo vacio o no leo nada de entrada"});
    return;
  }
  const { terminoBusqueda, numResultados, salto } = req.body;
  const result = await pool.query("call busqueda_autor_sencilla(?,?,?)", [
    terminoBusqueda, numResultados, salto 
  ]);
  res.json(result[0][0]);
  };

export const postBusquedaPaginasAutorSimple = async (req, res) => {
  const {termino} = req.body;
  const result = await pool.query("call busqueda_autor_pagina_sencilla(?)",
    [termino]);
  console.log(result[0][0][0]);
  res.json(result[0][0][0]);
};
  

//le pide al cuerpo de la petición un campo titulo, que es el que se manda al call para obtener el resultado
export const postBusquedaPalabrasClaveSimple = async (req, res) => {
  if(req.body == null || req.body == undefined || req.body == {}){
    res.json({"message":"cuerpo vacio o no leo nada de entrada"});
    return;
  }
  const { terminoBusqueda, numResultados, salto  } = req.body;
  const result = await pool.query("call busqueda_palabras_clave_sencilla(?,?,?)",
  [
    terminoBusqueda, numResultados, salto 
  ]);
  res.json(result[0][0]);
};

export const postBusquedaPaginasPalabrasClaveSimple = async (req, res) => {
  const {termino} = req.body;
  const result = await pool.query("call busqueda_palabras_clave_pagina_sencilla(?)",
  [termino]);
  console.log(result[0][0][0]);
  res.json(result[0][0][0]);
};


//le pide al body un año, y este hace el call para obtener el resultado de la busqueda
export const postBusquedaAnioPuntualSimple = async (req, res) => {
  const { terminoBusqueda, numResultados, salto  } = req.body;
  if(!Number.isInteger(Number.parseInt(terminoBusqueda)) || Number.isNaN(terminoBusqueda)){ //si no es numero, hay que salir
    console.log("Entrada invalida de datos");
    return;
  }
  const result = await pool.query("call busqueda_anio_puntual_sencilla(?,?,?)", [
    terminoBusqueda, numResultados, salto 
  ]);
  res.json(result[0][0]);
};

export const postBusquedaPaginasAnioPuntualSimple = async (req, res) => {
  const {termino} = req.body;
  if(!Number.isInteger(Number.parseInt(terminoBusqueda)) || Number.isNaN(terminoBusqueda)){ //si no es numero, hay que salir
    return;
  }
  const result = await pool.query("call busqueda_anio_puntual_pagina_sencilla(?)",
  [termino]);
  console.log(result[0][0][0]);
  res.json(result[0][0][0]);
};


//le pide al cuarpo de la petición los campos de año de inicio y fin, para hacer el 
//call y obtener un resultado de búsqueda
export const postBusquedaAnioRangoSimple = async (req, res) => {
  const { anio_inicio, anio_final, numResultados, salto  } = req.body;
  const result = await pool.query("call busqueda_anio_rango_sencilla(?,?,?,?)", [
    anio_inicio,anio_final, numResultados, salto 
  ]);
  res.json(result[0][0]);
};

export const postBusquedaNoRevisado = async (req, res) => {
  if(req.body == null || req.body == undefined || req.body == {}){
    console.log("Toy vacio")
    res.json({"message":"cuerpo vacio o no leo nada de entrada"});
    return;
  }
  const {  numResultados, salto } = req.body;
  const result = await pool.query("call busqueda_no_revisado(?,?)", [
    numResultados, salto ]);
  res.json(result[0][0]);
  };

export const getBusquedaPaginasNoRevisado = async (req, res) => {
  const result = await pool.query("call busqueda_no_revisado_pagina()" );
  console.log(result[0][0][0]);
  res.json(result[0][0][0]);
};
  