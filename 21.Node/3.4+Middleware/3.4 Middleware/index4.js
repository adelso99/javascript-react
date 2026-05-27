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


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
