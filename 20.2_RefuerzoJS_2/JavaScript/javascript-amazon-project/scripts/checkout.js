import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts} from "../data/products.js";

//Importacion de carrito pero usando OOP --Programacion Orientada a Objetos--
//import "../data/car.js";

//import "../data/backend-practice.js"




//Practica con Promesas
new Promise(() => {
  console.log("Promesa");
});










//Carga de productos que fueron llamados por el back-end
loadProducts(() => {


      //llamdo de funcion del aparto de Chekout head
    renderCheckoutHeader();

    //Llamado de la funcion para que se ejecuta al realizar la carga de pagina, de los productos seleccionados
    renderOrderSummary();

    //llamdo de funcion para la parte de suma de producto, envio de productos, porcentaje de envio
    renderPaymentSummary();

});

