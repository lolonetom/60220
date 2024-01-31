const fs = require("fs");

const dirNameAsync = "./files2";
const fileNameAsync = dirNameAsync + "/ejemploCallback.txt";

let data = "Hola Coders, estoy en un archivo! - utilizando callbacks";

fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
    if (error) throw Error("No se pudo crear el directorio base!");

    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error("No se pudo escribir el archivo!");
    });

    //Lectura del archivo
    fs.readFile(fileNameAsync, "utf-8", (error, contenido) => {
        if (error) throw Error("No se pudo leer el archivo!");
        console.log("Contenido del archivo");
        console.log(contenido);

        //Agregar Contenido
        fs.appendFile(fileNameAsync, "-- Otro ejemplo", (error) => {
            if (error) throw Error("No se pudo agregar nuevo contenido!");

            //Lectura
            fs.readFile(fileNameAsync, "utf-8", (error, contenido) => {
                if (error) throw Error("No se pudo leer el archivo!");
                console.log("Contenido del archivo:");
                console.log(contenido);
            });
        });
    });
});
