export let cart = JSON.parse(localStorage.getItem("cart"));


  if(!cart){
      cart =  [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: "1"  
              }, {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: "2"
              }];
            
  }




function saveToStorage(){
  localStorage.setItem("cart", JSON.stringify(cart))
}


//Funcion para agregar al carrito
export function addToCart(productId){
  //Parte de la Logica de la cantidad de Productos que se desean agregar al carrito
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
        matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += +1;
  }else{
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1"
    });
  }


  saveToStorage();


}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();

}


//funcion de calcular la actualizacion del carrito
export function calculateCartQuantity(){
        let cartQuantity = 0;

      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      return cartQuantity

}



//funcion para actualizar el carrito
export function updateQuantity(productId, newQuantity){

  let matchingItem;

  cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
  });

   matchingItem.quantity = newQuantity;

  saveToStorage();

}
