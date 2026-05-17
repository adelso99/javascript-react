import express from "express";

const app = express();
const port = 3000;

//Ejericio de seccion 

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
