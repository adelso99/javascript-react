//Programacio Orientada a Objetos
const cart = {
    cartItems: undefined,

    //cuando se tiene una funcion dentro de un objeto, se llama metodo
    //aremos uso del metodo "this" ya que si se cambia el nombre del objeto con this no tenemos problema
    //aremos uso al atajo de funcion que tiene metodos en vez de hacer esto -- Acceso directo para: loadFromStorage: function() {
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

        if(!this.cartItems){
            this.cartItems =  [{
                      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                      quantity: 2,
                      deliveryOptionId: "1"  
                    }, {
                      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                      quantity: 1,
                      deliveryOptionId: "2"
                    }];   
        }
    },


    //aremos uso al atajo de funcion que tiene metodos en vez de hacer esto -- Acceso directo para: saveToStorage: function() {
    saveToStorage(){
      localStorage.setItem("cart-oop", JSON.stringify(this.cartItems))
    },


    //Funcion para agregar al carrito
    addToCart(productId){
      //Parte de la Logica de la cantidad de Productos que se desean agregar al carrito
      let matchingItem;

        this.cartItems.forEach((cartItem) => {
          if(productId === cartItem.productId){
              matchingItem = cartItem;
          }
        });

        if(matchingItem){
          matchingItem.quantity += +1;
        }else{
          this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: "1"
          });
        }

      //como se esta llamando a una funcion que esta dentro de un objeto se usa "this" para llemar al objeto y el nombre la funcion (ahora es metodo)
      this.saveToStorage();

    },

    removeFromCart(productId){
      const newCart = [];
    
        this.cartItems.forEach((cartItem) => {
          if(cartItem.productId !== productId){
            newCart.push(cartItem);
          }
        });
    
      this.cartItems = newCart;
    
      //como se esta llamando a una funcion que esta dentro de un objeto se usa "this" para llemar al objeto y el nombre la funcion (ahora es metodo)
      this.saveToStorage();
    
    },

    //funcion de calcular la actualizacion del carrito
    calculateCartQuantity(){
      let cartQuantity = 0;

      this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      return cartQuantity

    },

    //funcion para actualizar el carrito
    updateQuantity(productId, newQuantity){

      let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
              matchingItem = cartItem;
            }
        });

      matchingItem.quantity = newQuantity;

      //como se esta llamando a una funcion que esta dentro de un objeto se usa "this" para llemar al objeto y el nombre la funcion (ahora es metodo)
      this.saveToStorage();

    },

    //Funcion para la actualizacion de la fecha de la entrega de los productos
    updateDeliveryOption(productId, deliveryOptionId){
      //Conseguir el Id del Producto
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
      });

      matchingItem.deliveryOptionId = deliveryOptionId

      //como actualizamos el carrito de la fecha de procutos tambien debemos de guardarlos en localStorage
      this.saveToStorage();

    }


};


loadFromStorage();

















