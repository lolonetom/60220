import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./util.js";
import viewRoutes from "./routes/views.routes.js";

//Declaramos express
const app = express();
const PORT = 8090;

//Preparar la configuracion del servidor para recibir objetos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuracion de Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//Carpeta public
app.use(express.static(__dirname + "/public"));

//Rutas
app.get("/hello", (req, res) => {
  let testUser = {
    name: "Juan",
    last_name: "Perez",
    edad: 30,
  };

  res.render("hello", testUser);
});

//Ruta usuarios random
const users = [
  {
    name: "Jorge",
    last_name: "Gutierrez",
    edad: 30,
    email: "jgutierrez@micorreo.com",
    phone: "3049302933",
  },
  {
    name: "Daniel",
    last_name: "Mendez",
    edad: 35,
    email: "dmendez@micorreo.com",
    phone: "2049302933",
  },
  {
    name: "Mauricio",
    last_name: "Aguilar",
    edad: 28,
    email: "maguilar@micorreo.com",
    phone: "3049302900",
  },
  {
    name: "Francisco",
    last_name: "Rendon",
    edad: 20,
    email: "frendon@micorreo.com",
    phone: "1304930000",
  },
  {
    name: "Maria",
    last_name: "Sanchez",
    edad: 30,
    email: "msanchez@micorreo.com",
    phone: "4449302977",
  },
];

app.get("/users", (req, res) => {
  const random = Math.floor(Math.random() * users.length);
  const user = users[random];

  res.render("users", user);
});

app.use("/api/hbs", viewRoutes);

app.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});
