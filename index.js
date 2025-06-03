let express = require("express"); // Importamos express
let app = express(); // Creamos una instancia de express
let mysql = require("mysql2");
let path = require("path");
require("dotenv").config({ path: "./.env" });

app.use(express.static(path.join(__dirname, "public"))); // Configuramos la carpeta public como carpeta estatica

let conexion = mysql.createConnection({
    //Creamos la configuración de la base de datos
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

conexion.connect(function (error) {
    //Conectamos con la base de datos
    if (error) {
        console.log(error);
    } else {
        console.log("Conectado a la base de datos");
    }
});

// visualizamos los profesores
conexion.query(
    "SELECT nombre, apellidos FROM profesores",
    function (error, resultados) {
        if (error) {
            console.log(error);
        } else {
            // console.log(resultados);
            resultados.forEach((profesor) => {
                console.log(profesor.nombre + " " + profesor.apellidos);
            });
        }
    }
);

// //insertar
// conexion.query(
//     "INSERT INTO profesores (nombre, apellidos, codigo_curso) VALUES ('Pepe', 'Perez', 2)",
//     function (error, resultados) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Registro insertado ", resultados);
//         }
//     }
// );

// // actualizar
// conexion.query(
//     "UPDATE profesores SET apellidos = 'Garcia' WHERE id = 12",
//     function (error, resultados) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Registro actualizado ", resultados);
//         }
//     }
// );

// //borrar
// conexion.query(
//     "DELETE FROM profesores WHERE id = 13",
//     function (error, resultados) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Registro borrado ", resultados);
//         }
//     }
// );

conexion.end();

app.get("/", function (req, res) {
    // res.send("Hola Mundo");
    res.sendFile(path.join(__dirname, "public", "pages/index.html"));
});

app.get("/contacto", function (req, res) {
    // res.send("Página de contacto");
    res.sendFile(path.join(__dirname, "public", "pages/contacto.html"));
});

app.listen(process.env.PORT);
console.log("Servidor escuchando en el puerto 4000 http://localhost:4000");
