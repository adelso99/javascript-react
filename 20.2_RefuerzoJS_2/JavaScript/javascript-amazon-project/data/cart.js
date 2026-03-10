export const cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2  
}, {
  productId: "4863415b6fc6f-327a-4ec4-896f-486349e85a3d9e85a3d",
  quantity: 1  
}];


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
      quantity: 1
    });
  }

}

