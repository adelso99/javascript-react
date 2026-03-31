import {cart} from "../../data/cart.js";
import {getProduct} from "../../data/products.js";
import {getDeliveryOption} from "../../data/deliveryOptions.js";
import {formatCurrency} from "../utils/money.js";

export function renderPaymentSummary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;  //shiping es --> Envio

  cart.forEach((cartItem) => {
    //uso de la funcion para sumar todos los productos que fueron elegidos para comprar en el carrito
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity
 
    //uso de la funcion para sumar el total de envios elegidos para cada producto del carrito
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

  });

  //parte donde calcula la suma del total de productos y total de envios elegidos antes del impuesto
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;

  //parte donde calcula el 10% del impuesto sobre el total del producto y envio del producto -- 10% = multiplicar por 10/100
  const taxCents = totalBeforeTaxCents * 0.1; //que el 0.1 es el 10%

  //parte que calcula el total de productos, envio de Producto y el 10% de impuesto
  const totalCents = totalBeforeTaxCents + taxCents;


  //Parte de suma de Productos en el carrito 
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;//parte de suma del cantidad de productos en el carrito
  });

  //parte para generar el HTML
  const paymentSummaryHTML = `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">
            $${formatCurrency(productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
             <div class="payment-summary-money js-payment-summary-shipping">
            $${formatCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${formatCurrency(totalBeforeTaxCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${formatCurrency(taxCents)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money js-payment-summary-total">
            $${formatCurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

}