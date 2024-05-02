import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/authRoutes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import rutasBusqueda from "./routes/busquedas.routes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(indexRoutes);
//user routes
app.use(authRoutes);
app.use("/users", userRoutes)

app.use(inventoryRoutes);
app.use(rutasBusqueda);

export default app;

/* {
    "email": "alexis@gmail.com",
    "password": "contra123",
    "username": "addactech"
 }

 {
    "email": "alexis@gmail.com",
    "password": "contra123"
 } 
 */
