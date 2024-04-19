import bcrypt from "bcrypt";
import { pool } from "../db.js";

export const postUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user info
    const result = await pool.query(
      "INSERT INTO Users (email, password, username) VALUES (?, ?, ?)",
      [email, hashedPassword, username]
    );

    res.json(result[0].affectedRows);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Server internal Error" });
  }
};

export const logUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM Users WHERE email = ?", [
      email,
    ]);

    if (result[0].length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result[0][0];

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      username: user.username,
      email: user.email,
      user_id: user.user_id,
    });
  } catch (error) {
    console.error("Error al logear el usuario:", error);
    res.status(500).json({ error: "Server internal Error" });
  }
};
