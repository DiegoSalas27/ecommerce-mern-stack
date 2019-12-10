CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Productos`
--

DROP TABLE IF EXISTS `Productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoriaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriaId` (`categoriaId`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categoria` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Productos`
--

LOCK TABLES `Productos` WRITE;
/*!40000 ALTER TABLE `Productos` DISABLE KEYS */;
INSERT INTO `Productos` VALUES (1,'LG Lavadora 18 Kg TS1806NV Silver','Ten tu ropa impecable en todo momento gracias a esta genial lavadora que la reconocida marca LG tiene para ti. Con una gran carga frontal, esta lavadora tendrá tu ropa lista para usar de manera rápida . Asimismo, su amplia capacidad de lavado de 18 kg hará que tengas tus prendas listas para utilizar. ¡No esperes más y vuelve tu vida más sencilla con esta Lavadora!','S/ 1,899','2019-12-03 17:18:42','2019-12-03 17:18:42',1),(2,'Refrigeradora 312 Litros GT32WPPDC','Marca: LG Modelo: GT32WPPDC Capacidad total útil: 312 lts No frost: Sí Ice maker interior: Sí Dimensiones (altoxanchoxprofundidad): 169 x 60 x 66.1 cm Material de las bandejas: Vidrio templado Tipo: Top mount','S/ 1,899','2019-12-04 02:26:39','2019-12-04 02:26:39',1),(3,'Secadora DWD-700CCS 7 kg 1700W Silver','Con capacidad de 7 kg y con estructura de color silver, esta increíble y potente secadora te será de gran ayuda en casa. Además, posee la tecnología Air Dry, la cual le proporcionará aire frío a tus prendas, obteniendo un resultado óptimo. ¡Olvídate de la ropa mojada con Daewoo!','S/ 999','2019-12-04 02:27:26','2019-12-04 02:27:26',1),(4,'Lavadora 17Kg WT17BSS6H con TurboWash 3D','¡Lava una variedad de tejidos de forma más eficientes y con menos daño con LG! Sincroniza lo último en Lavadoras con tu teléfono inteligente a través del WiFi y controla todas las funciones con la tecnología SmartThinQ. El exclusivo diseño del tambor facilitará tus actividades, ya que cuenta con 6 tipos de movimientos para mejores resultados. Ahorra hasta 27.5% de agua y 17.1% de tiempo ¡No esperes más y adquiere esta sensacional presentación que Saga Falabella tiene para ti','S/ 1,599','2019-12-04 02:28:04','2019-12-04 02:28:04',1),(5,'Polo Mango','Marca: MANGO Modelo: Mango Tipo: Polos','S/ 49.50','2019-12-04 02:34:25','2019-12-04 02:34:25',2),(6,'Blusa Mango','Marca: MANGO Modelo: Mango Tipo: Blusas','S/ 64.50','2019-12-04 02:35:45','2019-12-04 02:35:45',2),(7,'Vestido Mango','Marca: MANGO Modelo: Mango Tipo: Vestidos','S/ 124.50','2019-12-04 02:36:20','2019-12-04 02:36:20',2),(8,'Jean Mango','Marca: MANGO Modelo: Mango Tipo: Jeans','S/ 74.50','2019-12-04 02:36:49','2019-12-04 02:36:49',2),(9,'Pista De Niveles Mario Kart','Los personajes más icónicos de Mario Kart entraron a la aventura con las pistas de Hot Wheels. Cada pista incluye una replica del auto a escala 1:64.','S/ 149','2019-12-04 02:41:31','2019-12-04 02:41:31',3),(10,'Paquete de 20 Autos','Este paquete tiene un gran carga de diversión con los 20 vehículos Hot Wheels que se incluyen. ¡Con cada paquete estás más cerca de completar tu colección! Los autos incluidos pueden variar.','S/ 158.90','2019-12-04 02:42:25','2019-12-04 02:42:25',3),(11,'Pista de Auto Eléctrica','Marca:JJSlot Modelo:JJ.98-2 Tipo:Pistas de auto Tipo general:Autos básicos y pistas Género:Niño Composición:Plástico Material principal:Plástico Fuente de energía:Pilas Incluye pilas:No Edad mínima recomendada:3 años','S/ 89.90','2019-12-04 02:43:23','2019-12-04 02:43:23',3),(12,'Garage Parking 4 Pisos + 2 Autos','Un impresionante parking de 4 plantas con increíbles bajadas en curva, servicio de auto lavado, zona mecánica con espacio para repostar, ascensor y amplias plazas para tus coches. Con 4 formas distintas de montaje. Con increíbles bajadas en curva y con ascensor.','S/ 99.90','2019-12-04 02:44:09','2019-12-04 02:44:09',3),(17,'Laptop Pavilion 2en1 Core i3 8va Gen 4GB+16GB Optane 1TB - Pantalla Touch','Navega, juega y diviértete con esta sorprendente notebook Convertible que la prestigiosa marca HP tiene para ti. Con un procesador Intel Core i3, esta laptop te dará la potencia para descargar y disfrutar un sinfín de aplicaciones, juegos y programas. Además, gracias a su implacable capacidad de 1 TB y 20GB de memoria, podrás almacenar todo tipo de archivos, vídeos, fotos y más. ¡No dejes pasar esta increíble oportunidad!','S/ 2,199','2019-12-05 02:15:29','2019-12-05 02:15:29',5),(18,'Laptop Ideapad 530S 14\'\' Core i5 8GB 256GB SSD - Full HD - Teclado Retroiluminado','¡Potencia y estilo extraordinarios con Lenovo! Descubre el Ideapad 530S: Elegantes marcos han sido diseñados para que tus imágenes tomen mayor protagonismo al sincronizarse con un envolvente sonido nítido. Déjate impresionar por colores más vivos mientras disfrutas de las tendencias del streaming en Full HD. El Ideapad 530s incluye una gran potencia con un rendimiento de aplicación increíblemente rápido y opciones de almacenamiento sólidas. Equípate con un Disco Duro Sólido 256GB y 8GB de Memoria RAM.','S/ 2,399','2019-12-05 02:15:58','2019-12-05 02:15:58',5),(19,'Laptop Ideapad 530S 14\'\' Core i5 8GB 256GB SSD - Full HD - Teclado Retroiluminado','¡Potencia y estilo extraordinarios con Lenovo! Descubre el Ideapad 530S: Elegantes marcos han sido diseñados para que tus imágenes tomen mayor protagonismo al sincronizarse con un envolvente sonido nítido. Déjate impresionar por colores más vivos mientras disfrutas de las tendencias del streaming en Full HD. El Ideapad 530s incluye una gran potencia con un rendimiento de aplicación increíblemente rápido y opciones de almacenamiento sólidas. Equípate con un Disco Duro Sólido 256GB y 8GB de Memoria RAM.','S/ 1,899','2019-12-05 02:16:27','2019-12-05 02:16:27',5);
/*!40000 ALTER TABLE `Productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-05 11:07:25
