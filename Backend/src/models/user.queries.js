import { pool } from "../config/dbInstance.js"

//el valor del tipo docente en el catalogo
const TIPO_USUARIO_ALUMNO = 1;
const TIPO_USUARIO_EGRESADO = 2;
const TIPO_USUARIO_DOCENTE = 3;
const TIPO_USUARIO_REVISOR = 4;

export const getAllUsers = async () => {
    const [data, dataTypes] = await pool.query("SELECT * FROM usuario");
    return data;
}

export const createUser = async (name, surname, email, password, typeUser) => {
    const result = await pool.query(
        "INSERT INTO usuario (email, password, id_tipo_usuario, nombre, apellido) VALUES (?, ?, ?, ?, ?)",
        [email, password, typeUser, name, surname]
    );
    return result[0].affectedRows;
}

export const getAllNombresDocentes = async (req, res) =>{
    const result = await pool.query("select id_usuario, Nombres, apellidos from usuario  WHERE id_tipo_usuario = ?",
    [ TIPO_USUARIO_DOCENTE ]);
    res.json(result[0]);
  };

  export const getAllNombresDirectoresExternos = async (req, res) =>{
    const result = await pool.query("select id_director_externo, nombres, apellidos from director_externo");
    res.json(result[0]);
  };