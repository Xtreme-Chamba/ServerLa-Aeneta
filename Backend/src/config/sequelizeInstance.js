import { Sequelize } from "sequelize";
import { DB_DATABASE, DB_HOST, DB_PASS, DB_PORT, DB_USER } from "./config.js";

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASS,
    {
        host: DB_HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(() => {
    console.log("Sequelize established successfully");
}).catch( error => {
    console.error("Unable to connect to the database;: ", error);
});

export default sequelize;