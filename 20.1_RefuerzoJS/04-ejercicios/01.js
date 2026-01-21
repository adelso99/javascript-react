//Ejercicio 1

function cualEsMayor(a, b){

    if (a < b){
      return "El numero mayor es b: "+b;
    } else {
      return "El numero mayor es a: "+a;
    }

    //Operador Ternario, Opcion 2
    //return ( a > b ) ? a : b;

}

let mayor = cualEsMayor(10, 5);

console.log(mayor);