//Use de Operadores vistos --> short-ciruit

//Falso
/* 
- seria el Boolean de false
- 0
- '' , " "
- null
- undefined
- NaN

Todos estos se conocen como "Falsy"
*/

//let nombre = ""; // si se muestra en consola muestra Anonimo porque nombre esta vacio es false
let nombre = "John"; // si se muestra en consola muestra John porque nombre es true no esta vacio
let username = nombre || "Anonimo";
console.log(username);

function fn1(){
    console.log("Soy Funcion 1");
    return false;
}

function fn2(){
    console.log("Soy Funcion 2");
    return true;
}

let funciones = fn1() && fn2(); // solo devolvera la primera funcion ya que ambas no returnan true o no sonm iguales
