/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'; //1.Importacion del paquete para el uso del ejericio de esta seccion

//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
import qr from "qr-image";

var qr = require('qr-image');
//import fs from "fs";

//1. Use the inquirer npm package to get user input.

inquirer
  .prompt([
    {
      "message": "Cual es tu Tipo de URL: ", 
      "name": "URL"
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require('fs').createWriteStream('qr_img.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });


  /*
process.stdin.on("data", (input) => {

  let dato = input.toString();

  fs.writeFile("message.txt", dato, (err) => {
    if (err) throw err;
    console.log('El Archivo se ha Guadado!');
  }); 


});
*/


