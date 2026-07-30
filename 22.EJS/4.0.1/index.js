//Importacion de paquetes para uso de servidor 
import express from "express"; 

//variabale para uso de express 
const app = express(); 

//vaiables de fecha 
let fecha = new Date(); 

//verificacion en consola 
let dia = fecha.getDay(); 
console.log(dia); 

//uso de if o switchz en este ejericicio 
if(dia = 1){ console.log("Es día laboral, mantente enfocado"); 
  }else if( dia === 6){ 
    console.log("¡Disfruta tu fin de semana!"); 
  }else if(dia === 0){
     console.log("Descansa y prepárate para la semana."); 
    }

//verificacion





