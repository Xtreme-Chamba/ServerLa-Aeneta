import { json } from "express";
import { pool } from "../config/dbInstance.js";
import multer from "multer";

// const upload = multer({ dest: "uploads/" });
//reotrna un arreglo de resultados (pero solo contiene uno)
export const getMetadatosDocumento = async (req, res) => {
  const { idDoc } = req.body;
  const result = await pool.query(
    "select * from metadatos_detallados_documento WHERE id = ? limit 1",
    [idDoc]
  );
  const rev2 = Boolean(result[0][0].revisado[0]);
  result[0][0].revisado = rev2;
  //console.log(result[0][0]);
  res.json(result[0][0]);
};

export const getRevisionDocumento = async (req, res) => {
  const { idDoc } = req.body;
  const result = await pool.query("call obtenerRevisionYTitulo(?)", [idDoc]);
  //al venir de procemdiento almacenado, por como lo trae la libería, hay que acceder hasta [0][0][0]
  const rev2 = Boolean(result[0][0][0].estado_revision[0]);
  result[0][0][0].estado_revision = rev2;
  res.json(result[0][0][0]);
};

export const postAddRevisionDocumento = async (req, res) => {
  console.log(req.body);
  const { id_documento, estado_revision, notas_revision } = req.body;
  const result = await pool.query(
    "INSERT INTO revision_documento (id_documento, estado_revision, notas_revision) VALUES (?,?,?)",
    [id_documento, estado_revision, notas_revision]
  );
};

// export const subirDocumento = async (req, res) => {
//   upload.single("file");
//   console.log(req.body);
//   res.json(req.body.file);
// };

import path from "path";

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Añadimos la extensión original
  }
});

const upload = multer({ storage: storage });

// Function to handle document upload
export const subirDocumento = async (req, res) => {
  try {
    upload.single("file")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // Multer error occurred
        console.error("Multer Error:", err);
        return res.status(500).json({ error: "Multer error occurred" });
        
      }
      // Verifica si el archivo fue subido exitosamente
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ningún archivo" });
      }

      // File uploaded successfully, send response with file details
      const fileName = req.file.filename;
      console.log(fileName);
      res.json({ url: `/uploads/${fileName}` });
    });
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};

export const postDataDocumento = async (req, res) => {
  try {
    console.log(req.body);
    const { title, author, director, director2, directorExt, year,ua, type, keyW, abstract, url } = req.body;
    const result = await pool.query("call guardar_documento(?,?,?,?,?,?,?,1,?,?,?)",
      [title, keyW, abstract, Number(year), Number(type), Number(ua), url, Number(director), Number(director2), Number(directorExt)]);
    //el autor hardcoeado por falta de tiempo, pero se ocupa sesión para eso y aun no tenemos
    console.log(result[0]);
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to upload document data" });
  }
}