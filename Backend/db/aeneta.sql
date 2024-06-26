CREATE DATABASE  IF NOT EXISTS `aeneta` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aeneta`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: aeneta
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores_documento`
--

DROP TABLE IF EXISTS `autores_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `autores_documento` (
  `idAutor_Documento` int NOT NULL AUTO_INCREMENT,
  `id_autor` int NOT NULL,
  `id_documento` int NOT NULL,
  PRIMARY KEY (`idAutor_Documento`),
  KEY `fk_documento_idx` (`id_documento`),
  KEY `fk_usuario_autor_idx` (`id_autor`),
  CONSTRAINT `fk_documento_autor` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_usuario_autor` FOREIGN KEY (`id_autor`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores_documento`
--

LOCK TABLES `autores_documento` WRITE;
/*!40000 ALTER TABLE `autores_documento` DISABLE KEYS */;
INSERT INTO `autores_documento` VALUES (1,1,1),(2,3,2),(3,1,3);
/*!40000 ALTER TABLE `autores_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_tipos_documento`
--

DROP TABLE IF EXISTS `catalogo_tipos_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `catalogo_tipos_documento` (
  `id_catalogo` tinyint NOT NULL AUTO_INCREMENT,
  `tipo_documento` varchar(25) NOT NULL,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_tipos_documento`
--

LOCK TABLES `catalogo_tipos_documento` WRITE;
/*!40000 ALTER TABLE `catalogo_tipos_documento` DISABLE KEYS */;
INSERT INTO `catalogo_tipos_documento` VALUES (1,'Tesis'),(2,'Proyecto Investigación'),(3,'Curricular (TT)'),(4,'Propuesta');
/*!40000 ALTER TABLE `catalogo_tipos_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_tipos_usuario`
--

DROP TABLE IF EXISTS `catalogo_tipos_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `catalogo_tipos_usuario` (
  `id_catalogo` tinyint NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(30) NOT NULL,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_tipos_usuario`
--

LOCK TABLES `catalogo_tipos_usuario` WRITE;
/*!40000 ALTER TABLE `catalogo_tipos_usuario` DISABLE KEYS */;
INSERT INTO `catalogo_tipos_usuario` VALUES (1,'Alumno'),(2,'Egresado'),(3,'Docente'),(4,'Revisor'),(5,'Administrador');
/*!40000 ALTER TABLE `catalogo_tipos_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogo_unidades_academicas`
--

DROP TABLE IF EXISTS `catalogo_unidades_academicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `catalogo_unidades_academicas` (
  `id_catalogo` tinyint NOT NULL AUTO_INCREMENT,
  `unidad_academica` varchar(40) NOT NULL,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogo_unidades_academicas`
--

LOCK TABLES `catalogo_unidades_academicas` WRITE;
/*!40000 ALTER TABLE `catalogo_unidades_academicas` DISABLE KEYS */;
INSERT INTO `catalogo_unidades_academicas` VALUES (1,'ENBA'),(2,'ENCB'),(3,'ENMyH'),(4,'ESCA Unidad Santo Tomas'),(5,'ESCA Unidad Tepepan'),(6,'ESCOM'),(7,'ESE'),(8,'ESEO'),(9,'ESFM'),(10,'ESIME Unidad Zacatenco'),(11,'ESIME Unidad Azcapotzalco'),(12,'ESIME Unidad Culhuacan'),(13,'ESIME UnidadTicoman'),(14,'ESIQUIE'),(15,'ESIT'),(16,'ESIA Unidad Tecamachalco'),(17,'ESIA Unidad Ticoman'),(18,'ESIA Unidad Zacatenco'),(19,'ESM'),(20,'EST'),(21,'UPIIC Campus Coahuila'),(22,'UPIBI'),(23,'UPIIG Campus Guanajuato'),(24,'UPIIZ Campus Zacateas'),(25,'UPIIH Campus Hidalgo'),(26,'UPIIP Campus Palenque'),(27,'UPIIT Campus Tlaxcala'),(28,'UPIICSA'),(29,'UPIITA'),(30,'UPIEM'),(31,'CISC Unidad Santo Tomás'),(32,'CISC Unidad Milpa Alta');
/*!40000 ALTER TABLE `catalogo_unidades_academicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleproyecto`
--

DROP TABLE IF EXISTS `detalleproyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `detalleproyecto` (
  `idDetalleProyecto` int NOT NULL AUTO_INCREMENT,
  `id_documento` int NOT NULL,
  PRIMARY KEY (`idDetalleProyecto`),
  KEY `fk_proyecto_documento_idx` (`id_documento`),
  CONSTRAINT `fk_proyecto_documento` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleproyecto`
--

LOCK TABLES `detalleproyecto` WRITE;
/*!40000 ALTER TABLE `detalleproyecto` DISABLE KEYS */;
INSERT INTO `detalleproyecto` VALUES (1,2);
/*!40000 ALTER TABLE `detalleproyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalletesis`
--

DROP TABLE IF EXISTS `detalletesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `detalletesis` (
  `idDetalleTesis` int NOT NULL AUTO_INCREMENT,
  `idDocumento` int NOT NULL,
  PRIMARY KEY (`idDetalleTesis`),
  KEY `fk_tesis_documento_idx` (`idDocumento`),
  CONSTRAINT `fk_tesis_documento` FOREIGN KEY (`idDocumento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalletesis`
--

LOCK TABLES `detalletesis` WRITE;
/*!40000 ALTER TABLE `detalletesis` DISABLE KEYS */;
INSERT INTO `detalletesis` VALUES (1,1);
/*!40000 ALTER TABLE `detalletesis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallett`
--

DROP TABLE IF EXISTS `detallett`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `detallett` (
  `idDetalleTT` int NOT NULL AUTO_INCREMENT,
  `id_documento` int NOT NULL,
  `mes` enum('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre') NOT NULL,
  `registro_TT` tinyint DEFAULT NULL,
  PRIMARY KEY (`idDetalleTT`),
  KEY `fk_TT_documento_idx` (`id_documento`),
  CONSTRAINT `fk_TT_documento` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallett`
--

LOCK TABLES `detallett` WRITE;
/*!40000 ALTER TABLE `detallett` DISABLE KEYS */;
INSERT INTO `detallett` VALUES (1,3,'abril',0);
/*!40000 ALTER TABLE `detallett` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente_sinodal`
--

DROP TABLE IF EXISTS `docente_sinodal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `docente_sinodal` (
  `idDocente_Sinodal` int NOT NULL AUTO_INCREMENT,
  `id_sinodal` int NOT NULL,
  `id_documento` int NOT NULL,
  `aceptado` bit(1) DEFAULT NULL,
  `comentarios` text,
  PRIMARY KEY (`idDocente_Sinodal`),
  KEY `fk_documento_idx` (`id_documento`),
  KEY `fk_usuario_sinodal_idx` (`id_sinodal`),
  CONSTRAINT `fk_documento_sinodal` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_usuario_sinodal` FOREIGN KEY (`id_sinodal`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente_sinodal`
--

LOCK TABLES `docente_sinodal` WRITE;
/*!40000 ALTER TABLE `docente_sinodal` DISABLE KEYS */;
/*!40000 ALTER TABLE `docente_sinodal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docentes_directores`
--

DROP TABLE IF EXISTS `docentes_directores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `docentes_directores` (
  `idDocentes_Directores` int NOT NULL AUTO_INCREMENT,
  `id_director` int NOT NULL,
  `id_documento` int NOT NULL,
  PRIMARY KEY (`idDocentes_Directores`),
  KEY `fk_documento_idx` (`id_documento`),
  KEY `fk_usuario_director_idx` (`id_director`),
  CONSTRAINT `fk_documento_director` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_usuario_director` FOREIGN KEY (`id_director`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docentes_directores`
--

LOCK TABLES `docentes_directores` WRITE;
/*!40000 ALTER TABLE `docentes_directores` DISABLE KEYS */;
/*!40000 ALTER TABLE `docentes_directores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documento`
--

DROP TABLE IF EXISTS `documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `documento` (
  `idDocumento` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(45) NOT NULL,
  `Palabras_clave` varchar(45) NOT NULL,
  `Resumen` text NOT NULL,
  `año` year NOT NULL,
  `id_tipo_documento` tinyint NOT NULL,
  `id_unidad_academica` tinyint NOT NULL,
  `revisado` bit(1) NOT NULL DEFAULT b'0',
  `url_archivo` text,
  PRIMARY KEY (`idDocumento`),
  KEY `fk_documento_tipo_documento_idx` (`id_tipo_documento`),
  KEY `fk_documento_unidad_academica_idx` (`id_unidad_academica`),
  CONSTRAINT `fk_documento_tipo_documento` FOREIGN KEY (`id_tipo_documento`) REFERENCES `catalogo_tipos_documento` (`id_catalogo`),
  CONSTRAINT `fk_documento_unidad_academica` FOREIGN KEY (`id_unidad_academica`) REFERENCES `catalogo_unidades_academicas` (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documento`
--

LOCK TABLES `documento` WRITE;
/*!40000 ALTER TABLE `documento` DISABLE KEYS */;
INSERT INTO `documento` VALUES (1,'Tesis prueba','prueba tesis unitaria','una prueba de que este procedimiento almacenado funcione',2024,1,6,_binary '','/'),(2,'Prueba dos','Prueba proyecto','Esperemos que funcione',2024,2,10,_binary '','/waos/'),(3,'Prueba tres','Prueba TT IA','De lo ultimo',2024,3,20,_binary '\0','/waos/');
/*!40000 ALTER TABLE `documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulario_revision_propuesta`
--

DROP TABLE IF EXISTS `formulario_revision_propuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `formulario_revision_propuesta` (
  `id_formulario` int NOT NULL AUTO_INCREMENT,
  `id_revision` int NOT NULL,
  `objetivos` bit(1) DEFAULT NULL,
  `claridad` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id_formulario`),
  KEY `fk_formulario_revision_idx` (`id_revision`),
  CONSTRAINT `fk_formulario_revision` FOREIGN KEY (`id_revision`) REFERENCES `docente_sinodal` (`idDocente_Sinodal`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulario_revision_propuesta`
--

LOCK TABLES `formulario_revision_propuesta` WRITE;
/*!40000 ALTER TABLE `formulario_revision_propuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `formulario_revision_propuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `metadatos_cortados_documento`
--

DROP TABLE IF EXISTS `metadatos_cortados_documento`;
/*!50001 DROP VIEW IF EXISTS `metadatos_cortados_documento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `metadatos_cortados_documento` AS SELECT 
 1 AS `id`,
 1 AS `Titulo`,
 1 AS `Palabras_clave`,
 1 AS `anio`,
 1 AS `tipo`,
 1 AS `Nombres`,
 1 AS `Apellidos`,
 1 AS `revisado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `metadatos_detallados_documento`
--

DROP TABLE IF EXISTS `metadatos_detallados_documento`;
/*!50001 DROP VIEW IF EXISTS `metadatos_detallados_documento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `metadatos_detallados_documento` AS SELECT 
 1 AS `id`,
 1 AS `Titulo`,
 1 AS `Palabras_clave`,
 1 AS `Resumen`,
 1 AS `anio`,
 1 AS `url`,
 1 AS `tipo`,
 1 AS `unidad_academica`,
 1 AS `Nombres`,
 1 AS `Apellidos`,
 1 AS `revisado`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `referenciabibliografica`
--

DROP TABLE IF EXISTS `referenciabibliografica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `referenciabibliografica` (
  `idreferenciaBibliografica` int NOT NULL AUTO_INCREMENT,
  `id_documento` int NOT NULL,
  `formato` enum('APA','IEEE') NOT NULL,
  `referencia` text NOT NULL,
  PRIMARY KEY (`idreferenciaBibliografica`),
  KEY `fk_referencia_documento_idx` (`id_documento`),
  CONSTRAINT `fk_referencia_documento` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referenciabibliografica`
--

LOCK TABLES `referenciabibliografica` WRITE;
/*!40000 ALTER TABLE `referenciabibliografica` DISABLE KEYS */;
/*!40000 ALTER TABLE `referenciabibliografica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revision_documento`
--

DROP TABLE IF EXISTS `revision_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `revision_documento` (
  `id_revision` int NOT NULL AUTO_INCREMENT,
  `id_documento` int NOT NULL,
  `notas_revision` text,
  `estado_revision` bit(1) NOT NULL,
  PRIMARY KEY (`id_revision`),
  KEY `fk_revision_documento_idx` (`id_documento`),
  CONSTRAINT `fk_revision_documento` FOREIGN KEY (`id_documento`) REFERENCES `documento` (`idDocumento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revision_documento`
--

LOCK TABLES `revision_documento` WRITE;
/*!40000 ALTER TABLE `revision_documento` DISABLE KEYS */;
INSERT INTO `revision_documento` VALUES (1,1,'Perfecto',_binary ''),(2,2,'Esta horrible',_binary '\0');
/*!40000 ALTER TABLE `revision_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varbinary(255) NOT NULL,
  `id_tipo_usuario` tinyint NOT NULL,
  `especialidad` varchar(45) DEFAULT NULL,
  `Nombres` text NOT NULL,
  `Apellidos` text NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `fk_usuario_a_tipo_usaurio_idx` (`id_tipo_usuario`),
  CONSTRAINT `fk_usuario_a_tipo_usaurio` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `catalogo_tipos_usuario` (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'ajarilloh1800@alumno.ipn.mx',_binary 'jdvbdsuoavbs',1,NULL,'Armando Damián','Jarillo Hernández'),(2,'remabarga@gmail.com',_binary '81dc9bdb52d04dc20036dbd8313ed055',3,'Ingenieria de software','Reina Elia','Melaba Abarca'),(3,'hola@gmail.com',_binary '58db1983f13a952599ecf41c3543473599ef395b3463be1ebf0f4a23b0070b5f',2,'','Erick Saul','Gutierrez Lopes');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'aeneta'
--
/*!50003 DROP PROCEDURE IF EXISTS `busqueda_anio_puntual_sencilla` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `busqueda_anio_puntual_sencilla`( anio_busqueda INT, cantidad_resultados int, salto int )
BEGIN
	SELECT * FROM aeneta.metadatos_cortados_documento
	where anio = anio_busqueda and revisado = 1
    LIMIT cantidad_resultados
    OFFSET salto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `busqueda_anio_rango_secilla` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `busqueda_anio_rango_secilla`(anio_inicio int, anio_final int, cantidad_resultados int, salto int)
BEGIN
	SELECT * FROM aeneta.metadatos_cortados_documento
	where anio >= anio_inicio and anio <= anio_final and revisado = 1
    LIMIT cantidad_resultados
    OFFSET salto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `busqueda_autor_sencilla` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `busqueda_autor_sencilla`( cadena_busqueda text, cantidad_resultados int, salto int )
BEGIN
	SELECT * FROM aeneta.metadatos_cortados_documento
	where INSTR(CONCAT_WS(" ", Nombres, Apellidos), cadena_busqueda) > 0 and revisado = 1
    LIMIT cantidad_resultados
    OFFSET salto;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `busqueda_titulo_sencilla` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `busqueda_titulo_sencilla`( cadena_busqueda text, cantidad_resultados int, salto int)
BEGIN
	SELECT * FROM aeneta.metadatos_cortados_documento
	where INSTR(titulo, cadena_busqueda) > 0 and revisado = 1
    LIMIT cantidad_resultados
    OFFSET salto;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `consultar_revision_documento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultar_revision_documento`(id_doc int)
BEGIN
	SELECT * from revision_documento where id_documento = id_doc limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `guardar_documento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `guardar_documento`(titulo varchar(45), palabras_clave varchar(45), resumen text, anio YEAR, id_tipo int, id_unidad int, url text, id_user int )
BEGIN
DECLARE id_ultimo int;
INSERT INTO `aeneta`.`documento`
(`Titulo`,
`Palabras_clave`,
`Resumen`,
`año`,
`id_tipo_documento`,
`id_unidad_academica`,
`url_archivo`)
VALUES
( titulo,
palabras_clave,
resumen, 
anio,
id_tipo,
id_unidad,
url);
select last_insert_id() into id_ultimo;

INSERT INTO `aeneta`.`autores_documento`
(id_autor, id_documento)
values 
(id_user, id_ultimo);

CASE id_tipo
	WHEN 1 THEN
		INSERT INTO detalletesis (idDocumento) values (id_ultimo);
	WHEN 2 THEN
		INSERT INTO detalleproyecto (id_documento) values (id_ultimo);
	WHEN 3 THEN
		INSERT INTO detalleTT (id_documento, mes, registro_TT) values (id_ultimo, 'Abril', 0);
END CASE;    

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mandar_revision_documento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `mandar_revision_documento`(juicio bit, notas TEXT, id_doc int)
BEGIN
	#indicar que el doucmento ya fue revisado
	UPDATE documento 
	SET revisado = 1
    WHERE idDocumento = id_doc;
    #Guardar el registro de la revision
    INSERT INTO revision_documento (id_documento, notas_revision, estado_revision)
    values (id_doc, notas, juicio);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `registro_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `registro_usuario`(email varchar(255), pass TEXT, tipo int, especialidad varchar(45), nombres TEXT, apellidos TEXT)
BEGIN
INSERT INTO `aeneta`.`usuario`
(`email`,
`password`,
`id_tipo_usuario`,
`especialidad`,
`Nombres`,
`Apellidos`)
VALUES
(email,
SHA2(CONCAT(email, pass),'256'),
tipo,
case tipo
	when 3 then especialidad
    else ""
END,
nombres,
apellidos);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `metadatos_cortados_documento`
--

/*!50001 DROP VIEW IF EXISTS `metadatos_cortados_documento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `metadatos_cortados_documento` AS select `documento`.`idDocumento` AS `id`,`documento`.`Titulo` AS `Titulo`,`documento`.`Palabras_clave` AS `Palabras_clave`,`documento`.`año` AS `anio`,`catalogo_tipos_documento`.`tipo_documento` AS `tipo`,`usuario`.`Nombres` AS `Nombres`,`usuario`.`Apellidos` AS `Apellidos`,`documento`.`revisado` AS `revisado` from (((`documento` join `catalogo_tipos_documento` on((`documento`.`id_tipo_documento` = `catalogo_tipos_documento`.`id_catalogo`))) join `autores_documento` on((`documento`.`idDocumento` = `autores_documento`.`id_documento`))) join `usuario` on((`autores_documento`.`id_autor` = `usuario`.`id_usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `metadatos_detallados_documento`
--

/*!50001 DROP VIEW IF EXISTS `metadatos_detallados_documento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `metadatos_detallados_documento` AS select `documento`.`idDocumento` AS `id`,`documento`.`Titulo` AS `Titulo`,`documento`.`Palabras_clave` AS `Palabras_clave`,`documento`.`Resumen` AS `Resumen`,`documento`.`año` AS `anio`,`documento`.`url_archivo` AS `url`,`catalogo_tipos_documento`.`tipo_documento` AS `tipo`,`catalogo_unidades_academicas`.`unidad_academica` AS `unidad_academica`,`usuario`.`Nombres` AS `Nombres`,`usuario`.`Apellidos` AS `Apellidos`,`documento`.`revisado` AS `revisado` from ((((`documento` join `catalogo_tipos_documento` on((`documento`.`id_tipo_documento` = `catalogo_tipos_documento`.`id_catalogo`))) join `catalogo_unidades_academicas` on((`documento`.`id_unidad_academica` = `catalogo_unidades_academicas`.`id_catalogo`))) join `autores_documento` on((`documento`.`idDocumento` = `autores_documento`.`id_documento`))) join `usuario` on((`autores_documento`.`id_autor` = `usuario`.`id_usuario`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-23 22:44:29
