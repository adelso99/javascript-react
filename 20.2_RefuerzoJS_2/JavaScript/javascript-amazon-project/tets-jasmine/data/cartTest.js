import {addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe("Conjunto de Pruebas: addToCart --Añadir al Carrito--", () => {
   it("Agrega un producto existente al carrito", () => {

   });   

   it("Agregar un Nuevo producto al Carrito", () => {
    //spyOn nos proporciona un objeto que queremos cambiar
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]); //devuelviendo cadena en el localst
    }); 

    loadFromStorage();


      addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart.length).toEqual(1);
   });
});