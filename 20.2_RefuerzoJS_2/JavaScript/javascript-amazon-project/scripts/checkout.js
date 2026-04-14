import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCart} from "../data/cart.js";

//Importacion de carrito pero usando OOP --Programacion Orientada a Objetos--
//import "../data/car.js";

//import "../data/backend-practice.js"



//Practica con async
async function loadPage(){

  try {
    //creacion de un error propio
    //throw "error1";


    //promesa 
    await loadProductsFetch();

    const valor = await new Promise((resolve) => { //podemos ejecutar varias promesas al mismo tiempo  --con Promise.all()
      throw "error2";
      loadCart(() => {
        resolve("valor3");  //aca no se dio un valor por eso el segundo elemento del array es undefined
      });
    });
    
  } catch (error) { //el parametro de error contiene informacion del error por si se necesita
    console.log("Un error Inesperado. Intentelo mas tarde");
  }

  

    //redenrizar la pagina
  //llamdo de funcion del aparto de Chekout head
  renderCheckoutHeader();

  //Llamado de la funcion para que se ejecuta al realizar la carga de pagina, de los productos seleccionados
  renderOrderSummary();

  //llamdo de funcion para la parte de suma de producto, envio de productos, porcentaje de envio
  renderPaymentSummary();

}
loadPage();




/*
//Practica de ejecucion de varias promesas al mismo tiempo
Promise.all([
  //Practica con Promesas pero usando fetch
  loadProductsFetch(),
  new Promise((resolve) => { //podemos ejecutar varias promesas al mismo tiempo  --con Promise.all()
    loadCart(() => {
      resolve();  //aca no se dio un valor por eso el segundo elemento del array es undefined
    });
  })

]).then((values) => {
    console.log(values);  //en cosnsola muestra un array con los valores ["valor1", undefined]

    //redenrizar la pagina
    //llamdo de funcion del aparto de Chekout head
    renderCheckoutHeader();

    //Llamado de la funcion para que se ejecuta al realizar la carga de pagina, de los productos seleccionados
    renderOrderSummary();

    //llamdo de funcion para la parte de suma de producto, envio de productos, porcentaje de envio
    renderPaymentSummary();
});
*/


/*
//Practica con Promesas --parametro resolve para que se ejecute
new Promise((resolve) => {
  loadProducts(() => {
    resolve("valor1");  //se le puede dar un valor a la resolucion
  });

}).then((value) => { //para agregar el siguiente paso de una promesa se usa el siguiente metodo "then()"
  console.log(value);
  
  return new Promise((resolve) => { //podemos ejecutar varias promesas al mismo tiempo  --con Promise.all()
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
*/





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



