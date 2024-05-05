import bcrypt from "bcrypt";
import { pool } from "../config/dbInstance.js";
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
    res.send({status: "OK", data: usersList});
  
  }).catch(error => {

    console.error(error);
    res.status(500).send({status: "ERROR", error: "Ocurrio un error inesperado"})
    
  });
}

export const registerUser = async (req, res) => {
  try {
    const { email, password, name, surname, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nombre: name,
      email: email,
      password: hashedPassword,
      apellido: surname,
      id_tipo_usuario: type
    });
    console.log("Usuario creado");
    res.send({status: "OK", data: newUser.id_usuario});
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(500).json({ status: "ERROR", error: "Server internal Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({include: [{
      model: UserType,
      as: 'tipo_usuario',
      attributes: ['id_catalogo', 'tipo_usuario']
    }], 
    where: {email}});

    if (!user) {
      return res.send({ status: "ERROR", error: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password.toString());

    if (!isPasswordCorrect) {
      return res.send({ status: "ERROR", error: "User not found" });
    }

    res.send({status: "OK", data: {
      "id": user.id_usuario,
      "nombre": user.nombre,
      "userType": user.tipo_usuario
    }})
  } catch (error) {
    console.error("Error al logear el usuario:", error);
    res.status(500).json({ error: "Server internal Error" });
  }
};
