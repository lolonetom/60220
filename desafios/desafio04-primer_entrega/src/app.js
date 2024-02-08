import express from "express";
import __dirname from "./util.js";

//Declaramos constantes para servidor express
const app = express();
const PORT = 8080; // Puerto en el que escuchará nuestro servidor

//Preparar la configuracion del servidor para recibir objetos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Carpeta public
app.use(express.static(__dirname + "/public"));

//Puerto de escucha del servidor
app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});
