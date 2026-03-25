import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from "../../data/cart.js";
import {products, getProduct} from "../../data/products.js";
import {formatCurrency} from "../utils/money.js";

//Importacion de ESM
import {hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";

//Importacion de daysj
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

//Importacion de archivo para el deliveryOptions
import {deliveryOptions, getDeliveryOption} from "../../data/deliveryOptions.js";

//Importar funcion para eliminar, que servira para que actulice la parte de la suma de los produtos
import {renderPaymentSummary} from "./paymentSummary.js";

//funcion para actualizar el html cuando sufre algun cambio
export function renderOrderSummary(){

      let cartSummaryHTML = "";

      cart.forEach((cartItem) => {
          const productId = cartItem.productId;

          //haciendo uso de la funcion creada para la verificacion de producto de Id y que guarde en un variable lo que devuelve
          const matchingProduct = getProduct(productId);

          //Verificacion de Id del Producto para la fecha
          const deliveryOptionId = cartItem.deliveryOptionId;

          //verificacion de la opcion elegida de envio del producto
          const deliveryOption = getDeliveryOption(deliveryOptionId);

          //formato para le fecha exacta actual
          const today = dayjs();
          const deliveryDate = today.add(
            deliveryOption.deliveryDays,
            "days"
          );

          const dateString = deliveryDate.format(
            "dddd, MMMM D"
          );

          cartSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    ${formatCurrency(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                      Update
                    </span>
                      <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                      <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(matchingProduct, cartItem)}
                </div>
              </div>
            </div>
            `;

      });

      //Creacion de la opcion de pago gratis, 7 dias o 1 dia
      function deliveryOptionsHTML(matchingProduct, cartItem){
        let html = "";

            deliveryOptions.forEach((deliveryOption) => {
              const today = dayjs();
              const deliveryDate = today.add(
                deliveryOption.deliveryDays,
                "days"
              );

              const dateString = deliveryDate.format(
                "dddd, MMMM D"
              );

              const priceString = deliveryOption.priceCents 
              === 0 
                ? "FREE"
                : `${formatCurrency(deliveryOption.priceCents)} -`;

                const isChecked = deliveryOption.id === cartItem.deliveryOptionId; 

              html += `
              <div class="delivery-option js-delivery-option"
              data-product-id="${matchingProduct.id}"
              data-delivery-option-id="${deliveryOption.id}">
                <input type="radio"
                ${isChecked ? "checked" : ""}
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                </div>
              </div>
              `
            });

        return html;

      }


      document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;



      document.querySelectorAll(".js-delete-link").forEach((link) => {
          link.addEventListener("click", () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            //llado de funcion para que cargue todo el html cuando se elimine un producto en el carrito
            renderOrderSummary();

            //llamado de funcion que actualice el total de productos --en la seccion 14 tambien lo hicismo con updateCartQuantity pero es con DOM
            //con checkoutHeaderHTML() es con MVC 
            checkoutHeaderHTML();

            //llamado de funcion para que actualice la cantidad sumatoria de productos y impuestos que se tiene en carrito de compra
            renderPaymentSummary();
          });
      });


      //parte de aumento del aumento del checkout.html de la cantidad total de productos en el carrito en la parte superior
      function updateCartQuantity(){

        //llamado de funcion para el dato de cartQuantity
        const cartQuantity = calculateCartQuantity();

        document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`;

      }

      //llamado de funcion cuando carge la pagina para que se visualice el total de productos real
      updateCartQuantity();

      //Funcion de obtencion de enlaces para actualizar
      document.querySelectorAll(".js-update-link").forEach((link) => {
        link.addEventListener("click", () => {
          const productId = link.dataset.productId;
          
          //parte de actualizar el producto de checkout la cantidad de productos
          const container = document.querySelector(`.js-cart-item-container-${productId}`);

          container.classList.add("is-editing-quantity");

        });
        
      });




      //Parte de implementacion del cambio entre "Actualizar" y "Guardar" 
      document.querySelectorAll(".js-save-link").forEach((link) => {
        link.addEventListener("click", () => {

          const productId = link.dataset.productId;
        
          //Parte de guardar la cantidad que se ingresa
          const quantityInput  = document.querySelector(`.js-quantity-input-${productId}`);
          const newQuantity  = Number(quantityInput.value);

          //retorno anticipado
          if (newQuantity < 0 || newQuantity >= 1000) {
            alert('La cantidad debe ser al menos 0 y menor que 1000.');
            return;
          }

          //uso de la funcion creada
          updateQuantity(productId, newQuantity);

          //se movio para aca el codigo
          const container = document.querySelector(`.js-cart-item-container-${productId}`);
          container.classList.remove('is-editing-quantity');


          //Actulizacion de cantidad del carrito en el HTML
          const quantityLabel  = document.querySelector(`.js-quantity-label-${productId}`);

          quantityLabel.innerHTML = newQuantity;

          updateCartQuantity();
        
        });
        
      });



      //Oyente para la funcion de elegir que opcion de entrega de producto
      document.querySelectorAll(".js-delivery-option").forEach((element) => {
        element.addEventListener("click", () => {
          const {productId, deliveryOptionId} = element.dataset;
          updateDeliveryOption(productId, deliveryOptionId);

          //Llamado de la funcion para que actualice la pagina
          renderOrderSummary();

          //llamado de funcion para que actualice la cantidad sumatoria de productos y impuestos que se tiene en carrito de compra
          renderPaymentSummary();

        });
      });


}


