export const cart = [

  
];


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