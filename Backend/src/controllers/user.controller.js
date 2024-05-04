import bcrypt from "bcrypt";
import { pool } from "../dbProvider.js";
import { getAllUsers, createUser } from "../models/user.queries.js"
import User from "../models/user.model.js"
import UserType from "../models/user-type.model.js";

export const getUsers = async (req, res) => {
  User.findAll({
    include: [{
      model: UserType,
      as: 'tipo_usuario',
      attributes: ['id_catalogo', 'tipo_usuario']
    }],
    attributes: {
      exclude: ['password', 'id_tipo_usuario']
    }
  }).then( usersList => {
    
    console.log(usersList)
    res.send({status: "OK", data: usersList})
  
  }).catch(error => {

    console.error(error);
    res.status(500).send({status: "ERROR", error: "Ocurrio un error inesperado"})
    
  });
}

export const registerUser = async (req, res) => {
  const { email, password, name, surname, type } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  createUser(name, surname, email, hashedPassword, type).then( result => {
    res.json({status: "OK",  result});
  }).catch( error => {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ status: "ERROR", error: "Server internal Error" });
  });
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
