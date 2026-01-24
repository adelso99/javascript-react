
//Referencias 

/* datos primitivos
let a = 1;
let b = a;

b++; 
console.log(a , b);
*/



/* objetos
let a = {};
let b = a;

b.prop = 1;

console.log(a, b);
*/


//Funciones 
/*
let a = 1;

function suma(n){ //n es otra variable que se crea internamente 
    n++;
}

suma(a);
console.log(a);  // por eso es que aca pasa "1" y no aumenta

*/

//en objeto
let a = {
    prop: 1,
};

function suma(n){ //n es la referencia del objeto 
    n.prop++;  //entra a la referencia que se le pasa y aumenta el numero
}

suma(a);
console.log(a);  // por eso es que aca pasa "2" y si aumenta


