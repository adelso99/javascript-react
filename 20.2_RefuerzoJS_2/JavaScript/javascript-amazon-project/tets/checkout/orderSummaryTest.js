import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage, cart} from "../../data/cart.js";
import {loadProducts, loadProductsFetch} from "../../data/products.js";


describe("Conjunto de Pruebas: renderOrderSummary --Resumen del Pedido--", () => {
//para burlar el localStorage  
const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
const name1 = "Black and Gray Athletic Cotton Socks - 6 Pairs";

  //uso de gancho para as pruebas ya que nuestros productos ahora vienen de back-end
  beforeAll( async () => { //jasmin tiene una funcion done() que espera que el codigo cargue para ejecutar la funcion
    await loadProductsFetch();
  });

  //uso de Hooks o Ganchos con beforeEach()
  beforeEach(() => {
      spyOn(localStorage, "setItem");

      document.querySelector(".js-test-container").innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      <div class="js-return-to-home-link"></div>
      `;   

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
  });


  //uso de Hooks o Ganchos con afterEach()    
  afterEach(() => {
    document.querySelector(".js-test-container").innerHTML = "";
  }); 
  

  //para añadir el HTML que se necesita para la prueba
  it("muestra el carrito", () => {
      expect(
          document.querySelectorAll(".js-cart-item-container").length
        ).toEqual(2);

      expect(
        document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain("Quantity: 2"); //verifica cadenas este metodo

      expect(
        document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain("Quantity: 1"); //verifica cadenas este metodo

        expect(
          document.querySelector(`.js-product-name-${productId1}`).innerText
        ).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(
          document.querySelector(`.js-product-name-${productId2}`).innerText
        ).toEqual('Intermediate Size Basketball');
        expect(
          document.querySelector(`.js-product-price-${productId1}`).innerText
        ).toEqual('$10.90');
        expect(
          document.querySelector(`.js-product-price-${productId2}`).innerText
        ).toEqual('$20.95');

  });

  it("Elimnar el Producto", () => {


      document.querySelector(`.js-delete-link-${productId1}`).click();
      expect(
        document.querySelectorAll(".js-cart-item-container").length
      ).toEqual(1);

      expect(
        document.querySelector(`.js-cart-item-container-${productId1}`)
      ).toEqual(null);

      expect(
        document.querySelector(`.js-cart-item-container-${productId2}`)
      ).not.toEqual(null);
      expect(
        document.querySelector(`.js-product-name-${productId2}`).innerText
      ).toEqual('Intermediate Size Basketball');
      expect(
        document.querySelector(`.js-product-price-${productId2}`).innerText
      ).toEqual('$20.95');
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual(productId2);

  });

  it('Conjunto de Pruebas: Actualizar la opción de entrega', () => {
    document.querySelector(`.js-delivery-option-${productId1}-3`).click();

    expect(
      document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
    ).toEqual(true);

    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[0].deliveryOptionId).toEqual('3');

    expect(
      document.querySelector('.js-payment-summary-shipping').innerText
    ).toEqual('$14.98');
    expect(
      document.querySelector('.js-payment-summary-total').innerText
    ).toEqual('$63.50');
  });
  
});

