//Argumentos y Parametros

/*
function suma(num1, num2) {  //num1, num2: seran parametros de nuestra funcion
    return num1 + num2;
}

let resultado = suma(2, 4); // 2 y 3: son los argumentos

console.log(resultado);
//Esto dara un resultado de 6
*/
//console.log(typeof suma);  --> function


//si quisieras pasarle varios argumentos a nustra funcion
function suma(num1, num2) {  //parametros de nuestra funcion
    
    console.log(arguments); // con arguments podemos ver todos los argumenos que se le pasan a la funcion
    return num1 + num2;
}

let resultado = suma(2, 4, 4 ,6 ,7); //argumentos

console.log(resultado);