import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || "bhdrlvvyh7fsns4hcjae-mysql.services.clever-cloud.com";
export const DB_USER = process.env.DB_USER || "uphk7tztoaho2c6l";
export const DB_PASS = process.env.DB_PASS || "TNTKfGBKhvbfeDJCHs66";
export const DB_DATABASE = process.env.DB_DATABASE || "bhdrlvvyh7fsns4hcjae";
export const DB_PORT = process.env.DB_PORT || 3306;
