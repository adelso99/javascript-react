import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary } from "./checkout/paymentSummary.js";

//Importacion de daysj
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

//Llamado de la funcion para que se ejecuta al realizar la carga de pagina
renderOrderSummary();

renderPaymentSummary();


function isWeekend(dato){
  const fecha = dato.format("dddd");

  if(fecha === "Saturday" || fecha === "Sunday"){
  console.log(fecha);
  }
};


const dato = dayjs();
const dato2 = dato.add(6, "days");
const fecha = dato2.format('dddd, MMMM D');

console.log(fecha);
isWeekend(dato);