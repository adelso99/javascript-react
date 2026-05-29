//Para ver cómo debería funcionar el sitio web final, ejecuta "node solution.js".
//Asegúrate de haber instalado todas las dependencias con "npm i".
//La contraseña es ILoveProgramming

//importacion de formularios
import express from "express";
import bodyParser from "body-parser";

//importacion para peticiones
import {dirname} from "path";
import {fileURLToPath} from "url";

//variables
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


//verificacion de puerto en uso en consola
app.listen(port, () =>{
  console.log(`Puerto en uso ${port}`);
});

/*

//uso de express con bodyparser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//uso de edpoint get para peticion de HTML
app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

//uso de edpoint /submit
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h2>${req.body.street} ${req.body.pet}</h2>`);
});




*/