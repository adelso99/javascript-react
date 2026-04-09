import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts} from "../data/products.js";
import {loadCart} from "../data/cart.js";

//Importacion de carrito pero usando OOP --Programacion Orientada a Objetos--
//import "../data/car.js";

//import "../data/backend-practice.js"




//Practica con Promesas --parametro resolve para que se ejecute
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => { //para agregar el siguiente paso de una promesa se usa el siguiente metodo "then()"
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
    //redenrizar la pagina
    //llamdo de funcion del aparto de Chekout head
    renderCheckoutHeader();

    //Llamado de la funcion para que se ejecuta al realizar la carga de pagina, de los productos seleccionados
    renderOrderSummary();

    //llamdo de funcion para la parte de suma de producto, envio de productos, porcentaje de envio
    renderPaymentSummary();
});   






/*
//Carga de productos que fueron llamados por el back-end
loadProducts(() => {
    loadCart(() => {
      //esto es capa de animamiento ya que tenemos codigo dentro de codigo
      //llamdo de funcion del aparto de Chekout head
      renderCheckoutHeader();

      //Llamado de la funcion para que se ejecuta al realizar la carga de pagina, de los productos seleccionados
      renderOrderSummary();

      //llamdo de funcion para la parte de suma de producto, envio de productos, porcentaje de envio
      renderPaymentSummary();

    });

});
*/



