import express from "express";
const app = express();
const port = 3000;

// *********************
//Ejericicio
// Practiquemos con Postman. Asegúrate de que tu servidor esté funcionando con nodemon.
// Luego, prueba las 5 rutas que se muestran a continuación con Postman. Abre una pestaña diferente para cada solicitud.
// Verifica que para cada ruta recibas el código de estado correcto de tu servidor.
// No deberías recibir ningún código de estado 404 ni 500.

// *********************

//Testeo en Postamn -- de cada codigo respuesta desde HTML
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

//conexion para realizar la prueba de testing en Postman de los diferentes estados
app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

//respuesta de codigo en Postman -- de ambos codigos esperados que se quiere 
app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

//Registro de de Actualizacion de datos 
app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

//verifiacion de servicio de respuesat de puerto 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
