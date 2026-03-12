import {cart, addToCart, calculateCartQuantity} from "../data/cart.js";
import {products} from "../data/products.js";
import {formatCurrency} from "./utils/money.js";


let productsHTML = "";

products.forEach((product) => {

  //Patron Acumulador
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;

});

//agregando con ayuda de DOM el HTML generado a la web
document.querySelector(".js-products-grid").innerHTML = productsHTML;


//funcion de actualizar el carrito
function updateCartQuantity(){

   //llamado de funcion oara el dato de cartQuantity
    const cartQuantity = calculateCartQuantity();

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

}


//llamado de funcion para que actualice el total de productos de  una vez ya cuando cargue la pagina
updateCartQuantity();


//añadiendo evento al boton de agregar para hacerlo interactivo
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () =>{ 
      const productId = button.dataset.productId;

      //llamado de funcion para agregar al carrito
      addToCart(productId);
    
      //Parte de la Logica del Carrito de Productos
      updateCartQuantity();

  });
});