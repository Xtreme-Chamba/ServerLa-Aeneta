import { pool } from "../config/dbInstance.js";
//reotrna un arreglo de resultados (pero solo contiene uno)
export const getMetadatosDocumento = async (req, res) =>{
  const { idDoc } = req.body;
  const result = await pool.query("select * from metadatos_detallados_documento WHERE id = ? limit 1",
  [ idDoc ]);
  console.log(result[0]);
  res.json(result[0]);
};

export const getRevisionDocumento = async (req, res) => {
  const {idDoc} = req.body;
  const result = await pool.query("call obtenerRevisionYTitulo(?)", [ idDoc ]);
  //al venir de procemdiento almacenado, por como lo trae la libería, hay que acceder hasta [0][0][0]
  const rev2 = Boolean(result[0][0][0].estado_revision[0]);
  result[0][0][0].estado_revision = rev2;
  res.json(result[0][0][0]);
};
