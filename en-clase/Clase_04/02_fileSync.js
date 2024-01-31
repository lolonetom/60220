const fs = require('fs');

const dirName = './files'
const fileName = dirName + "/ejemplo.txt"

console.log("Generando escritura de archivos Sync con fileName: " + fileName);
if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)
fs.writeFileSync(fileName, "Hola Coders, estoy en un archivo!!")

if (fs.existsSync(fileName)) {
    console.log('Archivo creado con exito en la ruta:' + fs.readFileSync(fileName));

    //Lectura
    let contenido = fs.readFileSync(fileName, 'utf-8')
    console.log(contenido);



    // Agregar mas contenido
    fs.appendFileSync(fileName, '\n--- Mas contenido!!')
    contenido = fs.readFileSync(fileName, 'utf-8')
    console.log(contenido);


    //Borrado
    console.log('Borrando archivo..');
    fs.unlinkSync(fileName);


    //si sucede algun error al borrar

    fs.existsSync(fileName) ? console.log('El archivo no se pudo borrar...') : console.log('Archivo borrado');
} else {
    console.error('Error creando el archivo!!');
}