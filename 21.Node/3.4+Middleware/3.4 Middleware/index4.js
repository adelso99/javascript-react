import express from "express";

//importacion de middlewares

const app = express();
const port = 3000;

//Uso de aplicaciones
//uso de app

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//verificacion de edpoint
