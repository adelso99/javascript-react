import {addToCart, cart, loadFromStorage, removeFromCart} from "../../data/cart.js";

describe("Conjunto de Pruebas: addToCart --Añadir al Carrito--", () => {
  //uso de hook 
  beforeEach(() => {
    //spyOn nos proporciona un objeto que queremos cambiar
    spyOn(localStorage, "setItem"); 
  });

   it("Agrega un producto existente al carrito", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }]); //devuelviendo cadena en el localst  
    }); 

    loadFromStorage();
    
      addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }]));
      expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart[0].quantity).toEqual(2);
    
   });   

   it("Agregar un Nuevo producto al Carrito", () => {

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]); //devuelviendo cadena en el localst
    }); 

    loadFromStorage();

      addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
      expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart[0].quantity).toEqual(1);
   });
});



//Pruebas de Ejercicios de Desafio
/*

16i. En cartTest.js, cree un conjunto de pruebas para la función removeFromCart().
   - Simule localStorage.setItem y localStorage.getItem al principio.
   - Cree una prueba: elimine un productId que esté en el carrito.
   - Cree una prueba: elimine un productId que no esté en el carrito (en este caso, la función no debería hacer nada).
   - En cada prueba, compruebe si el carrito tiene el aspecto correcto. Además, compruebe que localStorage.setItem se haya llamado una vez y con los valores correctos
*/
describe("Conjunto de Pruebas: removeFromCart --Remover del carrito--", () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
  });

  it('Remover productos del caritot', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
  });

  it('No hace nada si el producto no está en el carrito', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    removeFromCart('does-not-exist');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
  });

});



/*
16k. En cartTest.js, agregue un conjunto de pruebas para la función updateDeliveryOption.
    - Simule localStorage.setItem y localStorage.getItem al inicio.
    - Cree una prueba básica: actualice la opción de entrega de un producto en el carrito.
    - Verifique que el carrito se vea correcto.
    - Verifique que localStorage.setItem se haya llamado una vez con los valores correctos.
*/