/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";

process.stdin.on("data", (input) => {

  let dato = input.toString();

  fs.writeFile("message.txt", dato, (err) => {
    if (err) throw err;
    console.log('El Archivo se ha Guadado!');
  }); 


});



