import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 4000;

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "userneta";
export const DB_PASS = process.env.DB_PASS || "nomelas3";
export const DB_DATABASE = process.env.DB_DATABASE || "aeneta";
export const DB_PORT = process.env.DB_PORT || 3306;
