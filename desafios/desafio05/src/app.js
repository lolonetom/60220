import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./util.js";
import { Server } from "socket.io";
import ProductManager from "./managers/ProductManager.js";
import homeRouter from "./routes/home.routes.js";
import productsRouter from "./routes/products.routes.js";

//Declaramos constantes para servidor express
const app = express();
const PORT = 8090; // Puerto en el que escuchará nuestro servidor
const productManager = new ProductManager(__dirname + "./files/productos.json");

//Preparar la configuracion del servidor para recibir objetos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Carpeta public
app.use(express.static(__dirname + "/public"));

//Setting Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const productsArray = [];

//Routes
app.use("/", homeRouter);
app.use("/realtimeproducts", productsRouter);

const httpServer = app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});

// Instanciamos socket.io
const socketServer = new Server(httpServer);

//Socket Server
socketServer.on("connection", async (socket) => {
  console.log("Cliente Conectado");

  socket.emit("productsArray", await productManager.getProducts());

  socket.on("productObject", async (object) => {
    await productManager.addProduct(object);

    socket.emit("productsArray", await productManager.getProducts());
  });
});

//Puerto de escucha del servidor
/* app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
}); */
