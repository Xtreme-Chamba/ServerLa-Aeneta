import { pool } from "../dbProvider.js";

export const pong = async (req, res) => {
  const result = await pool.query("SELECT * FROM documento");
  res.json(result[0]);
};
