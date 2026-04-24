const fs = require("fs");

fs.writeFile("message.txt", "Hola con Node.js", (err) => {
  if (err) throw err;
  console.log('El Archivo se ha Guadado!');

  fs.readFile('message.txt', "utf8",(err, data) => {
    if (err) throw err;
      // 1. crear nuevo contenido
      let data = "Hola con un Cambio";
  
      // 2. guardar el cambio
      fs.writeFile('message.txt', nuevo, (err) => {
        if (err) throw err;
        console.log("Cambio exitoso");
      });
  }); 
  
}); 

