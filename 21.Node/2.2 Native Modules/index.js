const fs = require("fs");

fs.writeFile("message.txt", "Hola con Node,js", (err) => {
  if (err) throw err;
  console.log('El Archivo se ha Guadado!');
}); 