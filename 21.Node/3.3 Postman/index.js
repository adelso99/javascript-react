import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
//Ejericicio
// Practiquemos con Postman. Asegúrate de que tu servidor esté funcionando con nodemon.
// Luego, prueba las 5 rutas que se muestran a continuación con Postman. Abre una pestaña diferente para cada solicitud.
// Verifica que para cada ruta recibas el código de estado correcto de tu servidor.
// No deberías recibir ningún código de estado 404 ni 500.

// *********************

//Testeo en Postamn
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

//conexion para realizar la prueba de testing en Postman de los diferentes estados
app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});


app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
