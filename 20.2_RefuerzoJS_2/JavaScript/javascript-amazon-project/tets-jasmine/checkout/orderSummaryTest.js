import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage} from "../../data/cart.js";


describe("Conjunto de Pruebas: renderOrderSummary --Resumen del Pedido--", () => {
  //para añadir el HTML que se necesita para la prueba
  it("muestra el carrito", () => {
      document.querySelector(".js-test-container").innerHTML = `
        <div class="js-order-summary"></div>
      `;

      //para burlar el localStorage  
      const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
      const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

      spyOn(localStorage, "getItem").and.callFake(() => {
        return JSON.stringify([{
          productId: productId1,
          quantity: 2,
          deliveryOptionId: "1"  
        }, {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: "2"
        }]); //devuelviendo cadena en el localst  
      }); 

      loadFromStorage();

      //llamado de funcion de resumen del carrito
      renderOrderSummary();

      expect(
          document.querySelectorAll(".js-cart-item-container").length
        ).toEqual(2);

      expect(
        document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain("Quantity: 2"); //verifica cadenas este metodo

      expect(
        document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain("Quantity: 1"); //verifica cadenas este metodo
  });

  it("Elimnar el Producto", () => {
      document.querySelector(".js-test-container").innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      `;

      //para burlar el localStorage  
      const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
      const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

      spyOn(localStorage, "getItem").and.callFake(() => {
        return JSON.stringify([{
          productId: productId1,
          quantity: 2,
          deliveryOptionId: "1"  
        }, {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: "2"
        }]); //devuelviendo cadena en el localst  
      }); 

      loadFromStorage();

      renderOrderSummary();

      document.querySelector(`.js-delete-link-${productId1}`).click();
  });
});