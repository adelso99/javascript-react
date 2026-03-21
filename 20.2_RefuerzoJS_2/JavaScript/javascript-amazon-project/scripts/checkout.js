import {cart, removeFromCart, calculateCartQuantity, updateQuantity} from "../data/cart.js";
import {products} from "../data/products.js";
import {formatCurrency} from "./utils/money.js";

//Importacion de ESM
import {hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";

//Importacion de daysj
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

//Importacion de archivo para el deliveryOptions
import {deliveryOptions} from "../data/deliveryOptions.js";

hello();
const today = dayjs();
const deliveryDate = today.add(7, "days");  //agrega que faltan 7 dias
console.log(deliveryDate.format("dddd, MMMM D"));
 
let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
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
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

});

//Creacion de la opcion de pago gratis, 7 dias o 1 dia
function deliveryOptionsHTML(){
  deliveryOptions.forEach( () => {
    
  });

}


document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;



document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();

      //llamado de funcion que actualice el total de productos
      updateCartQuantity();

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



