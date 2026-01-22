
//Ejercicio 7
/**
 * Crear algoritmo que devuelva 
 * el precio del producto 
 * mas impuesto
 */

function precioCompleto(precio, impuesto){

    let impuestoFinal = precio * impuesto;
    let precioFinal = precio + impuestoFinal;

    return ["este es el Impuesto del Producto: "+impuestoFinal, "este es el Precio del Producto: "+ precioFinal];

    /** Forma 2
      return precio + (precio * impuesto);
     
     */

}

let resultado = precioCompleto(19.90, 0.15);

console.log(resultado);

