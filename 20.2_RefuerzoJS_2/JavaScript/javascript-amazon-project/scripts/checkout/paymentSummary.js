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
  
}