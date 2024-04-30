import { pool } from "../db.js";
//reotrna un arreglo de resultados (pero solo contiene uno)
export const getMetadatosDocumento = async (req, res) =>{
  const { idDoc } = req.body;
  const result = await pool.query("select * from metadatos_detallados_documento WHERE id = ? limit 1",
  [ idDoc ]);
  console.log(result[0]);
  res.json(result[0]);
};