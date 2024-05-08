import { pool } from "../config/dbInstance.js";

export const getItems = async (req, res) => {
  const { username, email, user_id } = req.body;
  const result = await pool.query("SELECT * FROM Products WHERE user_id = ?", [
    user_id,
  ]);
  res.json(result[0]);
};

export const addItem = async (req, res) => {
  //agregar el user_id en el req del front
  const { name, quantity, quality, recived, expiration, user_id } = req.body;
  const result = await pool.query(
    "INSERT INTO Products (name, quantity, quality, recived, expiration, user_id) VALUES (?, ?, ?, ?, ?, ?)",
    [name, quantity, quality, recived, expiration, user_id]
  );
  res.json(result[0]);
};
