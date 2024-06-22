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
        "INSERT INTO usuario (email, password, id_tipo_usuario, nombres, apellido) VALUES (?, ?, ?, ?, ?)",
        [email, password, typeUser, name, surname]
    );
    return result[0].affectedRows;
}

export const getAllNombresDocentes = async (req, res) =>{
    const result = await pool.query("select id_usuario as id, nombres, apellidos from usuario  WHERE id_tipo_usuario = ?",
    [ TIPO_USUARIO_DOCENTE ]);
    res.json(result[0]);
  };

  export const getAllNombresDirectoresExternos = async (req, res) =>{
    const result = await pool.query("select id_director_externo as id, nombres, apellidos from director_externo");
    res.json(result[0]);
  };

  export const postAddNewDirectorExterno = async (req, res) => {
    console.log(req.body)
    const {Nombres, apellidos, especialidad } = req.body;
    const result = await pool.query("INSERT INTO director_externo (nombres, apellidos, especialidad) VALUES (?,?,?)",
      [ Nombres, apellidos, especialidad ] );
    //al venir de procemdiento almacenado, por como lo trae la libería, hay que acceder hasta [0][0][0]
    console.log(result[0].affectedRows);
    res.json(result[0].affectedRows);
  };