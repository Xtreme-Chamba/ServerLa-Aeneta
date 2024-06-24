import express from "express";
import path from "path"
import { fileURLToPath } from 'url';
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import rutasBusqueda from "./routes/busquedas.routes.js";
import rutasDocumentos from "./routes/documentos.routes.js";
import userRoutes from "./routes/user.routes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoutes);
//user routes
app.use(authRoutes);
app.use("/users", userRoutes);

app.use(inventoryRoutes);
app.use("/busqueda", rutasBusqueda);
app.use("/documentos",rutasDocumentos);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const archivosPath = path.resolve(__dirname, '../uploads');
app.use('/uploads', express.static(archivosPath));
export default app;