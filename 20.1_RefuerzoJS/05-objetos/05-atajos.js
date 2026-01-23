//objeto.construcctor


let obj = {

};

let obj1 = new Object();

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number();
 * new Boolean(); 
 */


function Usuario(){
    this.name = "Hola";
}

let user = new Usuario();

console.log(user.constructor);


// uso de ".valeuOf()" para que devuela el valor real
let x = new Number(10);

console.log(x);          // Number {10}
console.log(x.valueOf()); // 10