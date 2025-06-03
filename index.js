let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express

// console.log("Primer mensaje");

// let nombre = "Moi";
// let apellidos = "Macías Díaz";

// console.log("Mi nombre es " + nombre + " " + apellidos);

// let dias = [
//     "Lunes",
//     "Martes",
//     "Miercoles",
//     "Jueves",
//     "Viernes",
//     "Sabado",
//     "Domingo",
// ];

// let colors = require("colors");

// console.log("Hoy es ".red + dias[2].green);

// let calculos = require("./funciones.js");

// calculos.sumar(1, 2);
// calculos.restar(1, 2);
// calculos.multiplicar(1, 2);
// calculos.dividir(1, 2);

// let http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Hola Mundo</h1>");
//     console.log("petición recibida");
//     res.end();
// }).listen(4000);

app.get("/", function (req, res) {
    res.send("Hola Mundo");
});

app.listen(4000);
console.log("Servidor escuchando en el puerto 4000");
