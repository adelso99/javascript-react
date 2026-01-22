

//Ejericicio 6
/**
 * Crer un algoritmo que devuelva cantidad
 * de numeros positivos de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {

    let nuevo = [];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            nuevo.push(arr[i]);
        }

    }

    return nuevo.length;

    /* Forma 2
        let cantidad = 0;

        for ( elemento of arr){
            if (elemento > 0){
                cantidad++;
            }
        }

        return cantidad;
    
    */

}

let resultado = cuantosPositivos(array);

console.log(resultado);


