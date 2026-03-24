import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary } from "./checkout/paymentSummary.js";

//Importacion de daysj
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

//Llamado de la funcion para que se ejecuta al realizar la carga de pagina
renderOrderSummary();

renderPaymentSummary();

//importacion de la funcion isWeekend
import {isWeekend} from "./utils/money.js";


const dato = dayjs();

//Fecha 1
let dato2 = dato.add(2, "days");
let fecha = dato2.format('dddd, MMMM D');
console.log(fecha);
console.log(isWeekend(dato2));


//Fecha 2
dato2 = dato.add(4, "days");
fecha = dato2.format('dddd, MMMM D');
console.log(fecha);
console.log(isWeekend(dato2));


//Fecha 3
dato2 = dato.add(5, "days");
fecha = dato2.format('dddd, MMMM D');
console.log(fecha);
console.log(isWeekend(dato2));

