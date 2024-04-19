import { pool } from "../db.js";

export const getCustomers = async (req, res) => {
  const { name, email, needs, location, user_id } = req.body;
  const result = await pool.query("SELECT * FROM Customers WHERE user_id = ?", [
    user_id,
  ]);
  res.json(result[0]);
};

export const addCustomer = async (req, res) => {
  const { name, email, needs, location, user_id } = req.body;
  const result = await pool.query(
    "INSERT INTO Customers (name, email, needs, location, user_id) VALUES (?, ?, ?, ?, ?)",
    [name, email, needs, location, user_id]
  );
  res.json(result[0]);
};
