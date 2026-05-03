import express from "express"
const app = express();
const port = 3000;


//peticion GET
app.get("/", (req, res) => {
    console.log(req.rawHeaders);
});

app.listen(port, () => {
  console.log(`Servidor corrigiendo en el puerto ${port}`);
});