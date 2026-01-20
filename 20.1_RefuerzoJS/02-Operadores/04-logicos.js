

//Operadores Logicos
// AND, OR, NOT
// &&, ||,  !


//AND --> &&
//evalua lo que se encuntra en ambos lados
//console.log(true && true); //Dara true porque ambos lados son true
//console.log(true && false); //Dara false porque los lados no son iguales


let mayor = false;
let suscrito = true;

console.log("Operador AND: ", mayor && suscrito);//false porque ambas no son iguales


//OR
// si no cumple una accion entonces puede cumplir otra
console.log("Operador OR: ", mayor || suscrito);//true poque existe 2 acciones

//NOT
//Invierte el valor
console.log("Operador NOT: ", !mayor); //true porque invierte el valor del false


let catalogoInfantil = !mayor; // solo acceso a ese catalogo

