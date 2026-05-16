import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

//importacion del modulo de body parser
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

//uso del middleware
const app = express();
app.use(
   bodyParser.urlencoded({
      extended: true
   })
);

//puerto usado
const port = 3000;

//endpoint usado
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

