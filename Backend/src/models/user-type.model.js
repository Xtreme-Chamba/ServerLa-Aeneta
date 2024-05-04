import { DataTypes } from "sequelize";
import sequelize from "./sequelize/connection.js";

const UserType = sequelize.define('userType', {
    id_catalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo_usuario: DataTypes.STRING
}, {
    tableName: "catalogo_tipos_usuario"
});

export default UserType;