import express from "express";

//Ejericicio 3

const app = express();
const port = 3000;

//creacion de funcion logger
const logger = (req, res, next) => {
  console.log(req.method)
  console.log(req.url)
  next()
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Puerto en uso ${port}`);
});
