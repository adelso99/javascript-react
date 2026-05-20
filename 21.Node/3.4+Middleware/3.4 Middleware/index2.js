import express from "express";
//importacion de Morgan 
import morgan from "morgan";

const app = express();
const port = 3000;

//Ejericio de seccion, de verificacion de modulo de morgan pasos a verificar .--
app.use(
  morgan("dev")
);


app.get("/", (req, res) => {
  res.send("Hello, ");
});

//verificacion
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
