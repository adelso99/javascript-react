

//Ejericicio 10
/**
 * Crear un arrray de longitud N, y sus elementos
 * sean numeros de 1 hasta N
 */

let longitud = 15;

function crearArray(n) {

    let numero = [];

    for(let i = 1; i <= n; i++){

        numero.push(i);
    }

    return numero;

}

let resultado = crearArray(longitud);

console.log(resultado);