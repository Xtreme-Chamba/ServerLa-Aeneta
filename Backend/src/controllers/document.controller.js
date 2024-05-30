import { pool } from "../db.js";

export const getDocumentInfo = async (req, res) => {
    const result = await pool.query("SELECT * FROM metadatos_detallados_documento;") 
    res.json(result[0]);
};

export const getDocumentById = async (req,res) => {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM metadatos_detallados_documento WHERE id = ?;",
      [id]
    );
    res.json(result[0]);

};


export const updateDocument = async (req,res) => {
  // data for the modified document const { name, quantity, quality, recived, expiration, user_id } = req.body;
  const result = await pool.query(
    "SELECT * FROM metadatos_detallados_documento WHERE id = ?;",
    [id]
  );
  res.json(result[0]);
}
