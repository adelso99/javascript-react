import {cart} from "../../data/cart.js";
import {getProduct} from "../../data/products.js";
import {getDeliveryOption} from "../../data/deliveryOptions.js";

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
  const totalBeforeTaxCents = (productPriceCents + shippingPriceCents) / 100;

  //parte donde calcula el 10% del impuesto sobre el total del producto y envio del producto -- 10% = multiplicar por 10/100
  const taxCents = totalBeforeTaxCents * 0.1; //que el 0.1 es el 10%

  //parte que calcula el total de productos, envio de Producto y el 10% de impuesto
  const totalCents = totalBeforeTaxCents + taxCents;

  
}