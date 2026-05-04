import express from "express"
const app = express();
const port = 3000;


//peticion GET
app.get("/", (req, res) => {
    //console.log(req.rawHeaders);


    //envio de msj
    res.send("<h1>Hello from Nodemon</h1>");
});



app.listen(port, () => {
  console.log(`Servidor corrigiendo en el puerto ${port}`);
});