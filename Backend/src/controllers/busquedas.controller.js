import { pool } from "../db.js";

export const postBusquedaTituloSim = async (req, res) => {
  const { titulo } = req.body;
  const result = await pool.query("call busqueda_titulo_sencilla(?)", [
    titulo,
  ]);
  res.json(result[0][0]);
};
