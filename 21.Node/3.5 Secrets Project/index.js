//Para ver cómo debería funcionar el sitio web final, ejecuta "node solution.js".
//Asegúrate de haber instalado todas las dependencias con "npm i".
//La contraseña es ILoveProgramming

//importacion de formularios
import express from "express";
import bodyParser from "body-parser";

//importacion para peticiones
import {dirname} from "path";
import {fileURLToPath} from "url";

//variables a usar
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


//aplicacion de uso
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//uso de edpoint para peticion GET
app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});


//uso de edpoint para la peticion de POST
app.post("/check", (req, res) => {
  console.log(req.body.password); //verificacion de contraseña

  //verificacion de contraseña con un if
  if (req.body.password === "ILoveProgramming"){
    res.sendFile(__dirname + "/public/secret.html");
  }else{
    res.sendFile(__dirname + "/public/index.html")
  }
});


//verificacion de puerto en uso en consola
app.listen(port, () =>{
  console.log(`Puerto en uso ${port}`);
});

