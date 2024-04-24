import { pool } from "../db.js";

//le pide al cuerpo de la petición un campo titulo, que es el que se manda al call para obtener el resultado
export const postBusquedaTituloSimple = async (req, res) => {
  const { titulo, numResultados, pagina  } = req.body;
  const result = await pool.query("call busqueda_titulo_sencilla(?,?,?)", [
    titulo, numResultados, pagina 
  ]);
  res.json(result[0][0]);
};

//le pide al cuarpo de la petición un campo autor, que es con el que manda al call para obtener un resultado
export const postBusquedaAutorSimple = async (req, res) => {
    const { autor, numResultados, pagina } = req.body;
    const result = await pool.query("call busqueda_autor_sencilla(?,?,?)", [
      autor, numResultados, pagina 
    ]);
    res.json(result[0][0]);
  };
  
//le pide al body un año, y este hace el call para obtener el resultado de la busqueda
export const postBusquedaAnioPuntualSimple = async (req, res) => {
  const { anio, numResultados, pagina  } = req.body;
  const result = await pool.query("call busqueda_anio_puntual_sencilla(?,?,?)", [
    anio, numResultados, pagina 
  ]);
  res.json(result[0][0]);
};

//le pide al cuarpo de la petición los campos de año de inicio y fin, para hacer el 
//call y obtener un resultado de búsqueda
export const postBusquedaAnioRangoSimple = async (req, res) => {
  const { anio_inicio, anio_final, numResultados, pagina  } = req.body;
  const result = await pool.query("call busqueda_anio_rengo_sencilla(?,?,?,?)", [
    anio_inicio,anio_final, numResultados, pagina 
  ]);
  res.json(result[0][0]);
};