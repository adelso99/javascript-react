import express from "express";

//importacion de middlewares
import bodyParser from "body-parser";

//importacion de url para peticion de get
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

//variable de dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

//Uso de aplicaciones
//uso de express con bodyparser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//uso de edpoint /submit
app.post("/submit", (req, res) => {
  console.log(req.body);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//verificacion de edpoint
