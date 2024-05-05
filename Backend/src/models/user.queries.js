import { pool } from "../config/dbInstance.js"

export const getAllUsers = async () => {
    const [data, dataTypes] = await pool.query("SELECT * FROM usuario");
    return data
}

export const createUser = async (name, surname, email, password, typeUser) => {
    const result = await pool.query(
        "INSERT INTO usuario (email, password, id_tipo_usuario, nombre, apellido) VALUES (?, ?, ?, ?, ?)",
        [email, password, typeUser, name, surname]
    );
    return result[0].affectedRows;
}