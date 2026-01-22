

//Ejericicio 3

/**
 * indice validar que no sea menor a cero y que el elemento
 * exista en el array
 */

function getbyIdx(arr, idx){

            /* Forma 2 
                if (idx < 0 || arr.length <= idx){   // esta es la mejor ya que si le damos numeros negativos devuel elemnto no existe
                    return "Elemento no existe";
                }
                return arr[idx];
                */

    let array = arr;
    let dato = array.length - 1;

    if ( idx < dato){
        return array[idx];
    } else if(idx === dato) {
        return array[idx];
    } else {
        return "Index No existe :(";
    }

}
let resultado = getbyIdx([1, 2, 3], 1);

console.log(resultado);

