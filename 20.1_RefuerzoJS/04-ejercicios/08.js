

//Ejercicio 8
/**
 * Crear un algoritmo que tome un array de
 * objeto y devuela un array de pares
 */

let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Felipe", 
}, {
    id: 3,
    name: "John",
}];


function toPairs(arr){

    let pares = [];

    for(let i = 0; i < arr.length; i++){
        let dato = [arr[i].id, arr[i]];

        pares.push(dato);

    }

    return pares;

}

let resultado = toPairs(array);

console.log(resultado);

/*
let pares = [
    [1, { id: 1, name: "Nicolas"}],
    [2, { id: 2, name: "Felipe"}],
    [3, { id: 3, name: "John"}],
];
*/