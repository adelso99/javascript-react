

//Ejercicio 9
/**
 * Crear un algoritmo que devuela un 
 * array de objetos en base a pares
 */

let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "John" }],
];


function toCollection(arr){

    let pares = [];

    for(let i = 0; i < arr.length; i++){
        let dato =   {
            id: arr[i][0], 
            name: arr[i][1].name,
        };

        pares.push(dato);

    }

    return pares;

    /* Forma 2    
            let collection [];
            for(idx in arr) {
                let elemento = arr[idx];

                collection[idx] = elemento[1];
                collection[idx].id = elemento[0];
            }

            return collection;
    */

}

let resultado = toCollection(pairs);

console.log(resultado);


/*
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
*/


